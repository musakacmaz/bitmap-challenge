import { Bitmap } from '../../../src/models/bitmap';
import { Helper } from '../../helper';

describe('Bitmap Class Tests', () => {
  const bitmap: Bitmap = Helper.seedBitmapData();
  describe('getLineSize', () => {
    it('should be able to return line size of the bitmap', () => {
      expect(bitmap.getLineSize()).toEqual(2);
    });
  });
  describe('getColumnSize', () => {
    it('should be able to return column size of the bitmap', () => {
      expect(bitmap.getColumnSize()).toEqual(2);
    });
  });
  describe('getPixels', () => {
    it('should be able to return pixels of the bitmap', () => {
      expect(bitmap.getPixels()).toHaveLength(4);
    });
  });
});
