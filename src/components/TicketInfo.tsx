
import React from 'react';
import { useCountdown, useFormattedDate } from '../utils/useCountdown';
import { Link } from 'react-router-dom';
import { useDestination } from '../context/DestinationContext';
import boy from "../../public/images/boy.png";
import download from "../../public/images/download.png";
import greenright from "../../public/images/greenright.png";

const TicketInfo: React.FC = () => {
  const { formattedTime, letterSpacing } = useCountdown(5400); // 1h 30m in seconds (3600 + 1800)
  const formattedDate = useFormattedDate();
  const { fromDestination, toDestination } = useDestination();

  return (
    <div className="ticket ">
      <img src={download} alt="Paytm Logo" className="sitilink" />

      <p className="text-2xl font-semibold mt-4">{fromDestination} → {toDestination}</p>
      <p className="mt-2 text-gray-400">1 Adult Ticket</p>
      <img
        src={boy}
        alt="QR Code"
        className="m-auto mt-4 boy rounded-full"
      />

      <div className="flex justify-center items-center mt-4">
        <p className="price">₹10</p>
        <img src={greenright} className="w-10 ml-2" />
      </div>
      <p>TICKET BOOKED SUCCESSFULLY</p>
      <p id="time" className="pt-4">{formattedDate}</p>
      <p className="border-dotted border-gray-300 border mt-4"></p>

      <div className="border border-gray-300 p-2 m-4 mt-4 rounded-md bg-white">
        <p>Your ticket is valid for</p>
        <p className="timer" id="countdown" style={{ letterSpacing }}>
          {formattedTime}
        </p>
        <p>Hours Minutes Seconds</p>
        <Link to="/view-ticket">
          <button
            className="bg-blue-400 w-full rounded-md h-full text-white p-3 mt-4 m-auto"
          >
            View Your Tickets
          </button>
        </Link>
      </div>
      <p className="border-4 border-blue-400 mt-4"></p>
    </div>
  );
};

export default TicketInfo;
