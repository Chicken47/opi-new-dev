import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ServicesPage from "./pages/servicesPage";
import InsightsPage from "./pages/insightsPage";
import ContactPage from "./pages/contactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
