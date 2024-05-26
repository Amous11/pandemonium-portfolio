import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ISC from "./pages/ISC.jsx";
import Sony from "./pages/Sony.jsx";
import Kamana from "./pages/Kamana.jsx";
import Neura from "./pages/Neura.jsx";
import Watch from "./pages/Watch.jsx";
import Whiskey from "./pages/Whiskey.jsx";
import Vape from "./pages/Vape.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/Isc" element={<ISC />} />
        <Route path="/project/Sony" element={<Sony />} />
        <Route path="/project/Kamana" element={<Kamana />} />
        <Route path="/project/Neura" element={<Neura />} />
        <Route path="/project/Watch" element={<Watch />} />
        <Route path="/project/Whiskey" element={<Whiskey />} />
        <Route path="/project/Vape" element={<Vape />} />
      </Routes>
    </>
  );
}

export default App;
