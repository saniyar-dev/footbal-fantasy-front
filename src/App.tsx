import React from 'react';
import MakeTeamPage from './pages/MakeTeamPage/MakeTeamPage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUpPage from './pages/SignupPage/SignUpPage';
import ModalHandler from './components/ModalHandler/ModalHandler';

function App() {
  return (
    <>
      <ModalHandler />
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/create-team' element={<MakeTeamPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
