
import React from 'react';
import arrowup from '../../public/images/arrowup.svg';

const TripDetails: React.FC = () => {
  return (
    <div
      className="footer mx-auto mt-10 border border-gray-200 shadow-lg rounded-lg w-[90%]"
    >
      <div className="flex justify-between">
        <h2>Trip Details</h2>
        <img src={arrowup} className="w-6" />
      </div>
      <p className="pt-4 text-gray-500">Operator</p>

      <p>Surat Sitilink</p>
      <p className="border-dotted border-gray-300 border mt-4"></p>

      <h1 className="mt-4">Order ID: 24772608630 <a href="#copy">copy</a></h1>
      <h6 className="mt-4 text-sm">
        For any queries regarding QR Ticket, please contact Surat Sitilink
        with Order Id.
      </h6>
    </div>
  );
};

export default TripDetails;
