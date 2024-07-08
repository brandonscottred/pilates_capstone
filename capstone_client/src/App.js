import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'
import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadMediaPage/UploadMediaPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/auth' />} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/:username" element={<HomePage/>} />
        <Route path="/:username/:exerciseId" element={<HomePage />} />
        <Route path="/upload/:username" element={<UploadPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
