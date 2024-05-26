/* VIDEOS */
import demoReel from "../assets/demoreelv1.mov";
import proHealMP4 from "../assets/P1 ISC/Shot04_v9_pro_heal.mp4";
import sonyMP4 from "../assets/P2 Sony/sony_with_sound.mp4";
import kamaanaMP4 from "../assets/P3 Kamana/wearekamaana_full_AGX.mp4";
import neuraMP4 from "../assets/P4 Neura/iBotONE_teaser_008_final.mp4";
import smartWatchM4 from "../assets/P5 Watch/2k_smartwatch.mp4";
import aodhMP4 from "../assets/P6 Whieskey/New Final.mp4";
import vapeMP4 from "../assets/P7 Vape/vape_2k_1.mp4";
/* THUMBNAILS */
import isc1JPG from "../assets/P1 ISC/v1.jpg";
import sonyJPG from "../assets/P2 Sony/7.jpg";
import kamaanaJPG from "../assets/P3 Kamana/wearekamaana_full_AGX_00414.jpg";
import neuraJPG from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m19s426.png";
import watchJPG from "../assets/P5 Watch/2k_smartwatch_00373.jpg";
import whiskeyJPG from "../assets/P6 Whieskey/0469.jpg";
import vapeJPG from "../assets/P7 Vape/vape_2k_00118.jpg";
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
      <Media src={demoReel} autoPlay />
      <MidSection />
      <MediaGrid
        vids={[
          {
            src: proHealMP4,
            path: "/project/ISC",
            thumbnail: isc1JPG,
          },
          { src: neuraMP4, path: "/project/ISC", thumbnail: neuraJPG },
          { src: vapeMP4, path: "/project/Vape", thumbnail: vapeJPG },
        ]}
      />
      <Media src={smartWatchM4} path="/project/Watch" thumbnail={watchJPG} />
      <MediaGrid
        vids={[
          { src: aodhMP4, path: "/project/Whiskey", thumbnail: whiskeyJPG },
          { src: sonyMP4, path: "/project/Sony", thumbnail: sonyJPG },
          { src: kamaanaMP4, path: "/project/Kamaana", thumbnail: kamaanaJPG },
        ]}
        left
      />
      <PageUp />
      <Footer />
    </>
  );
}
