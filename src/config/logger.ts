import winston from "winston";
import { NODE_ENV } from "../common/environment-consts";

export const logger = winston.createLogger({
  format: winston.format.combine(winston.format.errors({ stack: true })),
  transports: [
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error"
    }),
  ]
});

if (NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}
