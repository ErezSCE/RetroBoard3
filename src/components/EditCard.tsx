import React, { useState } from 'react';

export interface Card {
  id: string;
  content: string;
  authorName: string;
  authorId: string;
}

interface EditCardProps {
  card: Card;
  currentUserId: string;
  /**
   * Called when the card is updated. Receives the updated card object.
   */
  onUpdate: (updatedCard: Card) => void;
  /**
   * Called when the card should be deleted. Receives the card id.
   */
  onDelete: (cardId: string) => void;
}

/**
 * EditCard component allows the owner of a card to edit its content and delete it.
 * Non‑owners only see the static card content.
 */
export const EditCard: React.FC<EditCardProps> = ({ card, currentUserId, onUpdate, onDelete }) => {
  const isOwner = currentUserId === card.authorId;
  const [isEditing, setIsEditing] = useState(false);
  const [draftContent, setDraftContent] = useState(card.content);
  const [draftAuthorName, setDraftAuthorName] = useState(card.authorName);

  const handleSave = () => {
    const updated: Card = {
      ...card,
      content: draftContent,
      authorName: draftAuthorName,
    };
    onUpdate(updated);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraftContent(card.content);
    setDraftAuthorName(card.authorName);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Simple confirm dialog – can be replaced with a custom modal later
    // eslint-disable-next-line no-restricted-globals
    if (window.confirm('Are you sure you want to delete this card?')) {
      onDelete(card.id);
    }
  };

  return (
    <div data-testid="edit-card">
      {isOwner && !isEditing && (
        <button type="button" onClick={() => setIsEditing(true)} data-testid="edit-button">
          Edit
        </button>
      )}
      {isOwner && (
        <button type="button" onClick={handleDelete} data-testid="delete-button">
          Delete
        </button>
      )}

      {isEditing ? (
        <div data-testid="edit-form">
          <label>
            Content:
            <textarea
              value={draftContent}
              onChange={e => setDraftContent(e.target.value)}
              data-testid="content-input"
            />
          </label>
          <label>
            Author Name:
            <input
              type="text"
              value={draftAuthorName}
              onChange={e => setDraftAuthorName(e.target.value)}
              data-testid="author-input"
            />
          </label>
          <button type="button" onClick={handleSave} data-testid="save-button">
            Save
          </button>
          <button type="button" onClick={handleCancel} data-testid="cancel-button">
            Cancel
          </button>
        </div>
      ) : (
        <div data-testid="card-view">
          <p data-testid="card-content">{card.content}</p>
          <p data-testid="card-author">{card.authorName}</p>
        </div>
      )}
    </div>
  );
};
