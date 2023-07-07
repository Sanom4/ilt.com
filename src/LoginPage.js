import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    // Check if the password is correct
    if (password === 'my-password') {
      setLoggedIn(true);
      history.push('/protected');
    } else {
      setError('Incorrect password');
    }
  }

  if (loggedIn) {
    return null; // Redirecting to the protected page
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;