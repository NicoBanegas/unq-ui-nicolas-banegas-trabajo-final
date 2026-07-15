export const calcularPuntos = (word) => {
  return word.length;
};

export const esCadenaValida = (lastWord, currentWord) => {
  if (!lastWord) return true;
  const lastChar = lastWord.slice(-1).toLowerCase();
  const firstChar = currentWord.charAt(0).toLowerCase();
  return lastChar === firstChar;
};

export const fueUsadaLaPalabra = (history, word) => {
  return history.some((w) => w.toLowerCase() === word.toLowerCase());
};
