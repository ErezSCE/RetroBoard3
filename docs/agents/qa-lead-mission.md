# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-11T00:32:28.588Z

---

## Test Plan

{
  "scope": "All acceptance criteria are covered by the test plan.",
  "unit": [
    {
      "target": "SessionController.createSession",
      "description": "Verify that creating a session persists to DB and returns a UUID link.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "SessionCreateForm component",
      "description": "Ensure form submission calls the create session API and handles the UUID response.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "SessionPage component",
      "description": "Check that the page loads session data from the UUID and renders the board.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "Board component default column rendering",
      "description": "Validate that default columns are displayed when session data is loaded.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "CardCreator component UI instant update",
      "description": "Confirm that adding a card shows it instantly in the UI.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "CardService.createCard",
      "description": "Test that a new card is persisted and a socket event is emitted.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "ColumnController.renameColumn / addColumn / deleteColumn",
      "description": "Verify rename, addition, and deletion of columns persist and broadcast.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "ColumnDeletionService.handleCardReassignment",
      "description": "Ensure deleting a column either removes its cards or prompts reassignment.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "CardComponent edit functionality",
      "description": "Check that a card creator can edit text and author, persisting changes.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "CardComponent delete functionality",
      "description": "Validate that a card creator can delete their own card and it disappears for all.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "Socket.io emitCardChange event timing",
      "description": "Assert that card create/move/edit events are emitted within 200ms.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "Socket.io client event handler",
      "description": "Confirm that received socket events correctly update client state.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "target": "SocketReconnectionHandler.fetchLatestState",
      "description": "Test that after reconnect the client receives the latest session state and missed events.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "SocketReconnectionHandler.deduplicateEvents",
      "description": "Ensure no duplicate events are applied after reconnection.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "VoteService.validateVoteLimit",
      "description": "Check that a participant cannot exceed the configured vote limit per session.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "VoteBadge component real‑time update",
      "description": "Verify vote counts display and update instantly across clients.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "ClusterService.createCluster and drag‑drop logic",
      "description": "Validate cluster creation with title and moving multiple cards into it.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "ClusterComponent expand/collapse UI",
      "description": "Ensure clusters can be expanded and collapsed correctly.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "ActionItemService.convertToActionItem",
      "description": "Test conversion of a card/cluster into an action item with all fields stored.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "ActionItemList component persistence",
      "description": "Confirm that a new action item appears in the side list and is saved in DB.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "ActionItemList component display",
      "description": "Verify participants can view all action items in the persistent side list.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "target": "ActionItemItem component status toggle",
      "description": "Check that marking an item as done updates status instantly for all participants.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "OfflineHandler fallback to REST",
      "description": "Ensure that when WebSocket is down, add/edit card operations succeed via REST.",
      "framework": "Jest",
      "storyId": "US-012",
      "acIndex": 0
    },
    {
      "target": "SyncManager reconcilePendingChanges",
      "description": "Validate that after reconnection pending changes are synced without loss or duplication.",
      "framework": "Jest",
      "storyId": "US-012",
      "acIndex": 1
    },
    {
      "target": "App entry point initialization",
      "description": "Verify that starting the application launches SPA, REST API, and WebSocket endpoints.",
      "framework": "Jest",
      "storyId": "US-999",
      "acIndex": 0
    },
    {
      "target": "Full flow integration unit mock",
      "description": "Simulate create session, add card, vote, create action item and ensure no errors.",
      "framework": "Jest",
      "storyId": "US-999",
      "acIndex": 1
    }
  ],
  "integration": [
    {
      "target": "POST /sessions endpoint",
      "description": "Assert that creating a session persists to DB and returns a UUID link.",
      "framework": "Supertest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "GET /sessions/:id endpoint",
      "description": "Verify that the returned session data loads correctly for the board page.",
      "framework": "Supertest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "GET /sessions/:id/board endpoint",
      "description": "Check that default columns are returned when a participant opens a UUID link.",
      "framework": "Supertest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "POST /cards endpoint",
      "description": "Ensure a new card is persisted and a socket event is emitted for real‑time update.",
      "framework": "Supertest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "PUT /columns/:id, POST /columns, DELETE /columns/:id endpoints",
      "description": "Validate rename, addition, and deletion of columns persist and broadcast changes.",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "DELETE /columns/:id with reassignment logic",
      "description": "Confirm that deleting a column either removes its cards or triggers reassignment flow.",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "PUT /cards/:id and DELETE /cards/:id endpoints",
      "description": "Test edit and delete operations by card creator persist and propagate to all clients.",
      "framework": "Supertest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "DELETE /cards/:id endpoint (owner check)",
      "description": "Verify that only the card creator can delete their card and it disappears for everyone.",
      "framework": "Supertest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "Socket.io real‑time broadcast test",
      "description": "Measure that card create/move/edit events reach other clients within 200ms.",
      "framework": "Jest with socket.io-client",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "Socket.io event payload handling",
      "description": "Assert that each emitted event correctly updates client state.",
      "framework": "Jest with socket.io-client",
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "target": "Socket.io reconnection state sync",
      "description": "Simulate disconnect/reconnect and verify missed events are delivered.",
      "framework": "Jest with socket.io-client",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "Socket.io reconnection duplicate guard",
      "description": "Ensure no duplicate events are applied after reconnection.",
      "framework": "Jest with socket.io-client",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "POST /votes endpoint vote limit enforcement",
      "description": "Check that a participant cannot exceed the configured vote limit per session.",
      "framework": "Supertest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "Vote count real‑time update via socket",
      "description": "Validate that vote counts are broadcast and displayed instantly.",
      "framework": "Jest with socket.io-client",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "POST /clusters endpoint and card association",
      "description": "Confirm cluster creation with title and that cards can be moved into it.",
      "framework": "Supertest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "GET /clusters/:id endpoint expand/collapse state",
      "description": "Verify cluster entity can be retrieved in expanded or collapsed form.",
      "framework": "Supertest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "POST /action-items endpoint conversion logic",
      "description": "Test conversion of card/cluster to action item with all required fields stored.",
      "framework": "Supertest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "GET /action-items endpoint list retrieval",
      "description": "Ensure action items appear in side list and are persisted.",
      "framework": "Supertest",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "GET /action-items endpoint for participants",
      "description": "Validate participants can view the persistent list of action items.",
      "framework": "Supertest",
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "target": "PATCH /action-items/:id status update",
      "description": "Check that marking an item as done updates status for all participants in real time.",
      "framework": "Supertest",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "REST fallback when WebSocket down (POST /cards)",
      "description": "Confirm that card add/edit works via REST while socket is unavailable.",
      "framework": "Supertest",
      "storyId": "US-012",
      "acIndex": 0
    },
    {
      "target": "Sync after WebSocket reconnection",
      "description": "Validate that pending REST changes are merged without loss after socket restores.",
      "framework": "Jest",
      "storyId": "US-012",
      "acIndex": 1
    },
    {
      "target": "Health‑check endpoint /health",
      "description": "Ensure the application reports healthy status on startup.",
      "framework": "Supertest",
      "storyId": "US-999",
      "acIndex": 0
    },
    {
      "target": "End‑to‑end flow integration test (mocked sockets)",
      "description": "Simulate full user flow: create session, add card, vote, create action item, verify no errors.",
      "framework": "Jest",
      "storyId": "US-999",
      "acIndex": 1
    }
  ],
  "e2e": [
    {
      "scenario": "Facilitator creates a retro session and receives a shareable UUID link",
      "description": "Covers US-001 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-001",
      "acIndex": -1
    },
    {
      "scenario": "Participant joins a session via the UUID link and sees the board with default columns",
      "description": "Covers US-002 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": -1
    },
    {
      "scenario": "Participant adds a card and observes instant UI update and real‑time propagation to other participants",
      "description": "Covers US-003 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-003",
      "acIndex": -1
    },
    {
      "scenario": "Facilitator renames, adds, and deletes a column, handling card reassignment when deleting",
      "description": "Covers US-004 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": -1
    },
    {
      "scenario": "Card creator edits their card text and author, then deletes the card, verifying changes for all participants",
      "description": "Covers US-005 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-005",
      "acIndex": -1
    },
    {
      "scenario": "Any user creates, moves, or edits a card and all other clients see the change within 200 ms",
      "description": "Covers US-006 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": -1
    },
    {
      "scenario": "Simulate WebSocket disconnect, then reconnect; verify latest state and missed events are received without duplicates",
      "description": "Covers US-007 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": -1
    },
    {
      "scenario": "Participant votes on cards up to the session limit and sees vote counts update in real time",
      "description": "Covers US-008 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": -1
    },
    {
      "scenario": "User creates a cluster with a title, drags multiple cards into it, and expands/collapses the cluster",
      "description": "Covers US-009 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": -1
    },
    {
      "scenario": "Facilitator converts a card into an action item, sets owner, due date, and description, and sees it appear in the side list",
      "description": "Covers US-010 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": -1
    },
    {
      "scenario": "Participant views the action‑item side list and marks an item as done, confirming instant status update for all",
      "description": "Covers US-011 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-011",
      "acIndex": -1
    },
    {
      "scenario": "While WebSocket is down, participant adds and edits cards via REST; after reconnection, client syncs pending changes without loss",
      "description": "Covers US-012 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-012",
      "acIndex": -1
    },
    {
      "scenario": "Full application launch: create session, add cards, vote, create action items, and verify real‑time updates without errors",
      "description": "Covers US-999 acceptance criteria 0 and 1.",
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
