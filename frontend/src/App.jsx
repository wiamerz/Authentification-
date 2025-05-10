import React from 'react'
import LoginForm from './components/Login'
import Registre from './components/Registre'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Profile from './components/Profile';
import AuthProvider from "./provider/AuthProvider";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes> 
          <Route path='/' element={<LoginForm />} />
          <Route path='/signup' element={<Registre />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter> */}
      <AuthProvider>
       <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;