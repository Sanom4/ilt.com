import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ProtectedPage() {
  const [message, setMessage] = useState('');
  const history = useHistory();

  if (!loggedIn) {
    history.push('/login');
    return null; // Redirecting to the login page
  }

  function handleButtonClick() {
    setMessage('You clicked the button!');
  }

  return (
    <div>
      <h2>Protected Page</h2>
      <p>Enter the password to access this page:</p>
      <form>
        <input type="password" />
        <button type="submit" onClick={handleButtonClick}>
          Submit
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ProtectedPage;