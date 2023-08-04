import { Router } from "express";
import { controllerFactory, middlewaresFactory } from "./factories/factories";


const controller = controllerFactory();
const middlewares = middlewaresFactory();
const routes = Router();

routes.get(
  "/v1/rest/clock/:hour/:minute",
  middlewares.validateHourParam,
  controller.getDegrees
);
routes.get(
  "/v1/rest/clock/:hour",
  middlewares.validateHourParam,
  controller.getDegrees
);

export { routes };
