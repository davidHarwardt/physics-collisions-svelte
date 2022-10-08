import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    if(mode === "single-bundle") {
        return {
            base: "",
            plugins: [svelte(), viteSingleFile()],
        }
    } else {
        return {
            base: "",
            plugins: [
                svelte(),
                VitePWA({
                    registerType: "autoUpdate",
                    includeAssets: ["icon.svg", "icon-apple-touch-icon.png"],
                    manifest: {
                        name: "Physics - Collisions",
                        short_name: "Collisions",
                        description: "a simple collision simulation",
                        theme_color: "#2f4f4f",
                        icons: [
                            {
                                src: "icon-512x512.png",
                                sizes: "512x512",
                                type: "image/png",
                            },
                            {
                                src: "icon-512x512.png",
                                sizes: "512x512",
                                type: "image/png",
                                purpose: "any maskable",
                            },
                            {
                                src: "icon-192x192.png",
                                sizes: "192x192",
                                type: "image/png",
                            },
                        ],
                    },
                    devOptions: {
                        enabled: true,
                    },
                }),
            ],
        }
    }
})
