import { client } from "../config/client/client";
import { ClockController } from "../controllers/clock-controller";
import { ResultRepository } from "../infra/repositories/result-repository";
import { Middlewares } from "../middlewares/validation-middlewares";
import { ClockServices } from "../services/clock-services";

export function controllerFactory() {
  const clockService = new ClockServices(new ResultRepository(client));

  return new ClockController(clockService);
}

export function middlewaresFactory() {
  return new Middlewares();
}
