import { ProjectDescription } from "../components/ProjectDescription";
import { MediaGrid } from "../components/MediaGrid";
import { Media } from "../components/Media";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function ISC() {
  const project = projects.find((p) => p.name === "ISC");

  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289427/P1%20ISC/1_Agx_rrxy5s.jpg";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289403/P1%20ISC/7_kmihmy.jpg";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289352/P1%20ISC/Shot_06_v4_03_Treatment_syulgw.jpg";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289429/P1%20ISC/Shot_02_hicr3h.jpg";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289434/P1%20ISC/Shot_13_v12_active_serum_s9d7ms.jpg";
  const img6 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289433/P1%20ISC/Shot14_v09_active_serum_vuydji.jpg";
  const img7 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289446/P1%20ISC/v1_active_serum_n7tjg6.jpg";
  const img8 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289352/P1%20ISC/v1_f5mjdt.jpg";
  const img9 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289455/P1%20ISC/v2_active_serum_cw9ubx.jpg";
  const img10 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289339/P1%20ISC/v5_myaykr.jpg";
  const img11 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289468/P1%20ISC/v21_active_serum_mpgp8w.jpg";
  const img12 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289460/P1%20ISC/v22_active_serum_n2ubwc.jpg";
  const img13 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289357/P1%20ISC/v25_active_serum_drp3ch.jpg";

  return (
    <Inner>
      <div className="pt-5" />
      <ProjectDescription title={project?.name} desc={project?.description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <Media src={img4} />
      <MediaGrid vids={[{ src: img5 }, { src: img6 }, { src: img7 }]} />
      <MediaGrid vids={[{ src: img8 }, { src: img9 }]} />
      <MediaGrid vids={[{ src: img10 }, { src: img11 }, { src: img12 }]} />
      <Media src={img13} />
      <br />
    </Inner>
  );
}
