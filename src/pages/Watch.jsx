import video from "../assets/P5 Watch/2k_smartwatch.mp4";
import img1 from "../assets/P5 Watch/2k_smartwatch_00010.jpg";
import img2 from "../assets/P5 Watch/2k_smartwatch_00096.jpg";
import img3 from "../assets/P5 Watch/2k_smartwatch_00171.jpg";
import img4 from "../assets/P5 Watch/2k_smartwatch_00244.jpg";
import img5 from "../assets/P5 Watch/2k_smartwatch_00373.jpg";
import { TransparentNavbar } from "../components/TransparentNavbar";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { MidSection } from "../components/MidSection";
import { PageUp } from "../components/PageUp";
import { Footer } from "../components/Footer";

export default function Watch() {
  return (
    <>
      <TransparentNavbar />
      <ProductHeader video={video} />
      <div className="m-0 p-0" style={{ backgroundColor: "black" }}>
        <br />
        <MidSection />
        <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
        <MediaGrid vids={[{ src: img4 }, { src: img5 }]} />
        <br />
        <Footer />
        <PageUp />
      </div>
    </>
  );
}
