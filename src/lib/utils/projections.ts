import type { DataPoint } from "lib/types/Projections";

export const calculateAverageProjection = (
  capital: number,
  averagePip: number,
  days: number
) => {
  let currentCapital = capital;
  let lotSize = Math.floor((currentCapital / 830) * 100) / 100;
  let currentGain = 0;

  const dailyDataPoint: DataPoint[] = [];
  let point = 1;
  while (point <= days) {
    currentGain = Math.round(lotSize * (averagePip - 30) * 100) / 100;
    currentCapital = Math.round((currentCapital + currentGain) * 100) / 100;
    lotSize = Math.floor((currentCapital / 830) * 100) / 100;
    dailyDataPoint.push({
      label: "Day " + point,
      capital: currentCapital,
      gain: currentGain,
    });
    point++;
  }

  return dailyDataPoint;
};
