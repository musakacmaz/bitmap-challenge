import { Bitmap } from '../models/bitmap';
import { Pixel } from '../models/pixel';
import { Constants } from '../constants';

/**
 * DistanceCalculator class for the distance calculations.
 * @class
 * */
export class DistanceCalculator {
  /**
   * Returns the distance of nearest white pixel from a pixel that is in a given bitmap.
   *
   * @param {Bitmap} bitmap - bitmap to be searched on
   * @param {Pixel} pixel - pixel to be calculated
   * @returns {number} - distance of nearest white pixel
   *
   * @example
   *     DistanceCalculator.calculateDistanceToTheNearestWhite(bitmap, pixel);
   */
  public static calculateDistanceToTheNearestWhite(bitmap: Bitmap, pixel: Pixel): number {
    if (pixel.getColor() === Constants.PIXEL_COLORS_WHITE) {
      return 0;
    }
    return bitmap
      .getPixels()
      .filter((pixel) => pixel.getColor() === Constants.PIXEL_COLORS_WHITE)
      .reduce((nearestDistance: number, currentPixel: Pixel) => {
        const newDistance: number =
          Math.abs(currentPixel.getLineIndex() - pixel.getLineIndex()) + Math.abs(currentPixel.getColumnIndex() - pixel.getColumnIndex());
        nearestDistance = Math.min(nearestDistance, newDistance);
        return nearestDistance;
      }, Math.max(bitmap.getLineSize(), bitmap.getColumnSize()));
  }
}
