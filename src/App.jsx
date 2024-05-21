import mainVideo from "./assets/P4 Neura/iBotONE_teaser_008_final.mp4";
import treatmentMP4 from "./assets/P1 ISC/3 Treatment.mp4";
import activePeelMP4 from "./assets/P1 ISC/Active Peel System blue.mp4";
import activeSerumMP4 from "./assets/P1 ISC/Shot_15_ActiveSerum_.mp4";
import proHealMP4 from "./assets/P1 ISC/Shot04_v9_pro_heal.mp4";
import sonyMP4 from "./assets/P2 Sony/sony with sound.mp4";
import kamaanaMP4 from "./assets/P3 Kamana/wearekamaana_full_AGX.mp4";
import smartWatchM4 from "./assets/P5 Watch/2k_smartwatch.mp4";
import aodhMP4 from "./assets/P6 Whieskey/New Final.mp4";
import vapeMP4 from "./assets/P7 Vape/vape_2k_1.mp4";
import { TransparentNavbar } from "./components/TransparentNavbar.jsx";
import { Video } from "./components/Video.jsx";
import { VideoGrid } from "./components/VideoGrid.jsx";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <TransparentNavbar />
      <Video src={mainVideo} autoPlay />
      <Container>
        <Row className="justify-content-center m-3 p-3">
          <Col
            md={10}
            className="text-center small-screen-text"
            style={{ fontSize: "1.5rem" }}
          >
            <p>
              Pandemonium is a collective of innovative trailblazers, constantly
              pushing the boundaries of creativity and technology. Drawing
              strength from our rich heritage, we are dedicated to building a
              legacy for the future of Pandemonium.
            </p>
            <p>
              Whether it&apos;s our clients, our fellow creators, or anyone who
              makes the delivery of world-class work possible, our mission and
              values are the guiding principles for who we are, how we perform,
              and the content we create.
            </p>
          </Col>
        </Row>
      </Container>
      <VideoGrid
        vids={[
          { src: proHealMP4, ctg: "Colour Reel" },
          { src: activePeelMP4, ctg: "Beauty Reel" },
          { src: activeSerumMP4, ctg: "FX Reel" },
        ]}
      />
      <Video src={smartWatchM4} overlay="Gaming Reel" />
      <VideoGrid
        vids={[
          { src: treatmentMP4, ctg: "Category" },
          { src: sonyMP4, ctg: "Category" },
          { src: kamaanaMP4, ctg: "Category" },
        ]}
        left
      />
      <VideoGrid
        vids={[
          { src: aodhMP4, ctg: "Category" },
          { src: vapeMP4, ctg: "Category" },
        ]}
      />

      <Footer />
    </>
  );
}

export default App;
