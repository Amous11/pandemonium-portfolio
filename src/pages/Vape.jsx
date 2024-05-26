import video from "../assets/P7 Vape/vape_2k_1.mp4";
import img1 from "../assets/P7 Vape/vape_2k_00000.jpg";
import img2 from "../assets/P7 Vape/vape_2k_00031.jpg";
import img3 from "../assets/P7 Vape/vape_2k_00118.jpg";
import img4 from "../assets/P7 Vape/vape_2k_00151.jpg";
import img5 from "../assets/P7 Vape/vape_2k_00283.jpg";
import { TransparentNavbar } from "../components/TransparentNavbar";
import { MediaGrid } from "../components/MediaGrid";
import { MidSection } from "../components/MidSection";
import { Footer } from "../components/Footer";

export default function Vape() {
  return (
    <>
      <TransparentNavbar />
      <div style={{ height: "100vh", width: "100%" }}></div>
      <div className="fixed-video">
        <video
          style={{
            width: "100%",
            height: "100%",
          }}
          src={video}
          controls
          autoPlay
          className="video-player"
        ></video>
      </div>
      <div className=" m-0 p-0" style={{ backgroundColor: "black" }}>
        <br />
        <MidSection />
        <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
        <MediaGrid vids={[{ src: img4 }, { src: img5 }]} />
        <br />
        <Footer />
      </div>
    </>
  );
}
