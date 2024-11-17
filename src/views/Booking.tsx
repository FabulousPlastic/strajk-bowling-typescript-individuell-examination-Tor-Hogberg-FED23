// Booking.tsx
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { makeBooking } from '../api/bookingApi';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [lanes, setLanes] = useState(1);
  const [shoes, setShoes] = useState<number[]>([44]);
  const navigate = useNavigate();

  const handleAddShoe = () => {
    setShoes([...shoes, 44]);
  };

  const handleRemoveShoe = (index: number) => {
    setShoes(shoes.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const bookingData = {
      when: `${date}T${time}`,
      lanes,
      people,
      shoes,
    };
    try {
      const response = await makeBooking(bookingData);
      navigate('/confirmation', { state: response });
    } catch (error) {
      console.error('Error making booking:', error);
    }
  };

  return (
    <div className="booking-view">
      <div className="header">
        <Logo className="logo" />
        <h2 className="header-title">BOOKING</h2>
      </div>
      <div className="booking-form">
        <div className="form-section">
          <div className="section-title">
            <span></span>
            <h3>WHEN, WHAT & WHO</h3>
            <span></span>
          </div>
          <div className="date-time-container">
            <div className="input-field-container">
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="date">Date</label>
            </div>
            <div className="input-field-container">
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="time">Time</label>
            </div>
          </div>
          <div className="input-field-container">
            <input
              type="number"
              id="people"
              min="1"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              placeholder=" "
            />
            <label htmlFor="people">Number of  awsome Bowlers</label>
          </div>
          <div className="input-field-container">
            <input
              type="number"
              id="lanes"
              min="1"
              value={lanes}
              onChange={(e) => setLanes(Number(e.target.value))}
              placeholder=" "
            />
            <label htmlFor="lanes">Number of Lanes</label>
          </div>
        </div>
        <div className="shoes-section">
          <div className="section-title">
            <span></span>
            <h3>SHOES</h3>
            <span></span>
          </div>
          {shoes.map((size, index) => (
            <div key={index} className="shoe-input">
              <div className="input-field-container">
                <input
                  type="number"
                  id={`shoe-size-${index}`}
                  value={size}
                  onChange={(e) => {
                    const updatedShoes = [...shoes];
                    updatedShoes[index] = Number(e.target.value);
                    setShoes(updatedShoes);
                  }}
                  placeholder=" "
                />
                <label htmlFor={`shoe-size-${index}`}>Shoe Size / Person {index + 1}</label>
              </div>
              <button
                onClick={() => handleRemoveShoe(index)}
                className="remove-button"
              >
                -
              </button>
            </div>
          ))}
          <button onClick={handleAddShoe} className="add-button">
            +
          </button>
        </div>
        <button onClick={handleSubmit} className="submit-button">
          STRIIIIIIKE!
        </button>
      </div>
    </div>
  );
};

export default Booking;
