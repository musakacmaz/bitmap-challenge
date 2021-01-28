import readline from 'readline';
import { Parser } from './utilities/parser';
import { DistanceCalculator } from './utilities/distanceCalculator';

/**
 * Main function of the application.
 * * Reads the description of the bitmap from the standard input
 * * For each pixel, computes the distance to the nearest white
 * * Writes the results to the standard output
 */
async function main(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  const parser = new Parser();

  rl.on('line', (line) => {
    try {
      parser.evaluateLine(line.trim());
    } catch (error) {
      throw new Error(`Line parsing error: ${error}`);
    }
  });

  rl.on('close', () => {
    const bitmaps = parser.createBitmaps();
    console.time('Brute Force Method');
    bitmaps.forEach((bitmap) => {
      const pixels = bitmap.getPixels();
      for (let i = 0; i < bitmap.getLineSize(); i++) {
        const outputLine = pixels
          .filter((pixel) => pixel.getLineIndex() === i)
          .map((pixel) => {
            return DistanceCalculator.calculateDistanceToTheNearestWhite(bitmap, pixel);
          })
          .join(' ');
        process.stdout.write(outputLine + '\n');
      }
      process.stdout.write('\n');
    });
    console.timeEnd('Brute Force Method');
    process.stdout.write('\n');
    console.time('Breadth First Search Method');
    bitmaps.forEach((bitmap) => {
      const distances = DistanceCalculator.calculateDistanceToTheNearestWhiteBFS(bitmap);
      for (let i = 0; i < bitmap.getLineSize(); i++) {
        for (let j = 0; j < bitmap.getColumnSize(); j++) {
          process.stdout.write(distances[i][j] + ' ');
        }
        process.stdout.write('\n');
      }
      process.stdout.write('\n');
    });
    console.timeEnd('Breadth First Search Method');
  });
}

(async () => {
  await main();
})();
