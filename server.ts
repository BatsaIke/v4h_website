import type { Request, Response, NextFunction } from "express";
import express from "express";
import compression from "compression";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { createServer as createViteServer, ViteDevServer } from "vite";
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

  let vite: ViteDevServer | undefined;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  }

  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const url = req.originalUrl;

      const baseTemplatePath = path.resolve("./index.html");

      const template = isProd
        ? await fs.readFile(baseTemplatePath, "utf-8")
        : await vite!.transformIndexHtml(url, await fs.readFile(baseTemplatePath, "utf-8"));

      const html = template.replace(`<!--app-html-->`, "");
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (error) {
      if (vite) vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

createServer();
