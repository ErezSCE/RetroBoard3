// Conditionally import jest-dom matchers for extended assertions if the package is installed.
// This avoids a hard dependency on @testing-library/jest-dom in environments where it may be omitted.
try {
  // Conditionally require jest-dom matchers for extended assertions if the package is installed.
  // This avoids a hard dependency on @testing-library/jest-dom in environments where it may be omitted.
  // Using require ensures the import is synchronous, suitable for Jest's setupFilesAfterEnv.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@testing-library/jest-dom');
} catch (e: any) {
  // Only ignore the error when the module cannot be found; re‑throw otherwise.
  if (e.code !== 'MODULE_NOT_FOUND') {
    throw e;
  }
  // optional dependency not installed
}
