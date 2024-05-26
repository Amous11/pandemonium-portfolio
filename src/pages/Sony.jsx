import video from "../assets/P2 Sony/sony_with_sound.mp4";
import img1 from "../assets/P2 Sony/1.jpg";
import img3 from "../assets/P2 Sony/3.jpg";
import img4 from "../assets/P2 Sony/4.jpg";
import img5 from "../assets/P2 Sony/5.jpg";
import img6 from "../assets/P2 Sony/6.jpg";
import img7 from "../assets/P2 Sony/7.jpg";
import img8 from "../assets/P2 Sony/gif 1.gif";
import img9 from "../assets/P2 Sony/gif 2.gif";
import img10 from "../assets/P2 Sony/gif 3.gif";
import img11 from "../assets/P2 Sony/gif 4.gif";
import { TransparentNavbar } from "../components/TransparentNavbar";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { MidSection } from "../components/MidSection";
import { PageUp } from "../components/PageUp";
import { Footer } from "../components/Footer";
import { Media } from "../components/Media";

export default function Sony() {
  return (
    <>
      <TransparentNavbar />
      <ProductHeader video={video} />
      <div className="m-0 p-0" style={{ backgroundColor: "black" }}>
        <br />
        <MidSection />
        <MediaGrid vids={[{ src: img1 }, { src: img3 }]} left />
        <Media src={img4} />
        <MediaGrid vids={[{ src: img5 }, { src: img6 }, { src: img7 }]} />
        <Media src={img8} />
        <MediaGrid vids={[{ src: img9 }, { src: img10 }]} left />
        <Media src={img11} />

        <br />
        <Footer />
        <PageUp />
      </div>
    </>
  );
}
