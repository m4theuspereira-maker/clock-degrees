import { InternalServerErrorExpection } from "../infra/errors/errors";
import { ResultRepository } from "../infra/repositories/result-repository";

export class ClockServices {
  constructor(private readonly resultRepository: ResultRepository) {}

  async calculateDegrees(hour: number, minute: number = 0) {
    try {
      const hourParsed = Number(hour);
      const minuteParsed = Number.isNaN(Number(minute)) ? 0 : Number(minute);

      const result = await this.resultRepository.find(hourParsed, minuteParsed);

      if (!result) {
        return this.claculateAngularDistance(hourParsed, minuteParsed);
      }

      await this.resultRepository.update(result?.id!, { lastRequest: new Date()});

      return { angle: result?.angle! };
    } catch (error) {
      throw new InternalServerErrorExpection(error);
    }
  }

  private async claculateAngularDistance(
    hourParsed: number,
    minuteParsed: number
  ) {
    let angularDistance = 0;

    const hourAngle = (hourParsed % 12) * 30;
    const minuteAngle = minuteParsed * 6;

    angularDistance = Math.abs(hourAngle - minuteAngle);

    if (angularDistance > 180) {
      angularDistance = 360 - angularDistance;
    }

    const angularDistanceRounded = Math.round(angularDistance);

    await this.resultRepository.create({
      hour: hourParsed,
      minute: minuteParsed,
      angle: angularDistanceRounded
    });

    return { angle: angularDistanceRounded };
  }
}
