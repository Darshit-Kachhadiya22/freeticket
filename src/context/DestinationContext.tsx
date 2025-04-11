
import React, { createContext, useState, useContext, ReactNode } from 'react';

type DestinationContextType = {
  fromDestination: string;
  toDestination: string;
  setFromDestination: (destination: string) => void;
  setToDestination: (destination: string) => void;
};

const defaultContext: DestinationContextType = {
  fromDestination: "Utran R.O.B...",
  toDestination: "Maangadh",
  setFromDestination: () => {},
  setToDestination: () => {},
};

const DestinationContext = createContext<DestinationContextType>(defaultContext);

export const useDestination = () => useContext(DestinationContext);

export const DestinationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fromDestination, setFromDestination] = useState<string>(defaultContext.fromDestination);
  const [toDestination, setToDestination] = useState<string>(defaultContext.toDestination);

  return (
    <DestinationContext.Provider value={{ 
      fromDestination, 
      toDestination, 
      setFromDestination, 
      setToDestination 
    }}>
      {children}
    </DestinationContext.Provider>
  );
};
