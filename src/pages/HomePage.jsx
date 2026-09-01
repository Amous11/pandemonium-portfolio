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
    "https://res.cloudinary.com/amouscloud/video/upload/v1754405788/P12%20Kamaana%202025/Reveal_Final_u5kchw.mp4";
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
  const particlesMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1787841764/P13%20Particles%20product/video_Final_20k_bitrate_Website_yfvqi2.mp4";
  const hardDriveMP4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1787842953/P14%20hard%20disc/Hard_Drive_v21_srgnnz.mp4";

  /* THUMBNAILS */
  const sonyJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289354/P2%20Sony/7_iqpgak.jpg";
  const kamaanaJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282031/P3%20Kamaana/selfcare2_niuqye.webp";
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
  const kamaana25JPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1754405771/P12%20Kamaana%202025/Images/1__opgdl8.webp";
  const particlesJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787841755/P13%20Particles%20product/Sc05_v04_wqrgzj.jpg";
  const hardDriveJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787842952/P14%20hard%20disc/Hard_Drive_v19_wnmkba.jpg";
  const ikkariSerumJPG =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846628/P15/stills_jm9kim.jpg";
  const iscImages = [
    iscMP4,
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289427/P1%20ISC/1_Agx_rrxy5s.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289352/P1%20ISC/Shot_06_v4_03_Treatment_syulgw.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289429/P1%20ISC/Shot_02_hicr3h.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289434/P1%20ISC/Shot_13_v12_active_serum_s9d7ms.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289433/P1%20ISC/Shot14_v09_active_serum_vuydji.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289446/P1%20ISC/v1_active_serum_n7tjg6.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289352/P1%20ISC/v1_f5mjdt.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289455/P1%20ISC/v2_active_serum_cw9ubx.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289339/P1%20ISC/v5_myaykr.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289468/P1%20ISC/v21_active_serum_mpgp8w.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289460/P1%20ISC/v22_active_serum_n2ubwc.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289357/P1%20ISC/v25_active_serum_drp3ch.jpg",
  ];
  const ikkariSerumImages = [
    ikkariSerumJPG,
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846630/P15/stills9_ynwewd.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846629/P15/stills7_qtzunx.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846628/P15/stills2_wzx0nj.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846628/P15/stills4_zq9aks.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846627/P15/stills5_k8lhik.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846627/P15/stills8_i2chku.jpg",
  ];

  return (
    <Inner>
      <Media src={demoReel} autoPlay noMargin />
      <MidSection />
      <span id="gallery" />
      <MediaGrid
        vids={[
          {
            src: particlesMP4,
            path: "/project/Particles",
            thumbnail: particlesJPG,
          },
          
          {
            src: kamaana25MP4,
            path: "/project/Kamaana25",
            thumbnail: kamaana25JPG,
          },
          { src: lotionMP4, path: "/project/Lotion", thumbnail: lotionJPG }
        ]}
      />
      <MediaGrid
        vids={[
          {
            src: hardDriveMP4,
            path: "/project/HardDrive",
            thumbnail: hardDriveJPG,
          },
          {
            src: ikkariSerumJPG,
            path: "/project/IkkariSerum",
            images: ikkariSerumImages,
          },
          {
            src: keyboardMP4,
            path: "/project/Keyboard",
            thumbnail: keyboardJPG,
          },
        ]}
        left
      />
      <Media src={carMP4} path="/project/SpeedCar" thumbnail={carJPG} />
      <MediaGrid
        vids={[
          { src: bagMP4, path: "/project/MKBag", thumbnail: bagJPG },
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
            images: iscImages,
          },
        ]}
      />
    </Inner>
  );
}
