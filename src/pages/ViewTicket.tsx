
import React from 'react';
import ViewTicketHeader from '../components/ViewTicketHeader';
import ViewTicketContent from '../components/ViewTicketContent';

const ViewTicket: React.FC = () => {
  return (
    <div className=" ">
      <ViewTicketHeader />
      <ViewTicketContent />
    </div>
  );
};

export default ViewTicket;
