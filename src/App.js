import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Sidebar } from "./components";
import { About, Application, Dashboard, PriceList } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/application" element={<Application />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
