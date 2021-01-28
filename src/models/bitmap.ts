import { Pixel } from './pixel';

/**
 * Class representing a bitmap.
 * @class
 */
export class Bitmap {
  private lineSize: number;
  private columnSize: number;
  private pixels: Pixel[];

  /**
   * @constructor Create a bitmap.
   * @param {number} lineSize - The size of lines.
   * @param {number} columnSize - The size of columns.
   * @param {Pixel[]} pixels - The pixels that bitmap contains.
   */
  constructor(lineSize: number, columnSize: number, pixels: Pixel[]) {
    this.lineSize = lineSize;
    this.columnSize = columnSize;
    this.pixels = pixels;
  }

  /**
   * Returns the line size of the bitmap.
   *
   * @returns {number} lineSize - An integer
   *
   * @example
   *     bitmap.getLineSize();
   */
  public getLineSize(): number {
    return this.lineSize;
  }

  /**
   * Returns the column size of the bitmap.
   *
   * @returns {number} columnSize - An integer
   *
   * @example
   *     bitmap.getColumnSize();
   */
  public getColumnSize(): number {
    return this.columnSize;
  }

  /**
   * Returns the pixels that bitmap contains.
   *
   * @returns {Pixel[]} pixels - An array of pixels
   *
   * @example
   *     bitmap.getPixels();
   */
  public getPixels(): Pixel[] {
    return this.pixels;
  }

  /**
   * Sets the color of given pixel that bitmap contains.
   *
   * @param {Pixel} pixel - A pixel object
   * @param {number} color - A color value
   *
   * @example
   *     bitmap.setPixelColor(pixel, 1);
   */
  public setPixelColor(pixel: Pixel, color: number): void {
    const foundPixelIndex = this.pixels.findIndex((p) => p.getLineIndex() === pixel.getLineIndex() && p.getColumnIndex() === pixel.getColumnIndex());
    this.pixels[foundPixelIndex].setColor(color);
  }
}
