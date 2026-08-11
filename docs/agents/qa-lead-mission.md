# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-11T00:11:12.154Z

---

## Test Plan

{
  "scope": "All acceptance criteria from all user stories are covered by the test items below.",
  "unit": [
    {
      "target": "SessionForm component",
      "description": "Validate that submitting the form calls the create session API and handles the returned UUID link.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "SessionPage component",
      "description": "Ensure the component fetches session data on mount using the UUID and renders the board.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "Board component",
      "description": "Render default columns when session data is loaded and allow interaction.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "CardCreator component",
      "description": "Check that adding a card updates UI instantly and triggers the REST call.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "Card service (backend model)",
      "description": "Unit test persistence logic for creating a card record in PostgreSQL.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "ColumnService module",
      "description": "Test rename, add, and delete column functions and their DB interactions.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "ColumnDelete handler",
      "description": "Verify that deleting a column either removes its cards or triggers a reassignment prompt.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "CardEdit component",
      "description": "Ensure editing card text/author calls the PATCH endpoint and updates UI.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "CardDelete component",
      "description": "Confirm that deleting a card calls the DELETE endpoint and removes it from UI.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "VoteService module",
      "description": "Enforce per‑session vote limit and reject excess votes.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "VoteDisplay component",
      "description": "Render vote counts and update when vote events are received.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "ClusterCreator component",
      "description": "Validate creation of a cluster with a title and proper API call.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "ClusterComponent",
      "description": "Test expand/collapse UI behavior for a cluster entity.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "ActionItemConverter utility",
      "description": "Check conversion of a card or cluster into an action item with required fields.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "ActionItemList component",
      "description": "Render stored action items in side list and reflect new items after creation.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "ActionItemStatusToggle component",
      "description": "Mark an action item as done and verify status update propagation.",
      "framework": "Jest + React Testing Library",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "WebSocketProvider hook",
      "description": "Handle disconnect/reconnect, fetch latest session state, and avoid duplicate events.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "WebSocketProvider duplicate‑event guard",
      "description": "Ensure no duplicate events are applied after reconnection.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "OfflineCardService module",
      "description": "Fallback to REST calls when WebSocket is unavailable and queue actions.",
      "framework": "Jest",
      "storyId": "US-012",
      "acIndex": 0
    },
    {
      "target": "App entry point (server.ts)",
      "description": "Verify that Express routes, static SPA serving, and Socket.io are initialized.",
      "framework": "Jest",
      "storyId": "US-999",
      "acIndex": 0
    }
  ],
  "integration": [
    {
      "target": "POST /sessions endpoint",
      "description": "Create session, assert DB row exists and UUID link returned.",
      "framework": "Supertest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "GET /sessions/:id endpoint",
      "description": "Retrieve session data; used for loading board and join flow.",
      "framework": "Supertest",
      "storyId": "US-001",
      "acIndex": 1
    },
    {
      "target": "GET /sessions/:id for participant join",
      "description": "Ensure session data loads without authentication.",
      "framework": "Supertest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "POST /cards endpoint",
      "description": "Create a card, verify DB persistence and response payload.",
      "framework": "Supertest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "Socket.io event 'cardCreated'",
      "description": "Assert that creating a card emits a real‑time event to other clients.",
      "framework": "socket.io-client (integration)",
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "target": "PATCH /cards/:id endpoint",
      "description": "Edit card text/author, verify DB update and event emission.",
      "framework": "Supertest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "DELETE /cards/:id endpoint",
      "description": "Delete a card, ensure removal from DB and broadcast event.",
      "framework": "Supertest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "PATCH /columns/:id (rename)",
      "description": "Rename column, check DB and 'columnRenamed' event.",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "POST /columns endpoint",
      "description": "Add a new column and verify broadcast.",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "DELETE /columns/:id endpoint",
      "description": "Delete column, test reassignment logic and 'columnDeleted' event.",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "POST /votes endpoint",
      "description": "Accept vote if under limit, reject if limit exceeded.",
      "framework": "Supertest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "Socket.io broadcast of vote updates",
      "description": "Verify vote count changes are emitted to all clients.",
      "framework": "socket.io-client (integration)",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "POST /clusters endpoint",
      "description": "Create cluster with title, persist, and emit 'clusterCreated'.",
      "framework": "Supertest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "PATCH /clusters/:id to add cards",
      "description": "Move cards into a cluster and emit appropriate event.",
      "framework": "Supertest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "POST /action-items endpoint",
      "description": "Convert card/cluster to action item, store, and emit 'actionItemCreated'.",
      "framework": "Supertest",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "PATCH /action-items/:id status update",
      "description": "Mark action item as done, persist, and broadcast update.",
      "framework": "Supertest",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "Socket.io reconnection flow",
      "description": "On client reconnect, server sends 'sessionState' with latest data.",
      "framework": "socket.io-client (integration)",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "REST fallback when WebSocket down",
      "description": "Simulate WS outage, perform card add via REST, ensure success.",
      "framework": "Supertest",
      "storyId": "US-012",
      "acIndex": 0
    },
    {
      "target": "Health‑check endpoint GET /health",
      "description": "Return 200 OK confirming server is up.",
      "framework": "Supertest",
      "storyId": "US-999",
      "acIndex": 0
    }
  ],
  "e2e": [
    {
      "scenario": "Facilitator creates a new retro session and receives a shareable UUID link; navigates to the link and sees the board.",
      "description": "Covers US-001 acceptance criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-001",
      "acIndex": -1
    },
    {
      "scenario": "Participant opens the UUID link, board loads without authentication, default columns are visible, and user can interact.",
      "description": "Covers US-002 criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": -1
    },
    {
      "scenario": "Participant adds a new card; the card appears instantly, persists, and other participants see it via real‑time update.",
      "description": "Covers US-003 criteria 0 and 1, and US-006 criterion 0.",
      "criticalPath": true,
      "storyId": "US-003",
      "acIndex": -1
    },
    {
      "scenario": "Facilitator renames an existing column, adds a new column, deletes a column and handles reassignment prompt; changes reflect for all users.",
      "description": "Covers US-004 criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": -1
    },
    {
      "scenario": "Card creator edits the card text and author, then deletes the card; updates propagate instantly to other participants.",
      "description": "Covers US-005 criteria 0 and 1, and US-006 criterion 0.",
      "criticalPath": true,
      "storyId": "US-005",
      "acIndex": -1
    },
    {
      "scenario": "Multiple users vote on cards up to the session limit; vote counts update in real time for all participants.",
      "description": "Covers US-008 criteria 0 and 1, and US-006 criterion 0.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": -1
    },
    {
      "scenario": "User creates a cluster with a title, drags several cards into it, then expands and collapses the cluster view.",
      "description": "Covers US-009 criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": -1
    },
    {
      "scenario": "Facilitator converts a card into an action item, fills owner and due date; action item appears in side list.",
      "description": "Covers US-010 criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": -1
    },
    {
      "scenario": "Participant views the action‑item side list and marks an item as done; status updates instantly for all users.",
      "description": "Covers US-011 criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-011",
      "acIndex": -1
    },
    {
      "scenario": "Simulate WebSocket disconnect, add/edit a card via REST (offline mode), then reconnect; client receives missed events without duplicates and UI reflects final state.",
      "description": "Covers US-007 criteria 0 and 1, and US-012 criteria 0 and 1.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": -1
    },
    {
      "scenario": "Full end‑to‑end flow: start application, create session, add cards, vote, create clusters, convert to action items, and verify real‑time synchronization throughout.",
      "description": "Covers US-999 criteria 0 and 1, ensuring the whole system works together.",
      "criticalPath": true,
      "storyId": "US-999",
      "acIndex": -1
    }
  ],
  "coverageTargets": {
    "unit": 80,
    "integration": 60,
    "e2e": 100
  }
}
