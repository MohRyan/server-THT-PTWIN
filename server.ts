import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import indexRouter from "./src/routers";
import swaggerUi from "swagger-ui-express"
import path from "path";
const swaggerDocument = require(path.join(__dirname, "apiDocs.json"));

dotenv.config();

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "src/uploads"))) # untuk menjadikan sebuah folder bisa diakses secara global
app.use(
  cors({
    origin: ["http://localhost:4000", "https://server-tht-ptwin.vercel.app/"], // Sesuaikan origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use('/swagger-ui', express.static(path.join(__dirname, 'swagger-ui')));
app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(indexRouter);

app.get("/", (req, res) => {
  res.send("THT-PTWIN");

});

app.listen(PORT, async () => {
  console.log("🚀 ~ app.listen ~ PORT:", PORT);
});
