import { ReactElement } from 'react';
import useUsuarios from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/ReqRes';

const Usuarios = (): ReactElement => {
  const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

  const renderUser = ({
    id,
    first_name: fistName,
    last_name: lastName,
    email,
    avatar
  }: Usuario) => (
    <tr key={id.toString()}>
      <th>
        <img
          src={avatar}
          alt={fistName}
          style={{ width: 35, borderRadius: 100 }}
        />
      </th>
      <th>
        {fistName} {lastName}
      </th>
      <th>{email}</th>
    </tr>
  );

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderUser(usuario))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguiente
      </button>
    </>
  );
};

export default Usuarios;
