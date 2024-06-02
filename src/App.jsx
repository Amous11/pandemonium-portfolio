import { Suspense, lazy } from "react";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransparentNavbar } from "./components/TransparentNavbar.jsx";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ISC = lazy(() => import("./pages/ISC.jsx"));
const Sony = lazy(() => import("./pages/Sony.jsx"));
const Kamaana = lazy(() => import("./pages/Kamaana.jsx"));
const Neura = lazy(() => import("./pages/Neura.jsx"));
const Watch = lazy(() => import("./pages/Watch.jsx"));
const Whiskey = lazy(() => import("./pages/Whiskey.jsx"));
const Vape = lazy(() => import("./pages/Vape.jsx"));

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
              <Route path="/project/Watch" element={<Watch />} />
              <Route path="/project/Whiskey" element={<Whiskey />} />
              <Route path="/project/Vape" element={<Vape />} />
            </Routes>
          </AnimatePresence>
        </LazyMotion>
      </Suspense>
    </>
  );
}

export default App;
