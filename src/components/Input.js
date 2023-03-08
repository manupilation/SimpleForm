import React from 'react';
import useForm from '../hooks/useForm';

const Input = ({...props}) => {
  const { name, type, handle, label, value, placeholder, required } = props;
  const {error, validate, onBlur} = useForm(value, name, required);

  function handleChange(event) {
    if (error) validate(event.target.value);
    handle(event);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder ? placeholder : ""}
        onBlur={onBlur}
      />
      {error ? <p>{error}</p> : null}
    </div>
  )
}

export default Input