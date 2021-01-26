enum ErrorCode {
  InvalidNumberOfTestCases
}

interface Failure<FailureType extends number> {
  type: FailureType;
  reason: string;
}

export const invalidNumberOfTestCasesError = (): Failure<ErrorCode.InvalidNumberOfTestCases> => ({
  type: ErrorCode.InvalidNumberOfTestCases,
  reason: 'Invalid number of test cases!'
});
