/**
 * Central data file for the Awami Foods website concept.
 *
 * Everything the owner may want to change later lives here:
 * business details, categories, demo products, review summaries and hours.
 * Replace the values below with official information — no UI changes needed.
 */

import catCakes from "@/assets/cat-cakes.jpg";
import catSweets from "@/assets/cat-sweets.jpg";
import catBakery from "@/assets/cat-bakery.jpg";
import catDrinks from "@/assets/cat-drinks.jpg";
import prodChocolate from "@/assets/hero-cake.jpg";
import prodVanilla from "@/assets/prod-vanilla.jpg";
import prodBlackForest from "@/assets/prod-blackforest.jpg";
import prodCustom from "@/assets/prod-custom.jpg";
import imgCounter from "@/assets/counter.jpg";
import imgStorefront from "@/assets/storefront.jpg";
import imgSweetsTray from "@/assets/gal-sweets-tray.jpg";
import imgShelves from "@/assets/gal-shelves.jpg";

export const heroImages = {
  counter: imgCounter,
  cake: prodChocolate,
  sweets: imgSweetsTray,
};

export const storefrontImage = imgStorefront;

export type GalleryItem = {
  id: string;
  image: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

/**
 * Placeholder imagery. Swap these entries for the bakery's own photographs.
 */
export const gallery: GalleryItem[] = [
  {
    id: "storefront",
    image: imgStorefront,
    alt: "Placeholder image of a neighbourhood bakery shopfront lit at dusk",
    caption: "Shopfront",
    width: 1408,
    height: 1008,
  },
  {
    id: "counter",
    image: imgCounter,
    alt: "Placeholder image of a glass bakery display counter filled with cream cakes",
    caption: "Display counter",
    width: 1100,
    height: 1300,
  },
  {
    id: "sweets",
    image: imgSweetsTray,
    alt: "Placeholder image of steel trays of traditional mithai sweets",
    caption: "Sweets trays",
    width: 1000,
    height: 1000,
  },
  {
    id: "shelves",
    image: imgShelves,
    alt: "Placeholder image of bakery shelves stacked with biscuits, rusks and bread",
    caption: "Bakery shelves",
    width: 1000,
    height: 1200,
  },
  {
    id: "drinks",
    image: catDrinks,
    alt: "Placeholder image of chilled bottled drinks in a shop cooler",
    caption: "Cold drinks",
    width: 900,
    height: 900,
  },
];

export const business = {
  name: "Awami Foods",
  urduName: "عوامی",
  subName: "Sweets & Bakers",
  urduSubName: "سویٹس اینڈ بیکرز",
  category: "Bakery",
  tagline: "Freshly Baked. Made for Every Occasion.",
  phone: "+92 323 2810084",
  phoneHref: "tel:+923232810084",
  address: {
    line1: "Shahara-e-Ali, Chandni Chowk",
    line2: "Saeedabad, Baldia Town",
    line3: "Sector 5, Gulshan-e-Habib",
    city: "Karachi",
    postalCode: "75760",
    country: "Pakistan",
  },
  plusCode: "WX87+X2 Gulshan e Habib, Karachi, Pakistan",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Awami+Foods+Shahara-e-Ali+Chandni+Chowk+Saeedabad+Baldia+Town+Karachi",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Awami+Foods+Shahara-e-Ali+Chandni+Chowk+Saeedabad+Baldia+Town+Karachi",
  rating: 4.0,
  reviewCount: 73,
  services: ["Takeout", "Bakery products", "Cakes", "Sweets", "Cold drinks", "Birthday cakes"],
  /**
   * Demo/reference hours — confirm and replace with the bakery's official hours.
   */
  hours: [
    { day: "Monday", open: "9:00 AM", close: "11:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "11:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "11:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "11:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "11:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "11:00 PM" },
    { day: "Sunday", open: "9:00 AM", close: "11:00 PM" },
  ],
} as const;

export const addressLines = [
  business.address.line1,
  business.address.line2,
  business.address.line3,
  `${business.address.city}, ${business.address.country}`,
];

export type Category = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "cakes",
    title: "Cakes",
    description: "Birthday & celebration cakes",
    image: catCakes,
  },
  {
    id: "sweets",
    title: "Sweets",
    description: "Traditional sweet favourites",
    image: catSweets,
  },
  {
    id: "bakery",
    title: "Bakery",
    description: "Freshly baked everyday treats",
    image: catBakery,
  },
  {
    id: "beverages",
    title: "Beverages",
    description: "Refreshing drinks",
    image: catDrinks,
  },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  /** Shown in place of a price — no invented prices in this concept. */
  status: string;
  isDemo: boolean;
};

export const products: Product[] = [
  {
    id: "celebration-cake",
    name: "Celebration Cake — Showcase",
    description: "The kind of layered celebration cake a local bakery makes to order.",
    category: "Cakes",
    image: prodChocolate,
    status: "Contact for Price",
    isDemo: true,
  },
  {
    id: "cream-cake",
    name: "Cream Cake — Showcase",
    description: "Light sponge with smooth cream — a classic bakery counter favourite.",
    category: "Cakes",
    image: prodVanilla,
    status: "Contact for Price",
    isDemo: true,
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake — Showcase",
    description: "Chocolate layers with cream — shown here as a design example.",
    category: "Cakes",
    image: prodBlackForest,
    status: "Contact for Price",
    isDemo: true,
  },
  {
    id: "custom-inspiration",
    name: "Custom Cake Inspiration",
    description: "An example of how a themed birthday cake request could be presented.",
    category: "Custom",
    image: prodCustom,
    status: "Contact for Price",
    isDemo: true,
  },
];

export type ReviewSummary = {
  id: string;
  summary: string;
  theme: string;
  source: string;
};

/**
 * Paraphrased summaries of publicly visible customer sentiment.
 * These are not verbatim quotations and are not attributed to individuals.
 */
export const reviewSummaries: ReviewSummary[] = [
  {
    id: "bakery-items",
    summary:
      "Customers describe a positive experience with the bakery items available in store.",
    theme: "Bakery items",
    source: "Public review sentiment",
  },
  {
    id: "cakes-sweets",
    summary:
      "Cakes and sweets are mentioned favourably in publicly visible feedback.",
    theme: "Cakes & sweets",
    source: "Public review sentiment",
  },
  {
    id: "custom-cakes",
    summary:
      "Feedback mentions that birthday cakes can be made according to customers' own choices.",
    theme: "Custom birthday cakes",
    source: "Public review sentiment",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const demoNotice =
  "This is an independent website concept created to show how Awami Foods could appear online. Photography and product examples are for demonstration only.";
