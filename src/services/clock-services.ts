import { InternalServerErrorExpection } from "../infra/errors/errors";
import { ResultRepository } from "../infra/repositories/result-repository";

export class ClockServices {
  constructor(private readonly resultRepository: ResultRepository) {}

  async calculateDegress(hour: number, minute: number = 0) {
    try {
      let angularDistance = 0;
      const hourParsed = Number(hour);
      const minuteParsed = Number(minute);

      const result = await this.resultRepository.find(hourParsed, minuteParsed);

      if (!result) {
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

      await this.resultRepository.update(result?.id!, { ...result });

      return { angle: result?.angle! };
    } catch (error) {
      throw new InternalServerErrorExpection();
    }
  }
}
