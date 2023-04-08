import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: [
    "vite.svg",
    "512x512.png",
    "225x225.png",
    "192x192.png",
    "180x180.png",
    "225x225_maskable.png",
  ],
  manifest: {
    name: "Vite PWA",
    short_name: "Vite PWA",
    description: "Description of Vite PWA",
    theme_color: "#171717",
    background_color: "#e8ebf2",
    icons: [
      {
        src: "512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "225x225.png",
        sizes: "225x225",
        type: "image/png",
      },
      {
        src: "192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "225x225_maskable.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  // base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
});
