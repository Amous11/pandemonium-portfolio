import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Media } from "../components/Media";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Sony() {
  const project = projects.find((p) => p.name === "Sony");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289635/P2%20Sony/sony_with_sound_xmc9fi.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289344/P2%20Sony/1_uwhfab.jpg";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289484/P2%20Sony/3_jecjql.jpg";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289351/P2%20Sony/4_ngplt7.jpg";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289352/P2%20Sony/5_lebqmo.jpg";
  const img6 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289352/P2%20Sony/5_lebqmo.jpg";
  const img7 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289354/P2%20Sony/7_iqpgak.jpg";
  const img8 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289419/P2%20Sony/Gif_1_nmxyjk.mp4";
  const img9 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289463/P2%20Sony/Gif_2_wfsavr.mp4";
  const img10 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289358/P2%20Sony/Gif_3_totx95.mp4";
  const img11 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289504/P2%20Sony/Gif_4_j9xbvc.mp4";

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid vids={[{ src: img1 }, { src: img3 }]} left />
      <Media src={img4} />
      <MediaGrid vids={[{ src: img5 }, { src: img6 }, { src: img7 }]} />
      <Media src={img8} />
      <MediaGrid vids={[{ src: img9 }, { src: img10 }]} left />
      <Media src={img11} />

      <br />
    </Inner>
  );
}
