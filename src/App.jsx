import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Vape from "./pages/Vape.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vape" element={<Vape />} />
      </Routes>
    </>
  );
}

export default App;
