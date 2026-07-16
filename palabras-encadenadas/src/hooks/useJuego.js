import { useState, useEffect, useRef } from 'react';
import { validarPalabra } from '../services/api.service';
import { calcularPuntos, esCadenaValida, fueUsadaLaPalabra } from '../utils/gameLogic';

export const useJuego = () => {
  const [cadena, setCadena] = useState([]);
  const [puntaje, setPuntaje] = useState(0);
  const [tiempo, setTiempo] = useState(15);
  const [gameOver, setGameOver] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  
  const timerRef = useRef(null);

  const reiniciarTemporizador = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTiempo(15);
    timerRef.current = setInterval(() => {
      setTiempo((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const agregarPalabra = async (palabra) => {
    setMensajeError('');
    
    if (fueUsadaLaPalabra(cadena, palabra)) {
      setMensajeError('La palabra ya fue utilizada.');
      return;
    }
    
    if (cadena.length > 0 && !esCadenaValida(cadena[cadena.length - 1], palabra)) {
      setMensajeError('La palabra no respeta la regla de encadenamiento.');
      return;
    }

    try {
      const data = await validarPalabra(palabra);
      if (data.exists) {
        setCadena((prev) => [...prev, palabra]);
        setPuntaje((prev) => prev + calcularPuntos(palabra));
        reiniciarTemporizador();
      } else {
        setMensajeError('La palabra no existe en el diccionario.');
      }
    } catch (error) {
      setMensajeError('Error al validar la palabra.');
    }
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return { cadena, puntaje, tiempo, gameOver, mensajeError, agregarPalabra };
};
