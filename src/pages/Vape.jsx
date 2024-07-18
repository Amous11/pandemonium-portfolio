import video from "../assets/P7 Vape/vape_2k_1.mp4";
import img1 from "../assets/P7 Vape/vape_2k_00000.jpg";
import img2 from "../assets/P7 Vape/vape_2k_00031.jpg";
import img3 from "../assets/P7 Vape/vape_2k_00118.jpg";
import img4 from "../assets/P7 Vape/vape_2k_00151.jpg";
import img5 from "../assets/P7 Vape/vape_2k_00283.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Vape() {
  const project = projects.find((p) => p.name === "Vape");

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
