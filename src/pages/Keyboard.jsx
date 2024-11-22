import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Media } from "../components/Media";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Kamaana() {
  const project = projects.find((p) => p.name === "Keyboard");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1732281965/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/Timeline_1_dqxywe.mp4";
  const vid1 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1732281965/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/0270-0366_vdgg0y.mp4";
  const vid2 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1732281947/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/0001-0120_tc6rlv.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281917/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/still5_afcaue.webp";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281916/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/still3_qcqmwv.webp";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281916/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/still4_h5ylgw.webp";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281916/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/still10_oimrhp.webp";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281915/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/still9_izt10m.webp";
  const img6 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281914/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/still7_utkpzz.webp";
  const img7 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281913/P9%20OP%E2%80%931%20-%20teenage%20engineering%20%21/still6v2_qqcsaf.webp";

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }]} />
      <Media src={vid1} />
      <MediaGrid vids={[{ src: img3 }, { src: img4 }]} />
      <Media src={img7} />
      <MediaGrid vids={[{ src: img5 }, { src: img6 }]} />
      <Media src={vid2} />

      <br />
    </Inner>
  );
}
