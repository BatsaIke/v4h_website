import type { Request, Response, NextFunction } from "express";
import express from "express";
import compression from "compression";
import cors from "cors";
import serveStatic from "serve-static";
import fs from "fs/promises";
import path from "path";
import { createServer as createViteServer, ViteDevServer } from "vite"; // Import Vite types
import dotenv from "dotenv";

dotenv.config();

const isProd = process.env.NODE_ENV === "production";

async function createServer() {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());
  app.use(compression());
  app.use(express.urlencoded({ extended: true }));

  let vite: ViteDevServer | undefined; // Explicitly type 'vite'

  // Setup Vite for development
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  }

  // Serve static files for production
  if (isProd) {
    app.use(
      serveStatic(path.resolve(__dirname, "dist/client"), {
        index: false,
      })
    );
  }

  // Fallback route to serve index.html for SPA
  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const url = req.originalUrl;

      let template: string;
      if (!isProd) {
        // Load the dev template
        template = await vite!.transformIndexHtml(
          url,
          await fs.readFile(path.resolve("index.html"), "utf-8")
        );
      } else {
        // Load the production template
        template = await fs.readFile(
          path.resolve(__dirname, "dist/client/index.html"),
          "utf-8"
        );
      }

      // Render HTML (if using SSR, you can handle logic here)
      const html = template.replace(`<!--app-html-->`, ""); // Placeholder for SSR logic
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  // Start the server
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

createServer();
