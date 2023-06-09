import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main';
import Create from './components/Create/Create';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main />} />
        <Route path='create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
