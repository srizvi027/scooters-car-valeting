/**
 * EDITABLE CONTENT
 * ---------------------------------------------------------------
 * Business details, services, principles and testimonials all live
 * here as simple arrays so they are easy to change.
 */

export const business = {
  name: "Scooter's Car Valeting",
  owner: "Freddie Ketley",
  phone: "+44 7784 113899",
  phoneShort: "07784 113899",
  phoneHref: "tel:+447784113899",
  email: "scooterscleaning@outlook.com",
  emailHref: "mailto:scooterscleaning@outlook.com",
  instagram: "@scooters_car_valleting",
  instagramUrl: "https://www.instagram.com/scooters_car_valleting/",
  area: "Hethersett and local areas",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "before-after", label: "Before / After" },
  { id: "work", label: "Our Work" },
  { id: "contact", label: "Contact" },
];

/**
 * SERVICES — taken from the Scooter's price list shown in the supplied video.
 * Edit names, descriptions and prices freely. Remove `price` to hide it.
 * `image` must match a key in lib/images.js -> images.services
 */
export const services = [
  {
    id: "simple-exterior",
    name: "Simple Exterior",
    price: "£10",
    description: "A straightforward exterior clean to freshen up your car.",
    image: "simpleExterior",
  },
  {
    id: "exterior-plus",
    name: "Exterior Clean+",
    price: "£20",
    description: "A more thorough exterior clean for a sharper finish.",
    image: "exteriorPlus",
  },
  {
    id: "simple-interior",
    name: "Simple Interior",
    price: "£10",
    description: "A straightforward interior clean to tidy up the cabin.",
    image: "simpleInterior",
  },
  {
    id: "interior-plus",
    name: "Interior Clean+",
    price: "£20",
    description: "A more thorough interior clean for a fresher cabin.",
    image: "interiorPlus",
  },
  {
    id: "combo",
    name: "Interior & Exterior Combo",
    price: "£50",
    description: "Inside and out, all in one visit.",
    image: "combo",
  },
];

// Extra services listed on the price list (no prices shown there).
export const extras = ["Glass", "Tyres"];

export const principles = [
  { title: "Attention to detail", text: "Every panel, surface and corner gets proper attention." },
  { title: "Care for your vehicle", text: "Your car is treated with respect, inside and out." },
  { title: "A clean, professional finish", text: "Tidy, polished results you notice straight away." },
  { title: "Local and personal service", text: "Run by Freddie, serving Hethersett and local areas." },
];

/**
 * TESTIMONIALS — DEMO PLACEHOLDERS ONLY.
 * Replace each item with a real, approved customer review and set
 * `demo: false` to remove the placeholder label.
 */
export const testimonials = [
  { quote: "Your customer testimonial will appear here.", name: "Customer name", detail: "Vehicle / location", demo: true },
  { quote: "Add a real customer's feedback here.", name: "Customer name", detail: "Vehicle / location", demo: true },
  { quote: "Replace this text with an approved review.", name: "Customer name", detail: "Vehicle / location", demo: true },
];
