import { createContext, useContext } from "react";

export const MediaCarouselContext = createContext(null);

export function useMediaCarousel() {
  return useContext(MediaCarouselContext);
}
