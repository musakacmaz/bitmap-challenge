import { Constants } from '../constants';
import { Bitmap } from '../models/bitmap';
import { Pixel } from '../models/pixel';

interface BitmapDescription {
  lineSize: number;
  columnSize: number;
  pixels: string;
}

export class Parser {
  private bitmapDescriptions: Array<BitmapDescription>;
  private numberOfTestCases: number | undefined;

  constructor() {
    this.bitmapDescriptions = [];
  }

  /**
   * static name
   */
  public evaluateLine(line: string): void {
    if (!this.numberOfTestCases) {
      if (!(Number(line) >= Constants.NUMBER_OF_TEST_CASES_MIN_VALUE && Number(line) <= Constants.NUMBER_OF_TEST_CASES_MAX_VALUE)) {
        throw new Error('Invalid number of test cases!');
      }
      this.numberOfTestCases = Number(line);
      return;
    }

    if (line === '') {
      return;
    }

    if (line.includes(' ')) {
      const [lineSize, columnSize] = line.split(' ');
      const newBitmapDescription = {
        lineSize: Number(lineSize),
        columnSize: Number(columnSize),
        pixels: ''
      };
      this.bitmapDescriptions.push(newBitmapDescription);
      return;
    } else {
      if (this.bitmapDescriptions[this.bitmapDescriptions.length - 1].pixels === '') {
        this.bitmapDescriptions[this.bitmapDescriptions.length - 1].pixels = line;
      } else {
        this.bitmapDescriptions[this.bitmapDescriptions.length - 1].pixels += ',' + line;
      }
      return;
    }
  }

  public createBitmaps(): Bitmap[] {
    const bitmaps: Bitmap[] = [];
    this.bitmapDescriptions.forEach((bitmapDescription: BitmapDescription) => {
      const { lineSize, columnSize, pixels: stringPixels } = bitmapDescription;
      const pixels: Pixel[] = [];
      const lines = stringPixels.split(',');
      for (let i = 0; i < lineSize; i++) {
        for (let j = 0; j < columnSize; j++) {
          const pixel = new Pixel(i, j, Number(lines[i].charAt(j)));
          pixels.push(pixel);
        }
      }
      const bitmap = new Bitmap(lineSize, columnSize, pixels);
      bitmaps.push(bitmap);
    });
    return bitmaps;
  }
}
