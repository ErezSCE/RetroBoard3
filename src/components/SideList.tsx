import React from 'react';

export interface ActionItem {
  id: string;
  title: string;
  description?: string;
  ownerName: string;
  dueDate?: string; // ISO string
  done: boolean;
}

interface SideListProps {
  actionItems: ActionItem[];
  /**
   * Called when the done toggle is changed for an item.
   * Provide the item's id and the new done state.
   */
  onToggleDone: (id: string, done: boolean) => void;
}

/**
 * SideList component displays a list of action items with owner, due date,
 * and a checkbox to mark the item as done.
 */
export const SideList: React.FC<SideListProps> = ({ actionItems, onToggleDone }) => {
  const handleChange = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleDone(id, e.target.checked);
  };

  return (
    <aside className="side-list" style={{ width: '250px', padding: '1rem', borderLeft: '1px solid #ddd' }}>
      <h2>Action Items</h2>
      {actionItems.length === 0 ? (
        <p data-testid="empty-message">No action items.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {actionItems.map((item) => (
            <li key={item.id} style={{ marginBottom: '1rem' }} data-testid="action-item">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={handleChange(item.id)}
                  aria-label={`Mark ${item.title} as done`}
                  data-testid="done-toggle"
                />
                <div style={{ marginLeft: '0.5rem' }}>
                  <strong>{item.title}</strong>
                  <div style={{ fontSize: '0.9rem', color: '#555' }}>
                    Owner: {item.ownerName}
                  </div>
                  {item.dueDate && (
                    <div style={{ fontSize: '0.8rem', color: '#777' }}>
                      Due: {new Date(item.dueDate).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default SideList;
