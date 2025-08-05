import { Inner } from "../components/animation/Inner";
import { Media } from "../components/Media";
import { MediaGrid } from "../components/MediaGrid";
import { MidSection } from "../components/MidSection.jsx";

export default function HomePage() {
  /* VIDEOS */
  const demoReel =
    "https://res.cloudinary.com/amouscloud/video/upload/v1722279081/demoreel_gylwgd.mp4";
  const iscMP4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289403/P1%20ISC/7_kmihmy.jpg";
  const sonyMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289635/P2%20Sony/sony_with_sound_xmc9fi.mp4";
  const kamaanaMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289708/P3%20Kamaana/wearekamaana_full_AGX_jked0p.mp4";
  const kamaana25MP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1754406895/P12%20Kamaana%202025/teaser_snopg9.mp4";
  const neuraMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289745/P4%20Neura/iBotONE_teaser_008_final_tihft8.mp4";
  const carMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1720043790/P5%20Speed%20Car/Speed_Car_sd4dnm.mp4";
  const whiskeyMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289695/P6%20Whiskey/New_Final_h6l1x0.mp4";
  const vapeMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289521/P7%20Vape/vape_2k_1_vegmez.mp4";
  const bagMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1722264466/P8%20MK_Bag/Video_Render_atfrrw.mp4";
  const keyboardMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1732281947/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/0001-0120_tc6rlv.mp4";
  const lotionMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1732282025/P10%20Body%20Lotion/Body_lotion_FInal_for_upload_iqepsj.mp4";

  /* THUMBNAILS */
  const sonyJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289354/P2%20Sony/7_iqpgak.jpg";
  const kamaanaJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282031/P3%20Kamaana/selfcare2_niuqye.webp";
  // const kamaana25JPG =
  //   "https://res.cloudinary.com/amouscloud/image/upload/v1732282031/P3%20Kamaana/selfcare2_niuqye.webp";
  const neuraJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289403/P4%20Neura/vlcsnap-2023-02-21-19h05m30s910_yzqshf.png";
  const carJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1720043675/P5%20Speed%20Car/Speed_Car_Sh08_V03_dxkrro.jpg";
  const whiskeyJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289368/P6%20Whiskey/0469_ndm5xu.jpg";
  const vapeJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289378/P7%20Vape/vape_2k_00118_fgl7o0.jpg";
  const bagJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264200/P8%20MK_Bag/1326_ytspgl.jpg";
  const keyboardJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281916/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/still4_h5ylgw.webp";
  const lotionJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281916/P10%20Body%20Lotion/body_lotion_final_montage_0171_xhgopo.webp";

  return (
    <Inner>
      <Media src={demoReel} autoPlay noMargin />
      <MidSection />
      <span id="gallery" />
      <MediaGrid
        vids={[
          { src: lotionMP4, path: "/project/Lotion", thumbnail: lotionJPG },
          {
            src: keyboardMP4,
            path: "/project/Keyboard",
            thumbnail: keyboardJPG,
          },
          { src: bagMP4, path: "/project/MKBag", thumbnail: bagJPG },
        ]}
      />
      <Media src={carMP4} path="/project/SpeedCar" thumbnail={carJPG} />
      <MediaGrid
        vids={[
          { src: vapeMP4, path: "/project/Vape", thumbnail: vapeJPG },
          { src: whiskeyMP4, path: "/project/Whiskey", thumbnail: whiskeyJPG },
        ]}
        left
      />
      <Media src={sonyMP4} path="/project/Sony" thumbnail={sonyJPG} />
      <MediaGrid
        vids={[
          { src: neuraMP4, path: "/project/Neura", thumbnail: neuraJPG },
          { src: kamaanaMP4, path: "/project/Kamaana", thumbnail: kamaanaJPG },
          {
            src: iscMP4,
            path: "/project/ISC",
          },
        ]}
      />
      <Media src={kamaana25MP4} path="/project/Kamaana25" />
    </Inner>
  );
}
