
import React from 'react';
import { useCountdown, useFormattedDate } from '../utils/useCountdown';
import { useDestination } from '../context/DestinationContext';
import qrcode from '../../public/images/qr-code.svg';
import arrowup from '../../public/images/arrowup.svg';

const ViewTicketContent: React.FC = () => {
  const { formattedTime, letterSpacing } = useCountdown(5400); // 1h 30m in seconds (3600 + 1800)
  const formattedDate = useFormattedDate();
  const { fromDestination, toDestination } = useDestination();

  return (
    <>
      <div className="flex justify-center">
        <h1 className="flex justify-center font-medium" id="heading">
          {fromDestination} → {toDestination}
        </h1>
      </div>

      <div>
        <p className="flex justify-center mt-5">
          Scan this QR at Entry & Exit Points
        </p>
        <img
          src={qrcode}
          alt="QR Code"
          className="qr flex justify-center m-auto mt-4"
        />
        <p className="flex justify-center m-auto">Your ticket is valid for</p>
        <h1
          className="flex justify-center mt-4 text-3xl font-bold h-4 timer"
          id="countdown"
          style={{ letterSpacing }}
        >
          {formattedTime}
        </h1>
        <p className="flex justify-center mt-8">Hours Minutes Seconds</p>
      </div>
      <div
        className="m-auto p-8 w-[90%] border border-gray-200 shadow-lg mx-auto mt-8 rounded-md"
      >
        <div className="flex justify-between">
          <h2>Ticket Details</h2>
          <img src={arrowup} className="w-6" alt="Arrow up" />
        </div>
        <div className="flex justify-between mt-4 border-b-1 border-gray-200 py-2">
          <p className="">Issued On</p>
          <p>{formattedDate}</p>
        </div>

        <div className="flex justify-between mt-4 border-b-1 border-gray-200 py-2">
          <p className="">Order ID</p>
          <p>24772608630</p>
        </div>

        <div className="flex justify-between mt-4 border-b-1 border-gray-200 py-2">
          <p className="">Order Item ID</p>
          <p>32554312345</p>
        </div>

        <div className="flex justify-between mt-4">
          <p className="">Ticket Type</p>
          <p>1 Adult</p>
        </div>
      </div>
    </>
  );
};

export default ViewTicketContent;
