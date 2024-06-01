import img1 from "../assets/P1 ISC/1 Agx.jpg";
import img2 from "../assets/P1 ISC/7.jpg";
import img3 from "../assets/P1 ISC/Shot 06_v4_03 Treatment.jpg";
import img4 from "../assets/P1 ISC/Shot_02.jpg";
import img5 from "../assets/P1 ISC/Shot_13_v12_active serum.jpg";
import img6 from "../assets/P1 ISC/Shot14_v09_active serum.jpg";
import img7 from "../assets/P1 ISC/v1_active serum.jpg";
import img8 from "../assets/P1 ISC/v1.jpg";
import img9 from "../assets/P1 ISC/v2_active serum.jpg";
import img10 from "../assets/P1 ISC/v5.jpg";
import img11 from "../assets/P1 ISC/v21_active serum.jpg";
import img12 from "../assets/P1 ISC/v22_active serum.jpg";
import img13 from "../assets/P1 ISC/v25_active serum.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { TransparentNavbar } from "../components/TransparentNavbar";
import { MediaGrid } from "../components/MediaGrid";
import { PageUp } from "../components/PageUp";
import { Footer } from "../components/Footer";
import { Media } from "../components/Media";

export default function ISC() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum voluptas eveniet sequi veritatis possimus voluptate saepe, error totam recusandae. Labore ea ipsam saepe adipisci laboriosam id, voluptate repellendus dolorem consequuntur minima, voluptas modi quisquam maiores aperiam quidem illum nihil! Ipsam laboriosam labore, quasi expedita similique est. Sapiente, repellat quae!";
  return (
    <>
      <TransparentNavbar />
      <ProjectDescription title="ISC" desc={description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <Media src={img4} />
      <MediaGrid vids={[{ src: img5 }, { src: img6 }, { src: img7 }]} />
      <MediaGrid vids={[{ src: img8 }, { src: img9 }]} />
      <MediaGrid vids={[{ src: img10 }, { src: img11 }, { src: img12 }]} />
      <Media src={img13} />
      <br />
      <Footer />
      <PageUp />
    </>
  );
}
