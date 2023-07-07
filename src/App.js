import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home';
import Love from './components/Love';
import NotFound from './components/NotFound';
import Layout from './components/partials/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/love" element={<Love/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;