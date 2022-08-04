import React from 'react'

function Auth(props) {

  const type = props.match.params.form 

  return (
    <div>
      <h1>{type}</h1>
    </div>
  );
}

export default Auth
