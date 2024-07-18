import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Vape() {
  const project = projects.find((p) => p.name === "Vape");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289521/P7%20Vape/vape_2k_1_vegmez.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289384/P7%20Vape/vape_2k_00000_p0zkbl.jpg";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289382/P7%20Vape/vape_2k_00283_uxor6x.jpg";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289378/P7%20Vape/vape_2k_00118_fgl7o0.jpg";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289377/P7%20Vape/vape_2k_00151_bpqs3p.jpg";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289377/P7%20Vape/vape_2k_00151_bpqs3p.jpg";

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
