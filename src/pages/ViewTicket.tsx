
import React from 'react';
import ViewTicketHeader from '../components/ViewTicketHeader';
import ViewTicketContent from '../components/ViewTicketContent';

const ViewTicket: React.FC = () => {
  return (
    <div className="pb-8 w-full max-w-2xl mx-auto px-4 sm:px-6">
      <ViewTicketHeader />
      <ViewTicketContent />
    </div>
  );
};

export default ViewTicket;
