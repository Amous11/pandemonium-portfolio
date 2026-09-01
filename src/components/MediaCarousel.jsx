import { useCallback, useEffect, useMemo, useState } from "react";
import { Carousel, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { MediaCarouselContext } from "./media-carousel-context";

export function MediaCarousel({ children }) {
  const { pathname } = useLocation();
  const enabled = pathname.startsWith("/project/");
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    setActiveId(null);
  }, [pathname]);

  const register = useCallback((id, item) => {
    setItems((current) => {
      const existing = current.findIndex((media) => media.id === id);
      if (existing === -1) return [...current, { id, ...item }];

      const next = [...current];
      next[existing] = { id, ...item };
      return next;
    });

    return () => {
      setItems((current) => current.filter((media) => media.id !== id));
    };
  }, []);

  const open = useCallback((id) => setActiveId(id), []);
  const close = useCallback(() => setActiveId(null), []);
  const value = useMemo(
    () => (enabled ? { register, open } : null),
    [enabled, open, register],
  );
  const activeIndex = items.findIndex((media) => media.id === activeId);
  const show = enabled && activeIndex >= 0;

  return (
    <MediaCarouselContext.Provider value={value}>
      {children}
      <Modal
        show={show}
        onHide={close}
        centered
        size="xl"
        fullscreen="sm-down"
        dialogClassName="media-carousel-dialog"
        contentClassName="media-carousel-content"
        aria-labelledby="media-carousel-title"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title id="media-carousel-title">Image gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            className="media-carousel"
            activeIndex={activeIndex}
            onSelect={(index) => {
              if (typeof index === "number") {
                setActiveId(items[index]?.id ?? null);
              }
            }}
            controls={items.length > 1}
            indicators={items.length > 1}
            interval={null}
            touch
          >
            {items.map((media, index) => (
              <Carousel.Item key={media.id}>
                <img
                  className="media-carousel-image"
                  src={media.src}
                  alt={`Gallery image ${index + 1} of ${items.length}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </MediaCarouselContext.Provider>
  );
}

MediaCarousel.propTypes = {
  children: PropTypes.node,
};
