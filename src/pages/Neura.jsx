import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Media } from "../components/Media";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Neura() {
  const project = projects.find((p) => p.name === "Neura");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1718289745/P4%20Neura/iBotONE_teaser_008_final_tihft8.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289401/P4%20Neura/vlcsnap-2023-02-21-19h04m28s553_tdnoxu.png";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289367/P4%20Neura/vlcsnap-2023-02-21-19h04m46s208_qunjkv.png";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289393/P4%20Neura/vlcsnap-2023-02-21-19h04m57s085_bqodli.png";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289369/P4%20Neura/vlcsnap-2023-02-21-19h05m10s885_ejoszq.png";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289378/P4%20Neura/vlcsnap-2023-02-21-19h05m19s426_awjtys.png";
  const img6 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289403/P4%20Neura/vlcsnap-2023-02-21-19h05m30s910_yzqshf.png";
  const img7 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1718289413/P4%20Neura/vlcsnap-2023-02-21-19h06m38s101_igsrkm.png";

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
