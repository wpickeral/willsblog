import React, {useState} from 'react';

const useContactForm = () => {
  const [values, setValues] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement> |
          React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return {values, handleChange};
};

export default useContactForm;