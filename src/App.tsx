import React, { useEffect } from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"
import SignUpPage from './pages/SignupPage/SignUpPage';
import ModalHandler from './components/ModalHandler/ModalHandler';
import useAuth from './services/useAuth';
import AppLayout from './pages/AppLayout/AppLayout';
import MakeTeamPage from './pages/MakeTeamPage/MakeTeamPage';
import EventPage from './pages/EventPage/EventPage';
import ChangePlayerPage from './pages/ChangePlayerPage/ChangePlayerPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RewardsPage from './pages/RewardsPage/RewardsPage';
import LoginFormComponent from './components/LoginForm/LoginForm';
import SignupFormComponent from './components/SignUpForm/SignUpForm';
import SignupConfirmFormComponent from './components/SignupConfirmForm/SignupConfirmForm';
import ToastHandler from './atomComponents/ToastHandler/ToastHandler';
import useAppState from './services/useAppState';
import ProfilePreview from './components/Profile/ProfilePreview';
import EditProfile from './components/Profile/EditProfile';

function App() {
  const navigate = useNavigate();
  const {CheckAuth} = useAuth();
  const location = useLocation()
  const {getAppState} = useAppState()

  useEffect(() => {
    if (CheckAuth()) {
      if (location.pathname.length <= 1) navigate('/app/create-team')
      getAppState()
    } else {
      navigate('/user/login')
    }
  }, [])
  return (
    <>
      <ModalHandler />
      <ToastHandler />
      <Routes>
        <Route path='user' element={<SignUpPage />} >
          <Route path='login' element={<LoginFormComponent />} />
          <Route path='signup' element={<SignupFormComponent />} />
          <Route path='confirm' element={<SignupConfirmFormComponent />} />

        </Route>
        <Route path='app' element={<AppLayout />} >
          <Route path='create-team' element={<MakeTeamPage />} />
          <Route path='recent-events' element={<EventPage />} />
          <Route path='change-players' element={<ChangePlayerPage />} />
          <Route path='profile' element={<ProfilePage />}>
            <Route index element={<ProfilePreview />} />
            <Route path='edit' element={<EditProfile />} />
          </Route>
          <Route path='rewards' element={<RewardsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
