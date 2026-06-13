import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Бәрі Жөн — сервис мастеров в Алматы",
    short_name: "Бәрі Жөн",
    description:
      "Ремонт бытовой техники и мастера по дому с выездом по Алматы.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#102a43",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}

