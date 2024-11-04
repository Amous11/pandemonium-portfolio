import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";
import { Media } from "../components/Media";

export default function MKBag() {
  const project = projects.find((p) => p.name === "MK Bag");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1722264466/P8%20MK_Bag/Video_Render_atfrrw.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264215/P8%20MK_Bag/1551_hj2v5s.jpg";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264213/P8%20MK_Bag/1517_vav47j.jpg";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264208/P8%20MK_Bag/1450_h1tftq.jpg";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264207/P8%20MK_Bag/1370_tdwvj8.jpg";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264207/P8%20MK_Bag/1580_yqw6kc.jpg";
  const img6 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264203/P8%20MK_Bag/1143_k7igxg.jpg";
  const img7 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264200/P8%20MK_Bag/1326_ytspgl.jpg";
  const img8 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264200/P8%20MK_Bag/1069_gr7gac.jpg";
  const img9 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1722264199/P8%20MK_Bag/1215_lcpzcd.jpg";
  const gif1 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1722264250/P8%20MK_Bag/gif_2_kjky3q.mp4";
  const gif2 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1722264241/P8%20MK_Bag/gif_3_zsnylc.mp4";
  const gif3 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1722264227/P8%20MK_Bag/gif_1_vbdnyv.mp4";

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <Media src={img4} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} />
      <Media src={img5} />
      <MediaGrid vids={[{ src: img6 }, { src: img7 }, { src: img8 }]} left />
      <Media src={img9} />
      <MediaGrid vids={[{ src: gif1 }, { src: gif2 }, { src: gif3 }]} />
      <br />
    </Inner>
  );
}
