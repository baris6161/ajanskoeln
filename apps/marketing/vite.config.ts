import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "node:fs";
import type { Plugin } from "vite";
import { componentTagger } from "lovable-tagger";

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function seoStaticPlugin(): Plugin {
  let outDir = "dist";
  return {
    name: "ajans-seo-static",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    transformIndexHtml(html, ctx) {
      const env = loadEnv(ctx.mode, process.cwd(), "");
      const origin = (env.VITE_PRODUCTION_SITE_URL || "https://ajanskoeln.de").replace(/\/$/, "");
      return html.replaceAll("__SITE_ORIGIN__", origin);
    },
    closeBundle() {
      const env = loadEnv("production", process.cwd(), "");
      const origin = (env.VITE_PRODUCTION_SITE_URL || "https://ajanskoeln.de").replace(/\/$/, "");
      const routes = ["/", "/impressum", "/datenschutz"];
      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
      for (const route of routes) {
        const loc = route === "/" ? `${origin}/` : `${origin}${route}`;
        const pri = route === "/" ? "1.0" : "0.7";
        xml += `  <url><loc>${escapeXml(loc)}</loc><changefreq>monthly</changefreq><priority>${pri}</priority></url>\n`;
      }
      xml += "</urlset>\n";
      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
      const absOut = path.resolve(__dirname, outDir);
      fs.mkdirSync(absOut, { recursive: true });
      fs.writeFileSync(path.join(absOut, "sitemap.xml"), xml, "utf8");
      fs.writeFileSync(path.join(absOut, "robots.txt"), robots, "utf8");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), seoStaticPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
