import { Inner } from "../components/animation/Inner";
import { MediaGrid } from "../components/MediaGrid";
import { ProductHeader } from "../components/ProductHeader";
import { ProjectDescription } from "../components/ProjectDescription";
import { projects } from "../utils/globals";

export default function HardDrive() {
  const project = projects.find((item) => item.name === "HardDrive");
  const video =
    "https://res.cloudinary.com/amouscloud/video/upload/v1787842953/P14%20hard%20disc/Hard_Drive_v21_srgnnz.mp4";
  const img1 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787842952/P14%20hard%20disc/Hard_Drive_v04_bwnsed.jpg";
  const img2 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787842952/P14%20hard%20disc/Hard_Drive_v19_wnmkba.jpg";
  const img3 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787842951/P14%20hard%20disc/Hard_Drive_v27_jnhcua.jpg";
  const img4 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787842951/P14%20hard%20disc/Hard_Drive_v23_tmioyc.jpg";
  const img5 =
    "https://res.cloudinary.com/amouscloud/image/upload/v1787842950/P14%20hard%20disc/Hard_Drive_v28_gbzliz.jpg";

  return (
    <Inner>
      <ProductHeader video={video} />
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid
        vids={[
          { src: img1 },
          { src: img4 },
          { src: img5 },
        ]}
        columns={3}
      />
      <MediaGrid
        vids={[{ src: img2 }, { src: img3 }]}
      />
      <br />
    </Inner>
  );
}
