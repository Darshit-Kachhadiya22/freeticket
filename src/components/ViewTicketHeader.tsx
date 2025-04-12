
import React from 'react';
import { Link } from 'react-router-dom';
import ticket from '../../public/images/ticket.svg';
  
const ViewTicketHeader: React.FC = () => {
  return (
    <div
      className="flex gap-4 justify-between m-6 ml-1 items-center align-center"
    >
      <div className="flex justufy-start gap-4">
        <Link to="/ticket">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            className="w-6"
          >
            <path
              style={{ fill: "#232326" }}
              d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
              data-name="Left"
            />
          </svg>
        </Link>
        <div
          className="bg-blue-100 rounded-full w-12 h-12 flex justify-center items-center"
        >
          <img src={ticket} alt="Paytm Logo" className="w-6" />
        </div>
        <h2 className="font-bold mt-3">1 QR Ticket</h2>
      </div>
      <a href="https://paytm.com/care/customer-care">
        <p className="flex  align-center justify-center text-blue-300">
          Help
        </p>
      </a>
    </div>
  );
};

export default ViewTicketHeader;
