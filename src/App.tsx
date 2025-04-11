
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ViewTicket from "./pages/ViewTicket";
import NotFound from "./pages/NotFound";
import SelectDestination from "./pages/SelectDestination";
import { DestinationProvider } from "./context/DestinationContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DestinationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SelectDestination />} />
            <Route path="/ticket" element={<Index />} />
            <Route path="/view-ticket" element={<ViewTicket />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DestinationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
