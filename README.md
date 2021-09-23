# Bitmap Challenge

## 🎯 Target

There is given a rectangular bitmap of size n\*m. Each pixel of the bitmap is either white or
black, but at least one is white. The pixel in i-th line and j-th column is called the pixel (i,j). The
distance between two pixels p1=(i1,j1) and p2=(i2,j2) is defined as d(p1,p2)=|i1-i2|+|j1-j2|.

The aim of the program is;

- read the description of the bitmap from the standard input
- for each pixel, computes the distance to the nearest white
- writes the results to the standard output

## ⚙️ Prerequests

You will need [Node.js](https://nodejs.org) and [TypeScript](https://www.typescriptlang.org) installed on your system.

## 🚀 Setup & Run

Get the code by either cloning this repository using git or download

```
git clone https://github.com/musakacmaz/dott-assignment.git
```

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```

To run tests:

```
npm run test
```

To fix lint:

```
npm run lint-fix
```

Formatting:

```
npm run prettier-format
```

You can run the program with:

```
cat input.txt | npm run start
```

## 🎉 Result

The program should read bitmaps from the given [text document](https://github.com/musakacmaz/dott-assignment/blob/master/input.txt), calculate the distances with using both brute force and [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) algorithms and print the results. For example;
Input:

```shell
1 // number of test cases
3 4 // line x column sizes
0001 // pixels - 0: black, 1: white
0011
0110
```

Output:

```shell
3 2 1 0 // distances to the nearest white pixel
2 1 0 0
1 0 0 1

Breadth First Search Method: 1.454ms
```

## ⚠️ Limitations

- The number of test cases t must be in the range of (1≤t≤1000)
- The line and column sizes n x m must be in the ranges of (1 <= n <= 182), (1 <= m <=182)

## ⚖️ License
[MIT © musa kaçmaz](https://musakacmaz.mit-license.org)
