import {router as apiRouter} from "./routes/api.routes.js";
import {mdebug} from "./middlewares/debug.middleware.js";
import {notFound, errorHandler} from "./middlewares/errors.middleware.js";
import {mcors} from "./middlewares/mcors.middleware.js";
import express from "express";
import path from "node:path";

const app = express();

app.use(mcors);
app.use(express.json());
app.use(mdebug);

app.use("/api", apiRouter);
app.use(notFound);
app.use(errorHandler);

// Middlewares
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.json()); // Importante para rotas REST

// Configurações do EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views")); // Node.js 20.11+

// --- ROTA DE VIEW (EJS) ---
app.get("/home", (req, res) => {
  res.render("home"); // Renderiza o esqueleto da página
});

export default app;