const TiposBasicos = () => {
  const nombre: string = 'Saul';
  const edad: number = 20;
  const estadoActivo: boolean = false;
  const poderes: string[] = [];

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad} {estadoActivo ? 'Activo' : 'no activo'}
      <br />
      {poderes.join(',')}
    </>
  );
};

export default TiposBasicos;
