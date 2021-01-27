import { Parser } from '../../../src/utilities/parser';
import { invalidNumberOfTestCasesError, invalidValueOfBitmapSize } from '../../../src/errors';
import { Bitmap } from '../../../src/models/bitmap';

describe('Parser Class Tests', () => {
  describe('evaluateLine', () => {
    it('should be able to evaluate the incoming line and construct bitmap descriptions', () => {
      const parser = new Parser();
      parser.evaluateLine('1');
      parser.evaluateLine('');
      parser.evaluateLine('3 4');
      parser.evaluateLine('0001');
      parser.evaluateLine('0011');
      parser.evaluateLine('0110');
      expect(parser.numberOfTestCases).toEqual(1);
      expect(parser.bitmapDescriptions[0].lineSize).toEqual(3);
      expect(parser.bitmapDescriptions[0].columnSize).toEqual(4);
      expect(parser.bitmapDescriptions[0].pixels).toBe('0001,0011,0110');
    });
    it('should throw err when an invalid number of test cases come from the input', () => {
      const parser = new Parser();
      try {
        parser.evaluateLine('-1');
      } catch (error) {
        expect(error.type).toEqual(invalidNumberOfTestCasesError().type);
        expect(error.reason).toBe(invalidNumberOfTestCasesError().reason);
      }
    });
    it('should throw err when an invalid value of bitmap size come from the input', () => {
      const parser = new Parser();
      parser.evaluateLine('1');
      parser.evaluateLine('');
      try {
        parser.evaluateLine('3 183');
      } catch (error) {
        console.log('ERR: ', error);
        expect(error.type).toEqual(invalidValueOfBitmapSize().type);
        expect(error.reason).toBe(invalidValueOfBitmapSize().reason);
      }
    });
  });

  describe('createBitmaps', () => {
    it('should be able to create and return bitmap as described', () => {
      const parser = new Parser();
      parser.evaluateLine('1');
      parser.evaluateLine('');
      parser.evaluateLine('3 4');
      parser.evaluateLine('0001');
      parser.evaluateLine('0011');
      parser.evaluateLine('0110');
      const bitmap: Bitmap[] = parser.createBitmaps();
      expect(bitmap[0].getLineSize()).toEqual(3);
      expect(bitmap[0].getColumnSize()).toEqual(4);
      expect(bitmap[0].getPixels()).toHaveLength(12);
    });
  });
});
