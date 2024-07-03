import video from "../assets/P6 Whiskey/New Final.mp4";
import img1 from "../assets/P6 Whiskey/0094.jpg";
import img2 from "../assets/P6 Whiskey/0329.jpg";
import img3 from "../assets/P6 Whiskey/0417.jpg";
import img4 from "../assets/P6 Whiskey/0469.jpg";
import img5 from "../assets/P6 Whiskey/test.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";

export default function Whiskey() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum voluptas eveniet sequi veritatis possimus voluptate saepe, error totam recusandae. Labore ea ipsam saepe adipisci laboriosam id, voluptate repellendus dolorem consequuntur minima, voluptas modi quisquam maiores aperiam quidem illum nihil! Ipsam laboriosam labore, quasi expedita similique est. Sapiente, repellat quae!";
  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title="Whiskey" desc={description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <MediaGrid vids={[{ src: img4 }, { src: img5 }]} />
      <br />
    </Inner>
  );
}
