// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Booking from './views/Booking';
import Confirmation from './views/Confirmation';
import Loading from './views/Loading';
import Navbar from './components/Navbar';
import './App.css';
import './styles/reset.css';

const App: React.FC = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <div className="app-container">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
