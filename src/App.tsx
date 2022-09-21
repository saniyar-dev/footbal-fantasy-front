import React, { useEffect } from 'react';
import {Route, Routes, useNavigate} from "react-router-dom"
import SignUpPage from './pages/SignupPage/SignUpPage';
import ModalHandler from './components/ModalHandler/ModalHandler';
import useAuth from './services/useAuth';
import AppLayout from './pages/AppLayout/AppLayout';
import MakeTeamPage from './pages/MakeTeamPage/MakeTeamPage';
import EventPage from './pages/EventPage/EventPage';
import ChangePlayerPage from './pages/ChangePlayerPage/ChangePlayerPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RewardsPage from './pages/RewardsPage/RewardsPage';

function App() {
  const navigate = useNavigate();
  const {CheckAuth} = useAuth();

  useEffect(() => {
    if (CheckAuth()) {
      navigate('/app/create-team')
    } else {
      navigate('/user/login')
    }
  }, [])
  return (
    <>
      <ModalHandler />
      <Routes>
        <Route path='/user/:type' element={<SignUpPage />} />
        <Route path='app' element={<AppLayout />} >
          <Route path='create-team' element={<MakeTeamPage />} />
          <Route path='recent-events' element={<EventPage />} />
          <Route path='change-players' element={<ChangePlayerPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='rewards' element={<RewardsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
