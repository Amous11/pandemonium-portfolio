import video from "../assets/P1 ISC/3 Treatment.mp4";
import img1 from "../assets/P1 ISC/1 Agx.jpg";
import img2 from "../assets/P1 ISC/7.jpg";
import img3 from "../assets/P1 ISC/Active Peel System blue.mp4";
import img4 from "../assets/P1 ISC/Shot 06_v4_03 Treatment.jpg";
import img5 from "../assets/P1 ISC/Shot_02.jpg";
import img6 from "../assets/P1 ISC/Shot_13_v12_active serum.jpg";
import img7 from "../assets/P1 ISC/Shot_15_ActiveSerum_.mp4";
import img8 from "../assets/P1 ISC/Shot04_v9_pro_heal.mp4";
import img9 from "../assets/P1 ISC/Shot14_v09_active serum.jpg";
import img10 from "../assets/P1 ISC/v1_active serum.jpg";
import img11 from "../assets/P1 ISC/v1.jpg";
import img12 from "../assets/P1 ISC/v2_active serum.jpg";
import img13 from "../assets/P1 ISC/v5.jpg";
import img14 from "../assets/P1 ISC/v21_active serum.jpg";
import img15 from "../assets/P1 ISC/v22_active serum.jpg";
import img16 from "../assets/P1 ISC/v25_active serum.jpg";
import { TransparentNavbar } from "../components/TransparentNavbar";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { MidSection } from "../components/MidSection";
import { PageUp } from "../components/PageUp";
import { Footer } from "../components/Footer";
import { Media } from "../components/Media";

export default function ISC() {
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
        <Media src={img8} />
        <MediaGrid
          vids={[{ src: img9 }, { src: img10 }, { src: img11 }]}
          left
        />
        <Media src={img12} />
        <MediaGrid vids={[{ src: img13 }, { src: img14 }, { src: img15 }]} />
        <Media src={img16} />
        <br />
        <Footer />
        <PageUp />
      </div>
    </>
  );
}
