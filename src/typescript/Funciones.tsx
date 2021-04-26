import { ReactElement } from 'react';

const Funciones = (): ReactElement => {
  const sumar = (a: number, b: number): number => a + b;

  return (
    <>
      <h3>Funciones</h3>
      {sumar(4, 5)}
    </>
  );
};

export default Funciones;
