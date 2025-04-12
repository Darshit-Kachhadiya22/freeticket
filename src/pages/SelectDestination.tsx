
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDestination } from '../context/DestinationContext';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const destinationOptions = [
  "Kapodra",
   "Utran R.O.B...",
  "Maangadh",
 
];

const destinationOptions2 = [
  "Utran R.O.B...",
  "Maangadh",
  "Kapodra",
   
];

const SelectDestination: React.FC = () => {
  const { setFromDestination, setToDestination } = useDestination();
  const [selectedFrom, setSelectedFrom] = useState<string>("");
  const [selectedTo, setSelectedTo] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFrom && selectedTo) {
      setFromDestination(selectedFrom);
      setToDestination(selectedTo);
      navigate('/ticket');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8">
      <div className="bg-[#e1f5fa] rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Select Your Journey</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="from" className="block text-sm font-medium">From</label>
            <Select onValueChange={setSelectedFrom} required>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select starting point" />
              </SelectTrigger>
              <SelectContent>
                {destinationOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="to" className="block text-sm font-medium">To</label>
            <Select onValueChange={setSelectedTo} required>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                {destinationOptions2.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md"
            disabled={!selectedFrom || !selectedTo}
          >
            Proceed to Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SelectDestination;
