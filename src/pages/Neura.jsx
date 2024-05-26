import video from "../assets/P4 Neura/iBotONE_teaser_008_final.mp4";
import img1 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h04m28s553.png";
import img2 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h04m46s208.png";
import img3 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h04m57s085.png";
import img4 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m10s885.png";
import img5 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m19s426.png";
import img6 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m30s910.png";
import img7 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h06m38s101.png";
import { TransparentNavbar } from "../components/TransparentNavbar";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { MidSection } from "../components/MidSection";
import { PageUp } from "../components/PageUp";
import { Footer } from "../components/Footer";
import { Media } from "../components/Media";

export default function Neura() {
  return (
    <>
      <TransparentNavbar />
      <ProductHeader video={video} />
      <div className="m-0 p-0" style={{ backgroundColor: "black" }}>
        <br />
        <MidSection />
        <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
        <Media src={img4} />
        <MediaGrid vids={[{ src: img5 }, { src: img6 }, { src: img7 }]} />
        <br />
        <Footer />
        <PageUp />
      </div>
    </>
  );
}
