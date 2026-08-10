/**
 * Edit a card object with given updates.
 * Returns a new card object without mutating the original.
 * @param {Object} card - Original card object.
 * @param {Object} updates - Fields to update.
 * @returns {Object} New card object.
 */
function editCard(card, updates) {
  if (typeof card !== 'object' || card === null) {
    throw new TypeError('card must be a non-null object');
  }
  if (typeof updates !== 'object' || updates === null) {
    throw new TypeError('updates must be a non-null object');
  }
  // shallow merge, preserving original card immutability
  return { ...card, ...updates };
}

module.exports = { editCard };
