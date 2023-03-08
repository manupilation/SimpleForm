const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "CEP inválido."
  },
  email: {
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    message: "Email inválido.",
  },
  senha: {
    regex: /^.{5, 40}$/,
    message: "Sua senha deve conter entre 5 e 40 caracteres",
  },
}

export default types;
