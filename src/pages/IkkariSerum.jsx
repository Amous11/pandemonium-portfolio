import { Inner } from "../components/animation/Inner";
import { MediaGrid } from "../components/MediaGrid";
import { ProjectDescription } from "../components/ProjectDescription";
import { projects } from "../utils/globals";

export default function IkkariSerum() {
  const project = projects.find((item) => item.name === "IkkariSerum");
  const images = [
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846630/P15/stills9_ynwewd.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846629/P15/stills7_qtzunx.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846628/P15/stills2_wzx0nj.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846628/P15/stills4_zq9aks.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846628/P15/stills_jm9kim.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846627/P15/stills5_k8lhik.jpg",
    "https://res.cloudinary.com/amouscloud/image/upload/v1787846627/P15/stills8_i2chku.jpg",
  ];

  return (
    <Inner>
      <ProjectDescription title={project.name} desc={project.description} />
      <MediaGrid
        vids={images.map((src) => ({ src }))}
        columns={3}
        aspectRatio="4 / 5"
      />
      <br />
    </Inner>
  );
}
