import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Whiskey() {
  const project = projects.find((p) => p.name === "Whiskey");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289695/P6%20Whiskey/New_Final_h6l1x0.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289378/P6%20Whiskey/test_v2nzx6.jpg";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289368/P6%20Whiskey/0469_ndm5xu.jpg";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289368/P6%20Whiskey/0417_woncll.jpg";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289364/P6%20Whiskey/0329_yimoc6.jpg";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289363/P6%20Whiskey/0094_bpg52n.jpg";

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
