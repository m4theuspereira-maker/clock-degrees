import { Router } from "express";
import { controllerFactory, middlewaresFactory } from "./factories/factories";

const routes = Router();

const controller = controllerFactory();
const middlewares = middlewaresFactory();

routes.get("/", (req, res) => res.send("I'm working"));
routes.get(
  "/v1/rest/clock/:hour/:minute",
  middlewares.validateHourParam,
  controller.getDegress
);
routes.get(
  "/v1/rest/clock/:hour",
  middlewares.validateHourParam,
  controller.getDegress
);

export { routes };
