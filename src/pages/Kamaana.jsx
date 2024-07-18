import video from "../assets/P3 Kamaana/wearekamaana_full_AGX.mp4";
import img1 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00000.jpg";
import img2 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00201.jpg";
import img3 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00414.jpg";
import img4 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00482.jpg";
import img5 from "../assets/P3 Kamaana/wearekamaana_full_AGX_00631.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Kamaana() {
  const project = projects.find((p) => p.name === "Kamaana");

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <MediaGrid vids={[{ src: img4 }, { src: img5 }]} />
      <br />
    </Inner>
  );
}
