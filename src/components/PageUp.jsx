import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export function PageUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisible = () => {
      const show = window.scrollY > window.innerHeight;
      if (show !== isVisible) setIsVisible(show);
    };

    document.addEventListener("scroll", handleVisible);

    return () => {
      removeEventListener("scroll", handleVisible);
    };
  }, [isVisible]);

  return (
    <>
      <Button
        className="p-0 me-4"
        variant="link"
        onClick={() => window.scrollTo(0, 0)}
        style={{
          position: "fixed",
          bottom: "10%",
          right: "0",
          zIndex: "1000",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      >
        <svg x="0px" y="0px" width="50px" height="20px" viewBox="0 0 50 20">
          <polygon
            style={{ fill: "white" }}
            points="43.886,16.221 42.697,17.687 26.5,4.731 10.303,17.688 9.114,16.221 26.5,2.312 	"
          ></polygon>
        </svg>
      </Button>
    </>
  );
}
