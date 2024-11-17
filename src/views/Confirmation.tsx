import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookingResponse } from '../types/Booking';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import './Confirmation.css';

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state as BookingResponse;

  if (!bookingData) {
    return (
      <div className="no-booking">
        <h2>No booking found. Please make a booking first.</h2>
        <button onClick={() => navigate('/booking')}>GO PLAN A STRIKE!!!</button>
      </div>
    );
  }

  return (
    <div className="confirmation-view">
      <div className="header">
        <Logo className="logo" />
        <h2 className="header-title">SEE YOU SOON!</h2>
      </div>
      <div className="section-title">
        <span></span>
        <h3>BOOKING DETAILS</h3>
        <span></span>
      </div>
      <div className="booking-details">
        <div className="detail-field">
          <label>WHEN</label>
          <p>{bookingData.when}</p>
        </div>
        <div className="detail-field">
          <label>WHO</label>
          <p>{bookingData.people} pers</p>
        </div>
        <div className="detail-field">
          <label>LANES</label>
          <p>{bookingData.lanes} lane</p>
        </div>
        <div className="detail-field">
          <label>BOOKING NUMBER</label>
          <p>{bookingData.id}</p>
        </div>
      </div>
      <div className="total-section">
        <p>
          <strong>total</strong>
          <span>{bookingData.price} SEK</span>
        </p>
      </div>
      <button onClick={() => navigate('/')}>SWEET, LET'S GO!</button>
    </div>
  );
};

export default Confirmation;
