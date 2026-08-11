// Conditionally import jest-dom matchers for extended assertions if the package is installed.
// This avoids a hard dependency on @testing-library/jest-dom in environments where it may be omitted.
(async () => {
  try {
    await import('@testing-library/jest-dom');
  } catch (e: any) {
    // Only ignore the error when the module cannot be found; re‑throw otherwise.
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
    // optional dependency not installed
  }
})();
