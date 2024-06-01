import video from "../assets/P5 Watch/2k_smartwatch.mp4";
import img1 from "../assets/P5 Watch/2k_smartwatch_00010.jpg";
import img2 from "../assets/P5 Watch/2k_smartwatch_00096.jpg";
import img3 from "../assets/P5 Watch/2k_smartwatch_00171.jpg";
import img4 from "../assets/P5 Watch/2k_smartwatch_00244.jpg";
import img5 from "../assets/P5 Watch/2k_smartwatch_00373.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { TransparentNavbar } from "../components/TransparentNavbar";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { PageUp } from "../components/PageUp";
import { Footer } from "../components/Footer";

export default function Watch() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum voluptas eveniet sequi veritatis possimus voluptate saepe, error totam recusandae. Labore ea ipsam saepe adipisci laboriosam id, voluptate repellendus dolorem consequuntur minima, voluptas modi quisquam maiores aperiam quidem illum nihil! Ipsam laboriosam labore, quasi expedita similique est. Sapiente, repellat quae!";
  return (
    <>
      <TransparentNavbar />
      <ProductHeader video={video} />
      <ProjectDescription title="Watch" desc={description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <MediaGrid vids={[{ src: img4 }, { src: img5 }]} />
      <br />
      <Footer />
      <PageUp />
    </>
  );
}
