import { NextFunction, Request, Response } from "express";
import { badrequestError } from "../controllers/handlers/handles";

export class Middlewares {
  validateHourParam = (req: Request, res: Response, next: NextFunction) => {
    const hour = Number(req.params.hour);
    const minuteParsed = Number(req.params.minute)
    const minute = Number.isNaN(minuteParsed)
      ? 0
      : Number(req.params.minute);

    if (!Number.isInteger(hour) || !Number.isInteger(minute)) {
      return badrequestError(res, `Only intiger numbers are allowed`);
    }

    if (hour < 1 || hour > 12 || minute < 0 || minute > 59) {
      return badrequestError(
        res,
        `Invalid hour or minute param! the allowed pattern is: min 1, max 12 to hours and min 0, max 59 to minutes`
      );
    }

    next();
  };
}
