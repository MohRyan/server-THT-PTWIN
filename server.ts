import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import indexRouter from "./src/routers";
import swaggerUi from "swagger-ui-express"
const swaggerDocument = require('./apiDocs.json');

dotenv.config();

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "src/uploads"))) # untuk menjadikan sebuah folder bisa diakses secara global
app.use(cors());

app.use(indexRouter);

app.get("/", (req, res) => {
  res.send("THT-PTWIN");
});

app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, async () => {
  console.log("🚀 ~ app.listen ~ PORT:", PORT);
});
