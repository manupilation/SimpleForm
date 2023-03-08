import React from 'react'

const Status = ({status}) => {
  if(status === 200) {
    return (
      <div className="request success">
        Seu formulário foi processado!
      </div>
    )
  }

  if (status === 403) {
    return (
      <div className="request inputError">
        Há algo errado em seus inputs!
      </div>
    )
  }

  if (status === 403) {
    return (
      <div className="request inputError">
        Há algo errado em seus inputs!
      </div>
    )
  }

  if (status === 404) {
    return (
      <div className="request notFound">
        Não encontramos nada a respeito!
      </div>
    )
  }

  if (status === 500) {
    return (
      <div className="request fatalError">
        Houve um erro inesperado!
      </div>
    )
  }

  return null;
}

export default Status