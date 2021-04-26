interface Direccion {
  pais: string;
  casa: number;
}

interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

const ObjectosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Saul',
    edad: 35,
    direccion: {
      pais: 'Mexico',
      casa: 20
    }
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <code>
        <pre>{JSON.stringify(persona)}</pre>
      </code>
    </>
  );
};

export default ObjectosLiterales;
