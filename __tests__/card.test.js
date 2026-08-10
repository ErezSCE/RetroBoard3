const { editCard } = require('../src/card');

describe('editCard', () => {
  test('returns a new object with updated fields without mutating original', () => {
    const original = { id: 1, content: 'Original', author: 'Alice' };
    const updates = { content: 'Updated', extra: 'field' };
    const result = editCard(original, updates);

    // original unchanged
    expect(original).toEqual({ id: 1, content: 'Original', author: 'Alice' });
    // result has merged fields
    expect(result).toEqual({ id: 1, content: 'Updated', author: 'Alice', extra: 'field' });
    // result is a different reference
    expect(result).not.toBe(original);
  });

  test('throws TypeError when card is not an object', () => {
    expect(() => editCard(null, {})).toThrow(TypeError);
    expect(() => editCard(42, {})).toThrow(TypeError);
  });

  test('throws TypeError when updates is not an object', () => {
    expect(() => editCard({}, null)).toThrow(TypeError);
    expect(() => editCard({}, 5)).toThrow(TypeError);
  });
});
