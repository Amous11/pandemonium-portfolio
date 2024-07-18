import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Kamaana() {
  const project = projects.find((p) => p.name === "Kamaana");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289708/P3%20Kamaana/wearekamaana_full_AGX_jked0p.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289392/P3%20Kamaana/wearekamaana_full_AGX_00000_lujogj.jpg";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289365/P3%20Kamaana/wearekamaana_full_AGX_00631_jpp1p2.jpg";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289363/P3%20Kamaana/wearekamaana_full_AGX_00482_ozjakw.jpg";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289361/P3%20Kamaana/wearekamaana_full_AGX_00414_jmblpp.jpg";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289360/P3%20Kamaana/wearekamaana_full_AGX_00201_bpuxn9.jpg";

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
