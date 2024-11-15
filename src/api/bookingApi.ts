import axios from 'axios';
import { BookingRequest, BookingResponse } from '../types/Booking';

const BASE_URL = 'https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com';
const API_KEY = '738c6b9d-24cf-47c3-b688-f4f4c5747662';

export const makeBooking = async (bookingData: BookingRequest): Promise<BookingResponse> => {
  try {
    const bookingPayload = JSON.stringify(bookingData);

    const response = await axios.post<BookingResponse>(BASE_URL, bookingPayload, {
      headers: {
        'Content-Type': 'text/plain',
        'x-api-key': API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Error response from API:', error.response.data);
      throw new Error(`HTTP error! Status: ${error.response.status}, Details: ${error.response.data.message}`);
    } else {
      console.error('Error making booking:', error);
      throw error;
    }
  }
};
