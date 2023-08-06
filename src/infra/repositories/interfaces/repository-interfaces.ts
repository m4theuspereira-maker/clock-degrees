export interface IRepository {
  create(input: ICreateResultDto): Promise<IResult>;

  update(id: string, updatePayload: IUpdatePayload): Promise<IResult>;

  find(hour: number, minute?: number): Promise<IResult | null>;
}

export interface ICreateResultDto {
  hour: number;
  minute: number;
  angle: number;
}

export interface IUpdatePayload {
  hour?: number;
  minute?: number;
  angle?: number;
  lastRequest?: Date;
}

export interface IResult extends ICreateResultDto {
  id: string;
  date: Date;
  lastRequest: Date | null;
}
