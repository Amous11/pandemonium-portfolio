import video from "../assets/P5 Speed Car/Speed_Car.mp4";
import img1 from "../assets/P5 Speed Car/Speed_Car_Sh03_V03.jpg";
import img2 from "../assets/P5 Speed Car/Speed_Car_Sh05_V02_.jpg";
import img3 from "../assets/P5 Speed Car/Speed_Car_Sh07_V04_.jpg";
import img4 from "../assets/P5 Speed Car/Speed_Car_Sh08_V03.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";

export default function SpeedCar() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum voluptas eveniet sequi veritatis possimus voluptate saepe, error totam recusandae. Labore ea ipsam saepe adipisci laboriosam id, voluptate repellendus dolorem consequuntur minima, voluptas modi quisquam maiores aperiam quidem illum nihil! Ipsam laboriosam labore, quasi expedita similique est. Sapiente, repellat quae!";
  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title="Vape" desc={description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }]} />
      <MediaGrid vids={[{ src: img3 }, { src: img4 }]} />
      <br />
    </Inner>
  );
}
