
import React from 'react';
import Header from '../components/Header';
import TicketInfo from '../components/TicketInfo';
import TripDetails from '../components/TripDetails';
import PaymentDetails from '../components/PaymentDetails';
import FooterMenu from '../components/FooterMenu';

const Index: React.FC = () => {
  return (
    <div className="pb-19">
      <Header />
      <TicketInfo />
      <TripDetails />
      <PaymentDetails />
      <FooterMenu />
    </div>
  );
};

export default Index;
