import { Bitmap } from '../src/models/bitmap';
import { Pixel } from '../src/models/pixel';

export class Helper {
  static seedBitmapData(): Bitmap {
    const pixels: Pixel[] = [new Pixel(0, 0, 0), new Pixel(0, 1, 0), new Pixel(1, 0, 0), new Pixel(1, 1, 1)];
    const bitmap: Bitmap = new Bitmap(2, 2, pixels);
    return bitmap;
  }
}
