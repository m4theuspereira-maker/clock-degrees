import { PrismaClient } from "@prisma/client";
import { InternalServerErrorExpection } from "../errors/errors";
import {
  ICreateResultDto,
  IRepository,
  IResult,
  IUpdatePayload
} from "./interfaces/repository-interfaces";

export class ResultRepository implements IRepository {
  constructor(private readonly client: PrismaClient) {}

  async create(result: ICreateResultDto): Promise<IResult> {
    try {
      return this.client.result.create({ data: result });
    } catch (error) {
      throw new InternalServerErrorExpection(error);
    }
  }

  async update(id: string, updatePayload: IUpdatePayload): Promise<IResult> {
    try {
      return this.client.result.update({
        where: { id },
        data: { ...updatePayload }
      });
    } catch (error) {
      throw new InternalServerErrorExpection(error);
    }
  }
  async find(hour: number, minute: number): Promise<IResult | null> {
    try {
      return this.client.result.findFirst({ where: { hour, minute } });
    } catch (error) {
      throw new InternalServerErrorExpection(error);
    }
  }
}
