import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ISC = lazy(() => import("./pages/ISC.jsx"));
const Sony = lazy(() => import("./pages/Sony.jsx"));
const Kamaana = lazy(() => import("./pages/Kamaana.jsx"));
const Neura = lazy(() => import("./pages/Neura.jsx"));
const Whiskey = lazy(() => import("./pages/Whiskey.jsx"));
const Vape = lazy(() => import("./pages/Vape.jsx"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/Isc" element={<ISC />} />
          <Route path="/project/Sony" element={<Sony />} />
          <Route path="/project/Kamaana" element={<Kamaana />} />
          <Route path="/project/Neura" element={<Neura />} />
          <Route path="/project/Whiskey" element={<Whiskey />} />
          <Route path="/project/Vape" element={<Vape />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
