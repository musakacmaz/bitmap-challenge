import { Constants } from '../constants';
import { Bitmap } from '../models/bitmap';
import { Pixel } from '../models/pixel';
import { invalidNumberOfTestCasesError } from '../errors';

/**
 * Interface for classes that describe a bitmap.
 * @interface
 */
interface BitmapDescription {
  lineSize: number;
  columnSize: number;
  pixels: string;
}

/**
 * Parser class for the parsing operations.
 * @class
 * */
export class Parser {
  public bitmapDescriptions: Array<BitmapDescription>;
  public numberOfTestCases: number | undefined;

  constructor() {
    this.bitmapDescriptions = [];
  }

  /**
   * Evaluates the incoming line, constructs bitmap descriptions and returns the current state.
   *
   * @param {line} string - string to be evaluated
   * @returns {void} -
   *
   * @example
   *     Parser.evaluateLine('1010');
   */
  public evaluateLine(line: string): null {
    if (!this.numberOfTestCases) {
      if (!(Number(line) >= Constants.NUMBER_OF_TEST_CASES_MIN_VALUE && Number(line) <= Constants.NUMBER_OF_TEST_CASES_MAX_VALUE)) {
        throw invalidNumberOfTestCasesError();
      }
      this.numberOfTestCases = Number(line);
      return null;
    }

    if (line === '') {
      return null;
    }

    if (line.includes(' ')) {
      const [lineSize, columnSize] = line.split(' ');
      const newBitmapDescription: BitmapDescription = {
        lineSize: Number(lineSize),
        columnSize: Number(columnSize),
        pixels: ''
      };
      this.bitmapDescriptions.push(newBitmapDescription);
      return null;
    } else {
      if (this.bitmapDescriptions[this.bitmapDescriptions.length - 1].pixels === '') {
        this.bitmapDescriptions[this.bitmapDescriptions.length - 1].pixels = line;
      } else {
        this.bitmapDescriptions[this.bitmapDescriptions.length - 1].pixels += ',' + line;
      }
      return null;
    }
  }

  /**
   * Creates and returns bitmaps from bitmap descriptions.
   *
   * @returns {Bitmap[]} bitmaps - created bitmaps
   *
   * @example
   *     Parser.createBitmaps();
   */
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
