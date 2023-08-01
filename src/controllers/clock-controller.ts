import { Request, Response } from "express";
import { ClockServices } from "../services/clock-services";
import { ok } from "./handlers/handles";
export class ClockController {
  constructor(private readonly clockServices: ClockServices) {}

  getDegress = async (req: Request, res: Response) => {
    const { hour, minute } = req.params as unknown as {
      hour: number;
      minute: number;
    };

    const result = await this.clockServices.calculateDegress(hour, minute);

    return ok(res, result);
  };
}
