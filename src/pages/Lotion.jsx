import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Media } from "../components/Media";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Lotion() {
  const project = projects.find((p) => p.name === "Lotion");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1732282025/P10%20Body%20Lotion/Body_lotion_FInal_for_upload_iqepsj.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281917/P10%20Body%20Lotion/body_lotion_final_montage_0612_mqhp9k.webp";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281917/P10%20Body%20Lotion/body_lotion_final_montage_0416_x44tup.webp";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281916/P10%20Body%20Lotion/body_lotion_final_montage_0374_eo92ej.webp";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281916/P10%20Body%20Lotion/body_lotion_final_montage_0171_xhgopo.webp";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1732281915/P10%20Body%20Lotion/body_lotion_final_montage_0074_lsexat.webp";

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }]} />
      <Media src={img3} />
      <MediaGrid vids={[{ src: img4 }, { src: img5 }]} />

      <br />
    </Inner>
  );
}
