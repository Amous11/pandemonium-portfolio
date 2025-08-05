import { ProjectDescription } from "../components/ProjectDescription";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { Inner } from "../components/animation/Inner";
import { projects } from "../utils/globals";

export default function Kamaana() {
  const project = projects.find((p) => p.name === "Kamaana");

  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1754405788/P12%20Kamaana%202025/Reveal_Final_u5kchw.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1754405773/P12%20Kamaana%202025/Gif%20as%20videos%20WebM/6_0076-0156_uzesgw.webm";
  const img2 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1754405769/P12%20Kamaana%202025/Gif%20as%20videos%20WebM/5_0264-0311_olwcgf.webm";
  const img3 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1754405768/P12%20Kamaana%202025/Gif%20as%20videos%20WebM/4_0407-0452_h2yy0x.webm";
  const img4 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1754405768/P12%20Kamaana%202025/Gif%20as%20videos%20WebM/3_0581-0642_gti86o.webm";
  const img5 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1754405767/P12%20Kamaana%202025/Gif%20as%20videos%20WebM/1_0682-0743_yujm6b.webm";
  const img6 =
    "https://res.cloudinary.com/amouscloud/video/upload/v1754405767/P12%20Kamaana%202025/Gif%20as%20videos%20WebM/2_0807-0915_oj32al.webm";

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }]} />
      <MediaGrid vids={[{ src: img3 }, { src: img4 }]} />
      <MediaGrid vids={[{ src: img5 }, { src: img6 }]} />
      <br />
    </Inner>
  );
}
