import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Training from "./pages/Training/Training";
import PricingSection from "./pages/Pricing/PricingSection";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Training />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default App;
