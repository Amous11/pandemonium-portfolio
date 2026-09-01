import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence, LazyMotion, domAnimation } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransparentNavbar } from "./components/TransparentNavbar.jsx";
import { PageUp } from "./components/PageUp";
import { MediaCarousel } from "./components/MediaCarousel";
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
const Kamaana25 = lazy(() => import("./pages/Kamaana25.jsx"));
const Particles = lazy(() => import("./pages/Particles.jsx"));
const HardDrive = lazy(() => import("./pages/HardDrive.jsx"));
const IkkariSerum = lazy(() => import("./pages/IkkariSerum.jsx"));
const Team = lazy(() => import("./pages/Team.jsx"));

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
            <MediaCarousel>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/Isc" element={<ISC />} />
                <Route path="/project/Sony" element={<Sony />} />
                <Route path="/project/Kamaana" element={<Kamaana />} />
                <Route path="/project/Kamaana25" element={<Kamaana25 />} />
                <Route path="/project/Neura" element={<Neura />} />
                <Route path="/project/Whiskey" element={<Whiskey />} />
                <Route path="/project/Vape" element={<Vape />} />
                <Route path="/project/SpeedCar" element={<SpeedCar />} />
                <Route path="/project/MKBag" element={<MKBag />} />
                <Route path="/project/Keyboard" element={<Keyboard />} />
                <Route path="/project/Lotion" element={<Lotion />} />
                <Route path="/project/Particles" element={<Particles />} />
                <Route path="/project/HardDrive" element={<HardDrive />} />
                <Route path="/project/IkkariSerum" element={<IkkariSerum />} />
                <Route path="/team" element={<Team />} />
              </Routes>
            </MediaCarousel>
          </AnimatePresence>
        </LazyMotion>
      </Suspense>
      <PageUp />
    </>
  );
}

export default App;
