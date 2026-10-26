/**
 * CENTRAL IMAGE + VIDEO CONFIG
 * ---------------------------------------------------------------
 * Every picture on the site is listed here. To swap a photo, either
 * overwrite the file in /public/images with the same name, or change
 * the path below. No component needs editing.
 *
 * Missing files never break the layout: <SmartImage /> shows a
 * branded "ADD IMAGE" placeholder instead.
 *
 * NOTE: The current images are frames taken from the supplied valet
 * videos. Replace them with full-resolution originals when available.
 */

export const images = {
  hero: { src: "/images/hero.jpg", alt: "Glossy, freshly valeted car paintwork", position: "70% 55%" },

  statement: { src: "/images/statement.jpg", alt: "Close-up of a clean car door", position: "50% 50%" },

  services: {
    simpleExterior: { src: "/images/service-exterior.jpg", alt: "Clean exterior bodywork and window trim" },
    exteriorPlus: { src: "/images/service-exterior-plus.jpg", alt: "Cleaned alloy wheel and lower bodywork" },
    simpleInterior: { src: "/images/service-interior.jpg", alt: "Clean rear seat upholstery" },
    interiorPlus: { src: "/images/service-interior-plus.jpg", alt: "Clean centre console and seats" },
    combo: { src: "/images/service-full.jpg", alt: "Car cleaned inside and out" },
  },

  // Add more pairs here. Both photos in a pair must be the same size / framing.
  beforeAfter: [
    {
      id: "interior",
      label: "Interior",
      before: { src: "/images/before-interior.jpg", alt: "Rear interior before valet" },
      after: { src: "/images/after-interior.jpg", alt: "Rear interior after valet" },
    },
    {
      id: "exterior",
      label: "Wheels & bodywork",
      before: { src: "/images/before-exterior.jpg", alt: "Wheel and door before valet" },
      after: { src: "/images/after-exterior.jpg", alt: "Wheel and door after valet" },
    },
  ],

  // 8 gallery slots. `area` positions each one in the editorial grid (see globals.css .g-*).
  work: [
    { src: "/images/work-01.jpg", alt: "Foam on a freshly washed car front end", area: "a", position: "50% 50%" },
    { src: "/images/work-07.jpg", alt: "Clean centre console", area: "b", position: "50% 50%" },
    { src: "/images/work-02.jpg", alt: "Glossy paint reflecting the sky", area: "c", position: "50% 50%" },
    { src: "/images/work-04.jpg", alt: "Clean white hatchback on block paving", area: "d", position: "50% 70%" },
    { src: "/images/work-03.jpg", alt: "Clean seat stitching and upholstery", area: "e", position: "50% 50%" },
    { src: "/images/work-05.jpg", alt: "Polished window trim and bodywork", area: "f", position: "50% 50%" },
    { src: "/images/work-06.jpg", alt: "Clean door and handle", area: "g", position: "50% 50%" },
    { src: "/images/work-08.jpg", alt: "Clean rubber floor mat", area: "h", position: "50% 50%" },
  ],
};

export const videos = [
  { src: "/videos/reel-1.mp4", poster: "/videos/reel-1.jpg", title: "Before & after" },
  { src: "/videos/reel-2.mp4", poster: "/videos/reel-2.jpg", title: "Another happy customer" },
  { src: "/videos/reel-3.mp4", poster: "/videos/reel-3.jpg", title: "Hands-on detailing" },
];

export const logo = { src: "/logo.png", alt: "Scooter's Car Valeting logo" };
