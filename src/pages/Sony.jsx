import video from "../assets/P2 Sony/sony_with_sound.mp4";
import img1 from "../assets/P2 Sony/1.jpg";
import img3 from "../assets/P2 Sony/3.jpg";
import img4 from "../assets/P2 Sony/4.jpg";
import img5 from "../assets/P2 Sony/5.jpg";
import img6 from "../assets/P2 Sony/6.jpg";
import img7 from "../assets/P2 Sony/7.jpg";
import img8 from "../assets/P2 Sony/Gif 1.mp4";
import img9 from "../assets/P2 Sony/Gif 2.mp4";
import img10 from "../assets/P2 Sony/Gif 3.mp4";
import img11 from "../assets/P2 Sony/Gif 4.mp4";
import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Media } from "../components/Media";
import { Inner } from "../components/animation/Inner";

export default function Sony() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum voluptas eveniet sequi veritatis possimus voluptate saepe, error totam recusandae. Labore ea ipsam saepe adipisci laboriosam id, voluptate repellendus dolorem consequuntur minima, voluptas modi quisquam maiores aperiam quidem illum nihil! Ipsam laboriosam labore, quasi expedita similique est. Sapiente, repellat quae!";
  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title="Sony" desc={description} />
      <MediaGrid vids={[{ src: img1 }, { src: img3 }]} left />
      <Media src={img4} />
      <MediaGrid vids={[{ src: img5 }, { src: img6 }, { src: img7 }]} />
      <Media src={img8} />
      <MediaGrid vids={[{ src: img9 }, { src: img10 }]} left />
      <Media src={img11} />

      <br />
    </Inner>
  );
}
