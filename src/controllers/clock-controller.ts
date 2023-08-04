import { Request, Response } from "express";
import { ClockServices } from "../services/clock-services";
import { ok, serverError } from "./handlers/handles";
export class ClockController {
  constructor(private readonly clockServices: ClockServices) {}

  getDegrees = async (req: Request, res: Response) => {
    try {
      const { hour, minute } = req.params as unknown as {
        hour: number;
        minute: number;
      };

      const result = await this.clockServices.calculateDegrees(hour, minute);

      return ok(res, result);
    } catch (error) {
      return serverError(res, error);
    }
  };
}
