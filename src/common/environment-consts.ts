import { resolve } from "path";
import { config } from "dotenv";
import swaggerDocs from "./swagger.json";

config({ path: resolve(__dirname, "../../.env") });

export const PORT = process.env.PORT || 3000;
export const SWAGGER_DOCS = swaggerDocs;
