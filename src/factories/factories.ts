import { ClockController } from "../controllers/clock-controller";
import { Middlewares } from "../middlewares/validation-middlewares";
import { ClockServices } from "../services/clock-services";

export function controllerFactory() {
  return new ClockController(new ClockServices());
}

export function middlewaresFactory() {
  return new Middlewares();
}
