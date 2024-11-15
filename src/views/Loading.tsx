// Loading.tsx
import React from 'react';
import './Loading.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

const Loading: React.FC = () => {
  const navigate = useNavigate();

const handleClick = () => {
  navigate('/booking');
};


  return (
    <div className="loading-view" onClick={handleClick}>
      <Logo className="logo" />
      <h1 className="title">STRAJK</h1>
        <h2 className="subtitle">BOWLING</h2>
    </div>
  );
};

export default Loading;

export {};
