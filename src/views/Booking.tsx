// Booking.tsx
import React from 'react';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import BookingForm from '../components/BookingForm';
import './Booking.css';

const Booking: React.FC = () => {
  return (
    <div className="booking-view">
        <div className="header">        
            <Logo className="logo" />
            <h2 className='header-title'>BOOKING</h2>
        </div>
        <BookingForm />
    </div>
  );
};

export default Booking;
