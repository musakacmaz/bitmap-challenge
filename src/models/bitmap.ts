import { Pixel } from './pixel';

export class Bitmap {
  private lineSize: number;
  private columnSize: number;
  private pixels: Pixel[];

  constructor(lineSize: number, columnSize: number, pixels: Pixel[]) {
    this.lineSize = lineSize;
    this.columnSize = columnSize;
    this.pixels = pixels;
  }
}
