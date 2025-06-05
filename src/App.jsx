import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence, LazyMotion, domAnimation } from "motion/react";
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
const Keyboard = lazy(() => import("./pages/Keyboard.jsx"));
const Lotion = lazy(() => import("./pages/Lotion.jsx"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <TransparentNavbar />
      <Suspense>
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/Isc" element={<ISC />} />
              <Route path="/project/Sony" element={<Sony />} />
              <Route path="/project/Kamaana" element={<Kamaana />} />
              <Route path="/project/Neura" element={<Neura />} />
              <Route path="/project/Whiskey" element={<Whiskey />} />
              <Route path="/project/Vape" element={<Vape />} />
              <Route path="/project/SpeedCar" element={<SpeedCar />} />
              <Route path="/project/MKBag" element={<MKBag />} />
              <Route path="/project/Keyboard" element={<Keyboard />} />
              <Route path="/project/Lotion" element={<Lotion />} />
            </Routes>
          </AnimatePresence>
        </LazyMotion>
      </Suspense>
      <PageUp />
    </>
  );
}

export default App;
