import { resolve } from "path";
import { config } from "dotenv";
import swaggerDocs from "./swagger.json";

config({ path: resolve(__dirname, "../../.env") });

export const PORT = process.env.PORT || 3000;
export const SWAGGER_DOCS = swaggerDocs;
export const NODE_ENV = process.env.NODE_ENV;
