/* VIDEOS */
import demoReel from "../assets/demoreel.mp4";
import proHealMP4 from "../assets/P1 ISC/7.jpg";
import sonyMP4 from "../assets/P2 Sony/sony_with_sound.mp4";
import kamaanaMP4 from "../assets/P3 Kamaana/wearekamaana_full_AGX.mp4";
import neuraMP4 from "../assets/P4 Neura/iBotONE_teaser_008_final.mp4";
import aodhMP4 from "../assets/P6 Whiskey/New Final.mp4";
import vapeMP4 from "../assets/P7 Vape/vape_2k_1.mp4";
/* THUMBNAILS */
import sonyJPG from "../assets/P2 Sony/7.jpg";
import kamaanaJPG from "../assets/P3 Kamaana/wearekamaana_full_AGX_00414.jpg";
import neuraJPG from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m19s426.png";
import whiskeyJPG from "../assets/P6 Whiskey/0469.jpg";
import vapeJPG from "../assets/P7 Vape/vape_2k_00118.jpg";
/* COMPONENTS */
import { Media } from "../components/Media.jsx";
import { MediaGrid } from "../components/MediaGrid.jsx";
import { MidSection } from "../components/MidSection.jsx";
import { Inner } from "../components/animation/Inner.jsx";

export default function HomePage() {
  return (
    <Inner>
      <Media src={demoReel} autoPlay noMargin />
      <MidSection />
      <span id="gallery" />
      <MediaGrid
        vids={[
          {
            src: proHealMP4,
            path: "/project/ISC",
          },
          { src: neuraMP4, path: "/project/Neura", thumbnail: neuraJPG },
          { src: vapeMP4, path: "/project/Vape", thumbnail: vapeJPG },
        ]}
      />
      <MediaGrid
        vids={[
          { src: aodhMP4, path: "/project/Whiskey", thumbnail: whiskeyJPG },
          { src: sonyMP4, path: "/project/Sony", thumbnail: sonyJPG },
          { src: kamaanaMP4, path: "/project/Kamaana", thumbnail: kamaanaJPG },
        ]}
        left
      />
    </Inner>
  );
}
