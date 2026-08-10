# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-10T23:34:29.620Z

---

## Test Plan

{
  "scope": "All acceptance criteria from user stories are covered by the test items below. No uncovered criteria remain.",
  "unit": [
    {
      "target": "SessionController.createSession",
      "description": "Ensures a session is persisted and a UUID link is returned",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "SessionLinkComponent",
      "description": "Renders the shareable link that navigates to the session page",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "SessionService.loadSession",
      "description": "Loads session data without requiring authentication",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "BoardComponent",
      "description": "Renders default columns on board load",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "CardService.addCard",
      "description": "Persists a new card and triggers a socket event",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "CardService.addCard",
      "description": "Ensures the new card is stored and visible to others via real‑time update",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "ColumnService.renameColumn",
      "description": "Renames a column and persists the change",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "ColumnService.addColumn",
      "description": "Adds a new column and persists it",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "ColumnService.deleteColumn",
      "description": "Deletes a column and either removes or prompts re‑assignment of its cards",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "CardService.editCard",
      "description": "Allows the card creator to edit text and author and persists changes",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "CardService.deleteCard",
      "description": "Allows the card creator to delete their own card and propagates removal",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "SocketEventEmitter.emitCardChange",
      "description": "Emits Socket.io events for create/move/edit actions",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "target": "ReconnectionHandler.handleReconnect",
      "description": "Fetches latest session state and applies missed events without duplication",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "ReconnectionHandler.handleReconnect",
      "description": "Ensures no duplicate events are applied after reconnection",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "VoteService.castVote",
      "description": "Enforces per‑user vote limit per session",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "VoteService.updateVoteCounts",
      "description": "Updates displayed vote counts in real time",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "ClusterService.createCluster",
      "description": "Creates a cluster with a title",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "ClusterComponent.toggleExpand",
      "description": "Expands or collapses a cluster UI element",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "ActionItemService.convertToActionItem",
      "description": "Converts a card or cluster into an action item with required fields",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "ActionItemListComponent",
      "description": "Renders action items in side list after conversion",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "ActionItemListComponent",
      "description": "Displays all action items persistently",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "target": "ActionItemService.markDone",
      "description": "Marks an action item as done and broadcasts status change",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "OfflineQueue.processQueue",
      "description": "Sends add/edit card operations via REST when WebSocket is down",
      "framework": "Jest",
      "storyId": "US-012",
      "acIndex": 0
    },
    {
      "target": "SyncManager.reconcileState",
      "description": "Synchronizes pending changes after reconnection without loss",
      "framework": "Jest",
      "storyId": "US-012",
      "acIndex": 1
    },
    {
      "target": "AppEntry.startServer",
      "description": "Starts both the SPA static server and Express API, exposing REST and WebSocket endpoints",
      "framework": "Jest",
      "storyId": "US-999",
      "acIndex": 0
    }
  ],
  "integration": [
    {
      "target": "POST /sessions",
      "description": "Creates a session and returns a UUID link",
      "framework": "Supertest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "GET /sessions/:uuid",
      "description": "Loads session data using the UUID link",
      "framework": "Supertest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "GET /sessions/:uuid",
      "description": "Loads session data without authentication",
      "framework": "Supertest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "GET /sessions/:uuid/board",
      "description": "Returns default columns and board structure",
      "framework": "Supertest",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "POST /cards",
      "description": "Persists a new card and triggers a Socket.io broadcast",
      "framework": "Supertest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "PATCH /cards/:id",
      "description": "Edits a card's content and author, persisting changes",
      "framework": "Supertest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "DELETE /cards/:id",
      "description": "Deletes a card owned by the requester and broadcasts removal",
      "framework": "Supertest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "PATCH /columns/:id",
      "description": "Renames a column and persists the change",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "POST /columns",
      "description": "Adds a new column to a session",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "DELETE /columns/:id",
      "description": "Deletes a column with optional re‑assignment handling",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "POST /votes",
      "description": "Creates a vote respecting the session's vote limit",
      "framework": "Supertest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "GET /votes/counts",
      "description": "Returns current vote counts for cards/clusters",
      "framework": "Supertest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "POST /clusters",
      "description": "Creates a cluster with a title",
      "framework": "Supertest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "PATCH /clusters/:id/cards",
      "description": "Adds multiple cards to a cluster (drag‑and‑drop)",
      "framework": "Supertest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "POST /action-items",
      "description": "Converts a card or cluster into an action item and stores it",
      "framework": "Supertest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "GET /action-items",
      "description": "Retrieves action items for side list display",
      "framework": "Supertest",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "PATCH /action-items/:id",
      "description": "Marks an action item as done and persists status",
      "framework": "Supertest",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "Socket.io cardChange event",
      "description": "Broadcasts card create/move/edit to all participants within 200 ms",
      "framework": "Socket.io‑test‑client",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "Socket.io reconnection sync",
      "description": "On reconnect, server sends missed events and latest state",
      "framework": "Socket.io‑test‑client",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "POST /cards (WebSocket down)",
      "description": "Adds a card via REST when socket is unavailable",
      "framework": "Supertest",
      "storyId": "US-012",
      "acIndex": 0
    },
    {
      "target": "Sync after reconnection",
      "description": "Client fetches pending changes and reconciles state without duplication",
      "framework": "Supertest",
      "storyId": "US-012",
      "acIndex": 1
    },
    {
      "target": "Full flow integration test",
      "description": "Create session, add cards, vote, convert to action items, verify real‑time updates end‑to‑end",
      "framework": "Supertest",
      "storyId": "US-999",
      "acIndex": 1
    }
  ],
  "e2e": [
    {
      "scenario": "Facilitator creates a retro session and receives a shareable UUID link that navigates to a populated board",
      "description": "Validates US‑001 criteria 0 and 1 via UI",
      "criticalPath": true,
      "storyId": "US-001",
      "acIndex": -1
    },
    {
      "scenario": "Participant opens the UUID link, loads session data without login and sees default columns ready for interaction",
      "description": "Validates US‑002 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": -1
    },
    {
      "scenario": "Participant adds a new card; the card appears instantly and is visible to other participants in real time",
      "description": "Validates US‑003 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-003",
      "acIndex": -1
    },
    {
      "scenario": "Facilitator renames an existing column, adds a new column, deletes a column and handles card re‑assignment, with changes persisting for all participants",
      "description": "Validates US‑004 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": -1
    },
    {
      "scenario": "Card creator edits the card text and author, then deletes the card; changes are reflected for all participants",
      "description": "Validates US‑005 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-005",
      "acIndex": -1
    },
    {
      "scenario": "Any user creates, moves, or edits a card and all other connected clients see the change within 200 ms via Socket.io events",
      "description": "Validates US‑006 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": -1
    },
    {
      "scenario": "Simulate a WebSocket disconnect, then reconnect; client receives missed events and no duplicate updates are applied",
      "description": "Validates US‑007 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": -1
    },
    {
      "scenario": "Participant casts votes on cards up to the session limit; vote counts update in real time for all participants",
      "description": "Validates US‑008 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": -1
    },
    {
      "scenario": "User creates a cluster with a title, drags multiple cards into it, and toggles expand/collapse to view grouped cards",
      "description": "Validates US‑009 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": -1
    },
    {
      "scenario": "Facilitator converts a card into an action item, fills owner, due date and description; action item appears in side list",
      "description": "Validates US‑010 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": -1
    },
    {
      "scenario": "Participant views the persistent side list of action items and marks an item as done; status updates instantly for all participants",
      "description": "Validates US‑011 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-011",
      "acIndex": -1
    },
    {
      "scenario": "While WebSocket is disconnected, user adds/edits cards via UI (REST fallback); upon reconnection, client syncs pending changes without loss",
      "description": "Validates US‑012 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-012",
      "acIndex": -1
    },
    {
      "scenario": "Full application launch: SPA serves, API endpoints are reachable, user creates session, adds cards, votes, creates action items, and all changes propagate in real time without errors",
      "description": "Validates US‑999 criteria 0 and 1",
      "criticalPath": true,
      "storyId": "US-999",
      "acIndex": -1
    }
  ],
  "coverageTargets": {
    "unit": 85,
    "integration": 70,
    "e2e": 100
  }
}
