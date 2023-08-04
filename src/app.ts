import express, { json, urlencoded } from "express";
import cors from "cors";
import { routes } from "./routes";
import swaggerUi from "swagger-ui-express";
import { SWAGGER_DOCS } from "./common/environment-consts";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/api", swaggerUi.serve, swaggerUi.setup(SWAGGER_DOCS));
app.use(routes);

export { app };
