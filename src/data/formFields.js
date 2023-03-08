const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    type: "text",
    required: true,
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
    required: true,
  },
  {
    id: "cep",
    label: "CEP",
    type: "text",
    required: true,
  },
  {
    id: "numero",
    label: "Número",
    type: "text",
    required: false,
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
    required:false,
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
    required: false,
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
    required: false,
  }
]

export default formFields;