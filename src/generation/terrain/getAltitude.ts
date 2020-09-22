import { generatePerlinNoise } from "../../math/generatePerlinNoise";
import { distanceToPotatoHull } from "./potatoHull";

const altitudePerlin0 = generatePerlinNoise(3, 3, 0.14);
const altitudePerlin1 = generatePerlinNoise(3, 3, 0.32);
const altitudePerlin2 = generatePerlinNoise(3, 3, 0.73);

const noise = generatePerlinNoise(3, 3, 0.01);

export const getAltitude = (x: number, y: number) => {
  let h = -0.3;
  h += altitudePerlin0(x + 1.21, y + 1.16) * 0.5 * 0.5;
  h += altitudePerlin1(x + 1.71, y + 1.61) * 0.6 * 0.5;
  h += altitudePerlin2(x + 1.57, y + 1.23) * 0.8 * 0.5;

  const dMax = 0.13;

  const n = (noise(x + 1.2, y + 1.2) + 1) / 2;

  const d = Math.min(
    1,
    distanceToPotatoHull(x, y, dMax * (1 + (n + 1))) / dMax
  );

  return (0.7 * d + h * d) * 0.2;
};
