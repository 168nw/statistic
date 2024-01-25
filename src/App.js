import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/Header';
import Start from './pages/Start';
import FormPage from './pages/FormPage';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
