import React from "react"

const Error = ({ state }) => {
  return (
    <React.Fragment>
      <h1>{state.errorMessage.message}</h1>
      <p>{state.errorMessage.code}</p>
      <p>{state.errorMessage.config.url}</p>
    </React.Fragment>
  )
}

export default Error
