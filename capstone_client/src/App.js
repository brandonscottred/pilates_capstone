import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'
import AuthPage from './pages/LandingPage/AuthPage'
import HomePage from './pages/HomePage/HomePage';
import ExercisePage from './pages/HomePage/ExercisePage';
import UploadPage from './pages/HomePage/UploadPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/home/:username" element={<HomePage/>} />
        <Route path="/exercises/:username" element={<ExercisePage/>} />
        <Route path="/upload/:username" element={<UploadPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
