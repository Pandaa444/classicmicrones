import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import IndustriesPage from "@/pages/IndustriesPage";
import WhyUsPage from "@/pages/WhyUsPage";
import ContactPage from "@/pages/ContactPage";
import CalciumCarbonateManufacturerPage from "@/pages/CalciumCarbonateManufacturerPage";
import GccSupplierPage from "@/pages/GccSupplierPage";
import MarblePowderPaintPage from "@/pages/MarblePowderPaintPage";
import CaCO3PaperPage from "@/pages/CaCO3PaperPage";
import PccVsGccPage from "@/pages/PccVsGccPage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/calcium-carbonate-manufacturer-india" element={<CalciumCarbonateManufacturerPage />} />
              <Route path="/gcc-supplier-india" element={<GccSupplierPage />} />
              <Route path="/marble-powder-for-paint-industry" element={<MarblePowderPaintPage />} />
              <Route path="/caco3-for-paper-industry" element={<CaCO3PaperPage />} />
              <Route path="/pcc-vs-gcc-difference" element={<PccVsGccPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
