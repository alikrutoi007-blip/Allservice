import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Allservice — ремонт техники в Алматы и области",
    short_name: "Allservice",
    description:
      "Ремонт и установка бытовой и коммерческой техники и оборудования в Алматы и Алматинской области.",
    lang: "ru-KZ",
    dir: "ltr",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111820",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
