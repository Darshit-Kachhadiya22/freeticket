
import React from 'react';
import { Link } from 'react-router-dom';
import  paytm8487 from '../../public/images/paytm8487.png';


const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
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

      <img src={paytm8487} alt="Paytm Logo" className="logo" />
      <a href="https://paytm.com/care/customer-care">
        <p className="text-blue-300">Help</p>
      </a>
    </div>
  );
};

export default Header;
