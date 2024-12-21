"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./src/routers"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const path_1 = __importDefault(require("path"));
const swaggerDocument = require(path_1.default.join(__dirname, "apiDocs.json"));
dotenv_1.default.config();
const PORT = 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "src/uploads"))) # untuk menjadikan sebuah folder bisa diakses secara global
app.use((0, cors_1.default)({
    origin: ["http://localhost:4000", "https://server-tht-ptwin.vercel.app/"], // Sesuaikan origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use('/swagger-ui', express_1.default.static(path_1.default.join(__dirname, 'swagger-ui')));
app.use("/apiDocs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use(routers_1.default);
app.get("/", (req, res) => {
    res.send("THT-PTWIN");
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🚀 ~ app.listen ~ PORT:", PORT);
}));
