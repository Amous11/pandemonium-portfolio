import video from "../assets/P3 Kamaana/wearekamaana_full_AGX.mp4";
import img1 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00000.jpg";
import img2 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00201.jpg";
import img3 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00414.jpg";
import img4 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00482.jpg";
import img5 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00631.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../animation/Inner";

export default function Kamaana() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum voluptas eveniet sequi veritatis possimus voluptate saepe, error totam recusandae. Labore ea ipsam saepe adipisci laboriosam id, voluptate repellendus dolorem consequuntur minima, voluptas modi quisquam maiores aperiam quidem illum nihil! Ipsam laboriosam labore, quasi expedita similique est. Sapiente, repellat quae!";

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title="Kamaana" desc={description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <MediaGrid vids={[{ src: img4 }, { src: img5 }]} />
      <br />
    </Inner>
  );
}
