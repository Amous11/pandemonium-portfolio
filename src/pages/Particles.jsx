import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Particles() {
  const project = projects.find((item) => item.name === "Particles");
  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1787841764/P13%20Particles%20product/video_Final_20k_bitrate_Website_yfvqi2.mp4";
  const verticalVideo =
    "https://res.cloudinary.com/amouscloud/video/upload/v1787841763/P13%20Particles%20product/video_Final_20k_bitrate_Vertical__kq6gaq.mp4";
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
          { src: verticalVideo, autoPlay: true },
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
