import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function SpeedCar() {
  const project = projects.find((p) => p.name === "Speed Car");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1720043790/P5%20Speed%20Car/Speed_Car_sd4dnm.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1720043675/P5%20Speed%20Car/Speed_Car_Sh08_V03_dxkrro.jpg";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1720043675/P5%20Speed%20Car/Speed_Car_Sh05_V02__ecw17f.jpg";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1720043674/P5%20Speed%20Car/Speed_Car_Sh07_V04__gn9d6y.jpg";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1720043674/P5%20Speed%20Car/Speed_Car_Sh03_V03_il7kjx.jpg";

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }]} />
      <MediaGrid vids={[{ src: img3 }, { src: img4 }]} />
      <br />
    </Inner>
  );
}
