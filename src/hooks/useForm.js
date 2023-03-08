import React, { useState } from "react";
import types from "../data/useFormTypes";

const useForm = (value, type, required) => {
  const [error, setError] = useState(null);

  function validate() {
    if(!required) return true;

    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm