export function roundNumberToNDP(
  value: number,
  significantPlaces: number
): number {
  if (isNaN(value) || significantPlaces < 1) {
    throw new Error("Invalid input");
  }

  const factor = Math.pow(10, significantPlaces);
  return Math.round(value * factor) / factor;
}
