import img1 from "../assets/P1 ISC/1 Agx.jpg";
import img2 from "../assets/P1 ISC/7.jpg";
import img3 from "../assets/P1 ISC/Shot 06_v4_03 Treatment.jpg";
import img4 from "../assets/P1 ISC/Shot_02.jpg";
import img5 from "../assets/P1 ISC/Shot_13_v12_active serum.jpg";
import img6 from "../assets/P1 ISC/Shot14_v09_active serum.jpg";
import img7 from "../assets/P1 ISC/v1_active serum.jpg";
import img8 from "../assets/P1 ISC/v1.jpg";
import img9 from "../assets/P1 ISC/v2_active serum.jpg";
import img10 from "../assets/P1 ISC/v5.jpg";
import img11 from "../assets/P1 ISC/v21_active serum.jpg";
import img12 from "../assets/P1 ISC/v22_active serum.jpg";
import img13 from "../assets/P1 ISC/v25_active serum.jpg";
import { ProjectDescription } from "../components/ProjectDescription";
import { MediaGrid } from "../components/MediaGrid";
import { Media } from "../components/Media";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function ISC() {
  const project = projects.find((p) => p.name === "ISC");
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
