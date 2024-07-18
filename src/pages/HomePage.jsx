import { Inner } from "../components/animation/Inner";
import { Media } from "../components/Media";
import { MediaGrid } from "../components/MediaGrid";
import { MidSection } from "../components/MidSection.jsx";

export default function HomePage() {
  /* VIDEOS */
  const demoReel =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289882/demoreel_yldl1t.mp4";
  const proHealMP4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289403/P1%20ISC/7_kmihmy.jpg";
  const sonyMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289635/P2%20Sony/sony_with_sound_xmc9fi.mp4";
  const kamaanaMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289708/P3%20Kamaana/wearekamaana_full_AGX_jked0p.mp4";
  const neuraMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289745/P4%20Neura/iBotONE_teaser_008_final_tihft8.mp4";
  const carMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1720043790/P5%20Speed%20Car/Speed_Car_sd4dnm.mp4";
  const aodhMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289695/P6%20Whiskey/New_Final_h6l1x0.mp4";
  const vapeMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289521/P7%20Vape/vape_2k_1_vegmez.mp4";
  // import bagMP4 from "../assets/P8 MK_Bag/Video Render.mp4";

  /* THUMBNAILS */
  const sonyJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289354/P2%20Sony/7_iqpgak.jpg";
  const kamaanaJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289361/P3%20Kamaana/wearekamaana_full_AGX_00414_jmblpp.jpg";
  const neuraJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289403/P4%20Neura/vlcsnap-2023-02-21-19h05m30s910_yzqshf.png";
  const carJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1720043675/P5%20Speed%20Car/Speed_Car_Sh08_V03_dxkrro.jpg";
  const whiskeyJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289368/P6%20Whiskey/0469_ndm5xu.jpg";
  const vapeJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289378/P7%20Vape/vape_2k_00118_fgl7o0.jpg";
  // import bagJPG from "../assets/P8 MK_Bag/1326.tif";

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
      <Media src={carMP4} path="/project/SpeedCar" thumbnail={carJPG} />
      <MediaGrid
        vids={[
          { src: aodhMP4, path: "/project/Whiskey", thumbnail: whiskeyJPG },
          { src: sonyMP4, path: "/project/Sony", thumbnail: sonyJPG },
          { src: kamaanaMP4, path: "/project/Kamaana", thumbnail: kamaanaJPG },
        ]}
        left
      />
      {/* <MediaGrid
          vids={[
            { src: carMP4, path: "/project/SpeedCar", thumbnail: carJPG },
            // { src: bagMP4, path: "/project/MKBag", thumbnail: bagJPG },
          ]}
        /> */}
    </Inner>
  );
}
