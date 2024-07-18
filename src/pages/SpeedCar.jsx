import video from "../assets/P5 Speed Car/Speed_Car.mp4";
import img1 from "../assets/P5 Speed Car/Speed_Car_Sh03_V03.jpg";
import img2 from "../assets/P5 Speed Car/Speed_Car_Sh05_V02_.jpg";
import img3 from "../assets/P5 Speed Car/Speed_Car_Sh07_V04_.jpg";
import img4 from "../assets/P5 Speed Car/Speed_Car_Sh08_V03.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function SpeedCar() {
  const project = projects.find((p) => p.name === "Speed Car");

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