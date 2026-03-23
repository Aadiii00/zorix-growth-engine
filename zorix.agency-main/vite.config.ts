import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api/send-email": {
        target: "https://api.resend.com/emails",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/send-email/, ""),
        headers: {
          Authorization: "Bearer re_bZofe7ZK_Bz8kh5ZdPY17CQYELJZ37wsK",
        },
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
