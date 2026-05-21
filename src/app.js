import {router as apiRouter} from "./routes/api.routes.js";
import {router as productsRouter} from "./routes/products.routes.js";
import {mdebug} from "./middlewares/debug.middleware.js";
import {notFound, errorHandler} from "./middlewares/errors.middleware.js";
import {mcors} from "./middlewares/mcors.middleware.js";
import express from "express";
import path from "node:path";

const app = express();

// Configurações do EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views")); // Node.js 20.11+


// Middlewares
console.log("public:", path.join(import.meta.dirname, "..", "public"));
app.use(express.static(path.join(import.meta.dirname, "..", "public")));
app.use(express.json()); // Importante para rotas REST

app.use(mcors);
app.use(express.json());
app.use(mdebug);

app.use("/api", apiRouter);
app.use("/api", productsRouter);


// --- ROTA DE VIEW (EJS) ---
app.get("/home", (req, res) => {
  res.render("home"); // Renderiza o esqueleto da página
});

app.get("/test", (req, res) => {
  res.render("test"); // Renderiza o esqueleto da página
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/products", (req, res) => {
  res.render("products"); // o cliente obterá os dados via fetch
});

app.use(notFound);
app.use(errorHandler);

export default app;