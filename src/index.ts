import { parse } from 'path';
import readline from 'readline';
import { Parser } from './utils/parser';

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  const parser = new Parser();

  rl.on('line', (line) => {
    try {
      parser.evaluateLine(line.trim());
    } catch (error) {
      throw new Error(error);
    }
  });
  rl.on('close', () => {
    const bitmaps = parser.createBitmaps();
    // console.log(bitmaps);
  });
}

(async () => {
  await main();
})();
