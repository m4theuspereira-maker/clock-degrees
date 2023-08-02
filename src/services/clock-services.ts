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
        // Calcular a distância angular
        const hourAngle = (hourParsed % 12) * 30; // Cada hora tem 30 graus (360/12) e cada minuto adicional acrescenta 0.5 graus.
        const minuteAngle = minuteParsed * 6; // Cada minuto tem 6 graus (360/60).

        // Calcular a diferença absoluta entre os ângulos
        angularDistance = Math.abs(hourAngle - minuteAngle);

        // Verificar se a distância angular é maior que 180 graus (para sempre obter o menor ângulo)
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
