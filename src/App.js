import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
//lmao
import ServicesPage from "./pages/servicesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default App;
