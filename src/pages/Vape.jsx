import video from "../assets/P7 Vape/vape_2k_1.mp4";
import img1 from "../assets/P7 Vape/vape_2k_00000.jpg";
import img2 from "../assets/P7 Vape/vape_2k_00031.jpg";
import img3 from "../assets/P7 Vape/vape_2k_00118.jpg";
import img4 from "../assets/P7 Vape/vape_2k_00151.jpg";
import img5 from "../assets/P7 Vape/vape_2k_00283.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { TransparentNavbar } from "../components/TransparentNavbar";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { PageUp } from "../components/PageUp";
import { Footer } from "../components/Footer";
import { Inner } from "../animation/Inner";

export default function Vape() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum voluptas eveniet sequi veritatis possimus voluptate saepe, error totam recusandae. Labore ea ipsam saepe adipisci laboriosam id, voluptate repellendus dolorem consequuntur minima, voluptas modi quisquam maiores aperiam quidem illum nihil! Ipsam laboriosam labore, quasi expedita similique est. Sapiente, repellat quae!";
  return (
    <Inner>
      <TransparentNavbar />
      <ProductHeader video={video} />
      <ProjectDescription title="Vape" desc={description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <MediaGrid vids={[{ src: img4 }, { src: img5 }]} />
      <br />
      <Footer />
      <PageUp />
    </Inner>
  );
}
