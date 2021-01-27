import { Pixel } from '../../../src/models/pixel';

describe('Pixel Class Tests', () => {
  const pixel: Pixel = new Pixel(0, 1, 0);
  describe('getLineIndex', () => {
    it('should be able to return the i-axis index of the pixel', () => {
      expect(pixel.getLineIndex()).toEqual(0);
    });
  });
  describe('getColumnIndex', () => {
    it('should be able to return the j-axis index of the pixel', () => {
      expect(pixel.getColumnIndex()).toEqual(1);
    });
  });
  describe('getColor', () => {
    it('should be able to return the color value of the pixel', () => {
      expect(pixel.getColor()).toEqual(0);
    });
  });
});
