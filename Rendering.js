import React from 'react'

const Rendering = (props) => {
  return (props.islogged ? <h1>Welcome Nagini</h1> : <h1>can't Login</h1>)
   
}

export default Rendering
