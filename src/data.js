// In-memory data store for sessions
// For simplicity, we store sessions in a Map keyed by UUID string.

const sessions = new Map();

/**
 * Adds a session to the store. Used in tests to set up data.
 * @param {string} id - UUID of the session
 * @param {object} data - Session data object
 */
function addSession(id, data) {
  sessions.set(id, data);
}

/**
 * Retrieves a session by its UUID.
 * @param {string} id - UUID of the session
 * @returns {object|undefined} Session object or undefined if not found
 */
function getSession(id) {
  return sessions.get(id);
}

/**
 * Clears all sessions. Useful for test isolation.
 */
function clearSessions() {
  sessions.clear();
}

module.exports = {
  addSession,
  getSession,
  clearSessions,
};
