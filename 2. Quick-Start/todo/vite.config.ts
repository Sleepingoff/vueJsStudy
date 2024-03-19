import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/components", replacement: "/src/components" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/views", replacement: "/src/views" },
      { find: "@/composables", replacement: "/src/composables" },
      { find: "@/types", replacement: "/src/types" },
      { find: "@/router", replacement: "/src/router" },
      { find: "@/store", replacement: "/src/store" },
    ],
  },
});
