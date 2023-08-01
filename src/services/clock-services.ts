export class ClockServices {
  calculateDegress(hour: number, minute: number = 0) {

    // Calcular a distância angular
    const hourAngle = (hour % 12) * 30 + minute * 0.6; // Cada hora tem 30 graus (360/12) e cada minuto adicional acrescenta 0.5 graus.
    const minuteAngle = minute * 6; // Cada minuto tem 6 graus (360/60).

    // Calcular a diferença absoluta entre os ângulos
    let angularDistance = Math.abs(hourAngle - minuteAngle);

    // Verificar se a distância angular é maior que 180 graus (para sempre obter o menor ângulo)
    if (angularDistance > 180) {
      angularDistance = 360 - angularDistance;
    }

    return { angle: Math.round(angularDistance) };
  }
}
