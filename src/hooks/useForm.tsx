import { useState } from 'react';

const useForm = <T extends Object>(initialForm: T) => {
  const [state, setState] = useState(initialForm);

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value
    });
  };

  return {
    ...state,
    formulario: state,
    onChange
  };
};

export default useForm;
