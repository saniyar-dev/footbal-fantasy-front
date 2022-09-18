import React, { useEffect } from 'react';
import MakeTeamPage from './pages/MakeTeamPage/MakeTeamPage';
import {Route, Routes, useNavigate} from "react-router-dom"
import SignUpPage from './pages/SignupPage/SignUpPage';
import ModalHandler from './components/ModalHandler/ModalHandler';
import useAuth from './services/useAuth';

function App() {
  const navigate = useNavigate();
  const {CheckAuth} = useAuth();

  useEffect(() => {
    if (CheckAuth()) {
      navigate('/create-team')
    } else {
      navigate('/user/login')
    }
  }, [])
  return (
    <>
      <ModalHandler />
      <Routes>
        <Route path='/user/:type' element={<SignUpPage />} />
        <Route path='/create-team' element={<MakeTeamPage />} />
      </Routes>
    </>
  );
}

export default App;
