// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const [error, setError] = React.useState(null); // hooks yeah

  function handleSubmit(event) {
    event.preventDefault();
    const value=event.target.elements.username.value
    onSubmitUsername(value);
  }

  function handleKeypress(event) {
    const key = event.target.value;
    if (key !== key.toLowerCase()) {
      setError('Input must be lowercase');
    } else {
      setError(null);
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleKeypress} id="username" type="text" />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
