import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function PerfumeReveal() {
  const project = projects.find((item) => item.name === "Perfume Reveal");
  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1787841764/P13%20Particles%20product/video_Final_20k_bitrate_Website_yfvqi2.mp4";
  const img0 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1788289233/P13%20Particles%20product/Sc05_v05_tn20o1.jpg";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787841755/P13%20Particles%20product/Sc05_v02_cvnfkh.jpg";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787841753/P13%20Particles%20product/Sc05_v01_uefzed.jpg";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787841753/P13%20Particles%20product/Sc05_v03_tjkkir.jpg";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787841755/P13%20Particles%20product/Sc05_v04_wqrgzj.jpg";

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid
        vids={[
          { src: img0 },
          { src: img1 },
          { src: img2 },
          { src: img3 },
          { src: img4 },
        ]}
        columns={3}
        aspectRatio="9 / 16"
      />
      <br />
    </Inner>
  );
}
