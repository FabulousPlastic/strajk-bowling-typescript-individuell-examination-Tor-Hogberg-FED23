// ConfirmationView.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookingResponse } from '../types/Booking';
import './ConfirmationView.css';

const ConfirmationView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state as BookingResponse;

  if (!bookingData) {
    return <div>No booking found. Please make a booking first.</div>;
  }

  return (
    <div className="confirmation-view">
      <h2>See You Soon!</h2>
      <div className="booking-details">
        <p>
          <strong>When:</strong> {bookingData.when}
        </p>
        <p>
          <strong>Who:</strong> {bookingData.people} pers
        </p>
        <p>
          <strong>Lanes:</strong> {bookingData.lanes} lane
        </p>
        <p>
          <strong>Booking Number:</strong> {bookingData.id}
        </p>
        <p>
          <strong>Total:</strong> {bookingData.price} SEK
        </p>
      </div>
      <button onClick={() => navigate('/')}>Sweet, Lets Go!</button>
    </div>
  );
};

export default ConfirmationView;
