import { useState } from 'react';

const useCounter = (inicial: number = 0) => {
  const [valor, setValor] = useState(inicial);

  const acumular = (numero: number) => {
    setValor((oldValor) => oldValor + numero);
  };

  return { valor, acumular };
};

export default useCounter;
