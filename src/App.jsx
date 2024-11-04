import { Suspense, lazy } from "react";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransparentNavbar } from "./components/TransparentNavbar.jsx";
import { PageUp } from "./components/PageUp";
import MKBag from "./pages/MKBag.jsx";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ISC = lazy(() => import("./pages/ISC.jsx"));
const Sony = lazy(() => import("./pages/Sony.jsx"));
const Kamaana = lazy(() => import("./pages/Kamaana.jsx"));
const Neura = lazy(() => import("./pages/Neura.jsx"));
const Whiskey = lazy(() => import("./pages/Whiskey.jsx"));
const Vape = lazy(() => import("./pages/Vape.jsx"));
const SpeedCar = lazy(() => import("./pages/SpeedCar.jsx"));

function App() {
  const location = useLocation();
  return (
    <>
      <TransparentNavbar />
      <Suspense>
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/Isc" element={<ISC />} />
              <Route path="/project/Sony" element={<Sony />} />
              <Route path="/project/Kamaana" element={<Kamaana />} />
              <Route path="/project/Neura" element={<Neura />} />
              <Route path="/project/Whiskey" element={<Whiskey />} />
              <Route path="/project/Vape" element={<Vape />} />
              <Route path="/project/SpeedCar" element={<SpeedCar />} />
              <Route path="/project/mkbag" element={<MKBag />} />
            </Routes>
          </AnimatePresence>
        </LazyMotion>
      </Suspense>
      <PageUp />
    </>
  );
}

export default App;
