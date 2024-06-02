import video from "../assets/P4 Neura/iBotONE_teaser_008_final.mp4";
import img1 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h04m28s553.png";
import img2 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h04m46s208.png";
import img3 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h04m57s085.png";
import img4 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m10s885.png";
import img5 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m19s426.png";
import img6 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h05m30s910.png";
import img7 from "../assets/P4 Neura/vlcsnap-2023-02-21-19h06m38s101.png";
import { ProjectDescription } from "../components/ProjectDescription";
import { TransparentNavbar } from "../components/TransparentNavbar";
import { ProductHeader } from "../components/ProductHeader";
import { MediaGrid } from "../components/MediaGrid";
import { PageUp } from "../components/PageUp";
import { Footer } from "../components/Footer";
import { Media } from "../components/Media";
import { Inner } from "../animation/Inner";

export default function Neura() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum voluptas eveniet sequi veritatis possimus voluptate saepe, error totam recusandae. Labore ea ipsam saepe adipisci laboriosam id, voluptate repellendus dolorem consequuntur minima, voluptas modi quisquam maiores aperiam quidem illum nihil! Ipsam laboriosam labore, quasi expedita similique est. Sapiente, repellat quae!";

  return (
    <Inner>
      <TransparentNavbar />
      <ProductHeader video={video} />
      <ProjectDescription title="Neura" desc={description} />
      <MediaGrid vids={[{ src: img1 }, { src: img2 }, { src: img3 }]} left />
      <Media src={img4} />
      <MediaGrid vids={[{ src: img5 }, { src: img6 }, { src: img7 }]} />
      <br />
      <Footer />
      <PageUp />
    </Inner>
  );
}
