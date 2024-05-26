/* ASSET LINKS */
import mainVideo from "../assets/P4 Neura/iBotONE_teaser_008_final.mp4";
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
          { src: proHealMP4, ctg: "Colour Reel" },
          { src: activePeelMP4, ctg: "Beauty Reel" },
          { src: activeSerumMP4, ctg: "FX Reel" },
        ]}
      />
      <Media src={smartWatchM4} overlay="Gaming Reel" />
      <MediaGrid
        vids={[
          { src: treatmentMP4, ctg: "Category" },
          { src: sonyMP4, ctg: "Category" },
          { src: kamaanaMP4, ctg: "Category" },
        ]}
        left
      />
      <MediaGrid
        vids={[
          { src: aodhMP4, ctg: "Category" },
          { src: vapeMP4, ctg: "Category" },
        ]}
      />

      <PageUp />
      <Footer />
    </>
  );
}
