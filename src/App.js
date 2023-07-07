import React, { useState } from 'react';
import ProtectedPage from './ProtectedPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/protected">
          <ProtectedPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;