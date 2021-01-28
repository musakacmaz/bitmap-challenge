import { Bitmap } from '../models/bitmap';
import { Pixel } from '../models/pixel';
import { Constants } from '../constants';
import { whitePixelNotFoundError } from '../errors';

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
  /**
   * Returns the distances of nearest white pixels for each pixel that is in the given bitmap using breadth-first search algorithm.
   *
   * @param {Bitmap} bitmap - bitmap to be searched on
   * @returns {number[][]} distances - distances of nearest white pixel
   *
   * @example
   *     DistanceCalculator.calculateDistanceToTheNearestWhiteBFS(bitmap);
   */
  public static calculateDistanceToTheNearestWhiteBFS(bitmap: Bitmap): number[][] {
    const queue: Pixel[] = [];
    const distances: number[][] = [[], []];

    bitmap.getPixels().forEach((pixel) => {
      if (pixel.getColor() === Constants.PIXEL_COLORS_WHITE) {
        queue.push(pixel);
      }
    });

    for (let i = 0; i < bitmap.getLineSize(); i++) {
      distances[i] = [];
      for (let j = 0; j < bitmap.getColumnSize(); j++) {
        distances[i][j] = 0;
      }
    }

    let distance = 0;
    while (queue.length !== 0) {
      let queueSize = queue.length;
      while (queueSize--) {
        const whitePixel = queue.shift();

        if (!whitePixel) {
          throw whitePixelNotFoundError();
        }

        distances[whitePixel.getLineIndex()][whitePixel.getColumnIndex()] = distance;

        const upperNeighborPixel = bitmap
          .getPixels()
          .find((pixel) => pixel.getLineIndex() + 1 === whitePixel.getLineIndex() && pixel.getColumnIndex() === whitePixel.getColumnIndex());
        if (upperNeighborPixel && upperNeighborPixel.getColor() === Constants.PIXEL_COLORS_BLACK) {
          bitmap.setPixelColor(upperNeighborPixel, Constants.PIXEL_COLORS_WHITE);
          queue.push(upperNeighborPixel);
        }

        const lowerNeighborPixel = bitmap
          .getPixels()
          .find((pixel) => pixel.getLineIndex() - 1 === whitePixel.getLineIndex() && pixel.getColumnIndex() === whitePixel.getColumnIndex());
        if (lowerNeighborPixel && lowerNeighborPixel.getColor() === Constants.PIXEL_COLORS_BLACK) {
          bitmap.setPixelColor(lowerNeighborPixel, Constants.PIXEL_COLORS_WHITE);
          queue.push(lowerNeighborPixel);
        }
        const leftNeighborPixel = bitmap
          .getPixels()
          .find((pixel) => pixel.getLineIndex() === whitePixel.getLineIndex() && pixel.getColumnIndex() + 1 === whitePixel.getColumnIndex());
        if (leftNeighborPixel && leftNeighborPixel.getColor() === Constants.PIXEL_COLORS_BLACK) {
          bitmap.setPixelColor(leftNeighborPixel, Constants.PIXEL_COLORS_WHITE);
          queue.push(leftNeighborPixel);
        }

        const rightNeighborPixel = bitmap
          .getPixels()
          .find((pixel) => pixel.getLineIndex() === whitePixel.getLineIndex() && pixel.getColumnIndex() - 1 === whitePixel.getColumnIndex());
        if (rightNeighborPixel && rightNeighborPixel.getColor() === Constants.PIXEL_COLORS_BLACK) {
          bitmap.setPixelColor(rightNeighborPixel, Constants.PIXEL_COLORS_WHITE);
          queue.push(rightNeighborPixel);
        }
      }
      distance++;
    }
    return distances;
  }
}
