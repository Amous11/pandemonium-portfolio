/* ASSET LINKS */
import mainVideo from "../assets/demoreelv1.mov";
import treatmentMP4 from "../assets/P1 ISC/3 Treatment.mp4";
import activePeelMP4 from "../assets/P1 ISC/Active Peel System blue.mp4";
import activeSerumMP4 from "../assets/P1 ISC/Shot_15_ActiveSerum_.mp4";
import proHealMP4 from "../assets/P1 ISC/Shot04_v9_pro_heal.mp4";
import sonyMP4 from "../assets/P2 Sony/sony_with_sound.mp4";
import kamaanaMP4 from "../assets/P3 Kamana/wearekamaana_full_AGX.mp4";
import smartWatchM4 from "../assets/P5 Watch/2k_smartwatch.mp4";
import aodhMP4 from "../assets/P6 Whieskey/New Final.mp4";
import vapeMP4 from "../assets/P7 Vape/vape_2k_1.mp4";
/* COMPONENTS */
import { TransparentNavbar } from "../components/TransparentNavbar.jsx";
import { Media } from "../components/Media.jsx";
import { MediaGrid } from "../components/MediaGrid.jsx";
import { MidSection } from "../components/MidSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { PageUp } from "../components/PageUp.jsx";

export default function HomePage() {
  return (
    <>
      <TransparentNavbar />
      <Media src={mainVideo} autoPlay />
      <MidSection />
      <MediaGrid
        vids={[
          { src: proHealMP4, ctg: "Colour Reel", path: "/project/ISC" },
          { src: activePeelMP4, ctg: "Beauty Reel", path: "/project/ISC" },
          { src: activeSerumMP4, ctg: "FX Reel", path: "/project/ISC" },
        ]}
      />
      <Media src={smartWatchM4} path="/project/Watch" overlay="Gaming Reel" />
      <MediaGrid
        vids={[
          { src: treatmentMP4, ctg: "Category", path: "/project/ISC" },
          { src: sonyMP4, ctg: "Category", path: "/project/Sony" },
          { src: kamaanaMP4, ctg: "Category", path: "/project/Kamaana" },
        ]}
        left
      />
      <MediaGrid
        vids={[
          { src: vapeMP4, ctg: "Category", path: "/project/Vape" },
          { src: aodhMP4, ctg: "Category", path: "/project/Whiskey" },
        ]}
      />

      <PageUp />
      <Footer />
    </>
  );
}
