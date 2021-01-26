/**
 * Class representing a pixel.
 * @class
 */
export class Pixel {
  private i: number;
  private j: number;
  private color: number;

  /**
   * Create a pixel.
   * @param {number} i - i-axis index of the pixel.
   * @param {number} j - j-axis index of the pixel.
   * @param {number} color - color of the pixel.
   */
  constructor(i: number, j: number, color: number) {
    this.i = i;
    this.j = j;
    this.color = color;
  }

  /**
   * Returns the line index of the pixel.
   *
   * @returns {number} i - An integer
   *
   * @example
   *     pixel.getLineIndex();
   */
  public getLineIndex(): number {
    return this.i;
  }

  /**
   * Returns the column index of the pixel.
   *
   * @returns {number} j - An integer
   *
   * @example
   *     pixel.getColumnIndex();
   */
  public getColumnIndex(): number {
    return this.j;
  }

  /**
   * Returns the color of the pixel.
   *
   * @returns {number} j - An integer
   *
   * @example
   *     pixel.getColor();
   */
  public getColor(): number {
    return this.color;
  }
}
