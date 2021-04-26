import useForm from '../hooks/useForm';

const Formularios = () => {
  const { email, password, formulario, onChange } = useForm({
    email: 'test@test.com',
    password: 'j4kj4jk4'
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, 'email')}
      />
      <input
        type="password"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, 'password')}
      />

      <code>
        <pre>{JSON.stringify(formulario)}</pre>
      </code>
    </>
  );
};

export default Formularios;
