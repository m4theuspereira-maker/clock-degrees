import { logger } from "../../config/logger";

export class InternalServerErrorExpection implements Error {
  name: string;
  message: string;

  constructor(error:unknown) {
    logger.error(error)
    this.name = "InternalServerErrorExpection";
    this.message = INTERNAL_SERVER_ERROR_MESSAGE;
  }
}
export const INTERNAL_SERVER_ERROR_MESSAGE =
  "Internal Server Error, contact support to get more informations";

