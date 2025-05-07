import React from 'react'
import LoginForm from './components/Login'
import Registre from './components/Registre'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<LoginForm />} />
          <Route path='/signup' element={<Registre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;