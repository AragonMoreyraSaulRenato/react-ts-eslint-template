import useCounter from '../hooks/useCounter';

const Contador = () => {
  const { valor, acumular } = useCounter(10);

  return (
    <>
      <h3>
        Contador:
        <small>{valor}</small>
      </h3>
      <button onClick={() => acumular(1)}>+1</button>
      &nbsp;
      <button onClick={() => acumular(-1)}>-1</button>
    </>
  );
};

export default Contador;
