import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout/Layout";
import ComingSoon from "@/pages/ComingSoon";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/features" element={<ComingSoon />} />
            <Route path="/pricing" element={<ComingSoon />} />
            <Route path="/contact" element={<ComingSoon />} />
            <Route path="/about" element={<ComingSoon />} />
            <Route path="/careers" element={<ComingSoon />} />
            <Route path="/blog" element={<ComingSoon />} />
            <Route path="/terms" element={<ComingSoon />} />
            <Route path="/privacy" element={<ComingSoon />} />
            {/* CATCH-ALL */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
