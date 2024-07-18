import video from "../assets/P4 Neura/iBotONE_teaser_008_final.mp4";
import img1 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h04m28s553.png";
import img2 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h04m46s208.png";
import img3 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h04m57s085.png";
import img4 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m10s885.png";
import img5 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m19s426.png";
import img6 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m30s910.png";
import img7 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h06m38s101.png";
import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Media } from "../components/Media";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Neura() {
  const project = projects.find((p) => p.name === "Neura");

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <Media src={img4} />
      <MediaGrid vids={[{ src: img5 }, { src: img6 }, { src: img7 }]} />
      <br />
    </Inner>
  );
}
