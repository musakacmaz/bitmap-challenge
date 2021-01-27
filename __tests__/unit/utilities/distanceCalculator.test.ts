import { DistanceCalculator } from '../../../src/utilities/distanceCalculator';
import { Bitmap } from '../../../src/models/bitmap';
import { Pixel } from '../../../src/models/pixel';
import { Helper } from '../../helper';

describe('DistanceCalculator Class Tests', () => {
  const bitmap: Bitmap = Helper.seedBitmapData();
  const targetBlackPixel: Pixel = new Pixel(0, 0, 0);
  const targetWhitePixel: Pixel = new Pixel(1, 1, 1);
  describe('calculateDistanceToTheNearestWhite', () => {
    it('should be able to return the distance of nearest white pixel from a pixel that is in a given bitmap', () => {
      expect(DistanceCalculator.calculateDistanceToTheNearestWhite(bitmap, targetBlackPixel)).toEqual(2);
    });
    it('should be able to return 0 if the given pixel is already white', () => {
      expect(DistanceCalculator.calculateDistanceToTheNearestWhite(bitmap, targetWhitePixel)).toEqual(0);
    });
  });
});
