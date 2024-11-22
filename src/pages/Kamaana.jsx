import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Media } from "../components/Media";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Kamaana() {
  const project = projects.find((p) => p.name === "Kamaana");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289708/P3%20Kamaana/wearekamaana_full_AGX_jked0p.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282037/P3%20Kamaana/Teaser_cream_gluv08.webp";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282037/P3%20Kamaana/wearekamaana_full_AGX_00414_sjycwe.webp";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282034/P3%20Kamaana/wearekamaana_full_AGX_00201_fp8pno.webp";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282033/P3%20Kamaana/wearekamaana_full_AGX_00631_gcszfp.webp";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282033/P3%20Kamaana/wearekamaana_full_AGX_00000_klqtqr.webp";
  const img6 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282031/P3%20Kamaana/selfcare2_niuqye.webp";
  const img7 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282031/P3%20Kamaana/double_product_05_ibhxon.webp";
  const img8 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282030/P3%20Kamaana/wearekamaana_full_AGX_00482_bpjkny.webp";
  const img9 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282029/P3%20Kamaana/double_product_02_jx8g1r.webp";
  const img10 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282029/P3%20Kamaana/selfcare_dbtgqq.webp";
  const img11 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282029/P3%20Kamaana/double_product_golden_hour_jbvs13.webp";
  const img12 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732282028/P3%20Kamaana/First_test5_qtrljs.webp";
  const vid1 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1732282050/P3%20Kamaana/Untitled_iyxe87.mp4";
  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <MediaGrid vids={[{ src: img4 }, { src: img5 }, { src: img6 }]} right />
      <Media src={vid1} />
      <MediaGrid vids={[{ src: img7 }, { src: img8 }, { src: img9 }]} left />
      <MediaGrid
        vids={[{ src: img10 }, { src: img11 }, { src: img12 }]}
        right
      />
      <br />
    </Inner>
  );
}
