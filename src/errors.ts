enum ErrorCode {
  InvalidNumberOfTestCases,
  InvalidValueOfBitmapSize,
  WhitePixelNotFoundError
}

interface Failure<FailureType extends number> {
  type: FailureType;
  reason: string;
}

export const invalidNumberOfTestCasesError = (): Failure<ErrorCode.InvalidNumberOfTestCases> => ({
  type: ErrorCode.InvalidNumberOfTestCases,
  reason: 'Invalid number of test cases!'
});

export const invalidValueOfBitmapSize = (): Failure<ErrorCode.InvalidValueOfBitmapSize> => ({
  type: ErrorCode.InvalidValueOfBitmapSize,
  reason: 'Invalid value of bitmap size!'
});

export const whitePixelNotFoundError = (): Failure<ErrorCode.WhitePixelNotFoundError> => ({
  type: ErrorCode.WhitePixelNotFoundError,
  reason: 'White pixel not found!'
});
