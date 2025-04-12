
import React from 'react';
import { useFormattedDate } from '../utils/useCountdown';

const PaymentDetails: React.FC = () => {
  const formattedDate = useFormattedDate();

  return (
    <div
      className="m-auto p-8 w-[90%] border border-gray-200 shadow-lg mx-auto mt-8 rounded-lg"
    >
      <h2>Payment Details</h2>
      <h4 className="mt-4 text-gray-400">FARE BREAKUP</h4>

      <div className="flex justify-between mt-4 border-b border-gray-200 py-2">
        <p className="">1 X Adult</p>
        <p className="pt-4">₹10</p>
      </div>
      <div className="flex justify-between mt-4 pb-3 border-b border-gray-200 ">
        <p className="">Total</p>
        <p className=" ">₹10</p>
      </div>
      <div
        className="flex justify-between mt-[-20px] border-b-1 border-gray-200 border-dotted py-2"
      >
         
      </div>
      <p className="mt-5 text-gray-400">PAYMENT MODE</p>
      <div className="flex justify-between mt-4 py-2">
        <p className="">UPI Linked Bank Account</p>
        <p>₹10</p>
      </div>
      <p>Transaction ID : 503055838998</p>
    </div>
  );
};

export default PaymentDetails;
