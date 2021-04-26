import { useCallback, useEffect, useRef, useState } from 'react';
import reqResApi from '../api/reqRes';
import { ReqResList, Usuario } from '../interfaces/ReqRes';

const useUsuarios = () => {
  const [users, setUsers] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

  const getUsers = useCallback(async () => {
    const { data } = await reqResApi.get<ReqResList>('/users', {
      params: { page: paginaRef.current }
    });
    const usuarios = data.data;
    if (usuarios.length) {
      setUsers(usuarios);
    } else {
      paginaRef.current -= 1;
      // eslint-disable-next-line no-alert
      alert('No hay mas registros');
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const paginaSiguiente = () => {
    paginaRef.current += 1;
    getUsers();
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current -= 1;
      getUsers();
    }
  };

  return { usuarios: users, paginaSiguiente, paginaAnterior };
};

export default useUsuarios;
