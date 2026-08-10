// In-memory store for columns (mock implementation)
import { randomUUID } from 'crypto';

export interface Column {
  id: string;
  title: string;
  // Additional fields could be added (e.g., sessionId, position)
}

// Simple Map to hold columns keyed by id
const columns = new Map<string, Column>();

/**
 * Retrieve a column by its id.
 */
export function getColumn(id: string): Column | undefined {
  return columns.get(id);
}

/**
 * Create a new column with the given title.
 * Returns the created Column.
 */
export function createColumn(title: string): Column {
  const id = randomUUID();
  const column: Column = { id, title };
  columns.set(id, column);
  return column;
}

/**
 * Update the title of an existing column.
 * Returns the updated column, or undefined if not found.
 */
export function updateColumnTitle(id: string, title: string): Column | undefined {
  const column = columns.get(id);
  if (!column) return undefined;
  column.title = title;
  columns.set(id, column);
  return column;
}

/**
 * Delete a column by id.
 */
export function deleteColumn(id: string): boolean {
  return columns.delete(id);
}

/**
 * Clear all columns – useful for testing.
 */
export function clearColumns(): void {
  columns.clear();
}

export { columns };
