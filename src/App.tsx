import { ReactElement } from 'react';
import Formularios from './components/Formularios';
// import Usuarios from './components/Usuarios';
// import Login from './components/Login';
// import Contador from './components/Contador';
// import Funciones from './typescript/Funciones';
// import ObjectosLiterales from './typescript/ObjectosLiterales';
// import TiposBasicos from './typescript/TiposBasicos';

function App(): ReactElement {
  return (
    <main className="m-2">
      <h1>Introducción a TS-React</h1>
      <hr />
      {/* <Login /> */}
      {/* <Contador /> */}
      {/* <Funciones/> */}
      {/* <ObjectosLiterales/> */}
      {/* <TiposBasicos/> */}
      {/* <Usuarios /> */}
      <Formularios />
    </main>
  );
}

export default App;
