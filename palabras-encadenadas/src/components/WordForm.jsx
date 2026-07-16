import { useState } from 'react';

export const WordForm = ({ onAgregarPalabra }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAgregarPalabra(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ingresa una palabra..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
