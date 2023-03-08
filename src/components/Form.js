import React, { useState } from 'react'
import formFields from '../data/formFields';
import Input from './Input';
import Status from './Status';


const Form = () => {
  const [form, setForm] = useState(
    formFields.reduce((acc, next) => {
      return {
        ...acc,
        [next.id]: "",
      }
    }, {}), {});
  const [reqStatus, setReqStatus] = useState(null)

  function handleForm({target}) {
    const {id, value} = target;
    setForm({ ...form, [id]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const criaUser = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    });
    setReqStatus(criaUser.status);
    setTimeout(() => {
      setReqStatus(null)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Status status={reqStatus} handleError={setReqStatus}/>
      {formFields.map(({id, type, label, required}, i) => (
        <Input
          key={i}
          handle={handleForm}
          type={type}
          name={id}
          label={label}
          value={form[id]}
          required={required}
        />
      ))}
      <button type='submit'>ENVIAR</button>
    </form>
  )
}

export default Form