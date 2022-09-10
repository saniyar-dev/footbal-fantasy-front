import React from 'react';
import MakeTeamPage from './pages/MakeTeamPage/MakeTeamPage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUpPage from './pages/SignupPage/SignUpPage';

function App() {
  return (
    <>
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
