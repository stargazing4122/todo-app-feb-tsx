import { ChangeEvent, useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = (): void => {
    setFormValues(initialState);
  };

  return { formValues, handleValue, resetForm };
};

export default useForm;
