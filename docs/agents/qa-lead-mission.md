# QA Lead — Test Plan

**Agent**: qa-lead  
**Generated**: 2026-08-11T00:50:00.348Z

---

## Test Plan

{
  "scope": "All acceptance criteria from US-001 to US-999 are covered by unit, integration, or end‑to‑end tests.",
  "unit": [
    {
      "target": "backend/src/services/sessionService.ts - createSession",
      "description": "Verifies that a session is persisted and a UUID is returned.",
      "framework": "Jest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "frontend/src/components/Board.tsx",
      "description": "Renders default columns when session data is loaded.",
      "framework": "Jest",
      "storyId": "US-002",
      "acIndex": 1
    },
    {
      "target": "frontend/src/components/CardForm.tsx",
      "description": "Adds a new card and updates local state instantly.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "target": "backend/src/services/cardService.ts - addCard",
      "description": "Persists a new card and returns the created entity.",
      "framework": "Jest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "frontend/src/components/ColumnEditor.tsx",
      "description": "Handles rename, add and delete operations for columns.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "backend/src/services/columnService.ts - deleteColumn",
      "description": "Deletes a column and either removes or reassigns its cards.",
      "framework": "Jest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "frontend/src/components/CardEditor.tsx",
      "description": "Allows the card creator to edit text and author fields.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "backend/src/services/cardService.ts - deleteCard",
      "description": "Deletes a card owned by the requester.",
      "framework": "Jest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "realtime/src/socketEvents.ts - emitCardChange",
      "description": "Emits socket.io events for create/move/edit card actions.",
      "framework": "Jest",
      "storyId": "US-006",
      "acIndex": 1
    },
    {
      "target": "realtime/src/reconnectHandler.ts",
      "description": "Handles reconnection, sends latest state and missed events without duplication.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "realtime/src/eventDeduplication.ts",
      "description": "Ensures duplicate events are ignored after reconnection.",
      "framework": "Jest",
      "storyId": "US-007",
      "acIndex": 1
    },
    {
      "target": "backend/src/services/voteService.ts - castVote",
      "description": "Enforces per‑session vote limit per user.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "frontend/src/components/VoteCounter.tsx",
      "description": "Displays live vote counts on cards and clusters.",
      "framework": "Jest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "frontend/src/components/ClusterCreator.tsx",
      "description": "Creates a cluster with title and supports drag‑and‑drop of cards.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "frontend/src/components/ClusterView.tsx",
      "description": "Allows expanding/collapsing of a cluster entity.",
      "framework": "Jest",
      "storyId": "US-009",
      "acIndex": 1
    },
    {
      "target": "backend/src/services/actionItemService.ts - convertToActionItem",
      "description": "Converts a card or cluster into an action item with metadata.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "frontend/src/components/ActionItemList.tsx",
      "description": "Renders persisted action items in a side list.",
      "framework": "Jest",
      "storyId": "US-010",
      "acIndex": 1
    },
    {
      "target": "frontend/src/components/ActionItemItem.tsx - toggleDone",
      "description": "Marks an action item as done and updates UI state.",
      "framework": "Jest",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "frontend/src/hooks/useWebSocket.ts",
      "description": "Falls back to REST calls when socket is disconnected.",
      "framework": "Jest",
      "storyId": "US-012",
      "acIndex": 0
    },
    {
      "target": "frontend/src/hooks/useSyncOnReconnect.ts",
      "description": "Synchronizes pending changes after socket reconnection without loss.",
      "framework": "Jest",
      "storyId": "US-012",
      "acIndex": 1
    },
    {
      "target": "backend/src/app.ts - server startup",
      "description": "Ensures both SPA static serving and API endpoints are started.",
      "framework": "Jest",
      "storyId": "US-999",
      "acIndex": 0
    }
  ],
  "integration": [
    {
      "target": "POST /api/sessions",
      "description": "Creates a session and returns a UUID link.",
      "framework": "Supertest",
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "target": "GET /api/sessions/:id",
      "description": "Loads session data for a given UUID without auth.",
      "framework": "Supertest",
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "target": "POST /api/cards",
      "description": "Persists a new card and returns it.",
      "framework": "Supertest",
      "storyId": "US-003",
      "acIndex": 1
    },
    {
      "target": "PATCH /api/columns/:id",
      "description": "Renames a column and verifies persistence.",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "target": "DELETE /api/columns/:id",
      "description": "Deletes a column and checks card handling logic.",
      "framework": "Supertest",
      "storyId": "US-004",
      "acIndex": 1
    },
    {
      "target": "PATCH /api/cards/:id",
      "description": "Edits card text/author and verifies DB update.",
      "framework": "Supertest",
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "target": "DELETE /api/cards/:id",
      "description": "Deletes a card owned by the requester.",
      "framework": "Supertest",
      "storyId": "US-005",
      "acIndex": 1
    },
    {
      "target": "Socket.io event: cardCreated",
      "description": "Ensures cardCreated event is broadcast within 200 ms.",
      "framework": "Supertest (socket.io-client)",
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "target": "Socket.io reconnection flow",
      "description": "Client reconnects, receives latest state and missed events.",
      "framework": "Supertest (socket.io-client)",
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "target": "POST /api/votes",
      "description": "Accepts a vote when under the session limit and rejects excess votes.",
      "framework": "Supertest",
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "target": "GET /api/votes/:sessionId",
      "description": "Returns current vote counts for cards and clusters.",
      "framework": "Supertest",
      "storyId": "US-008",
      "acIndex": 1
    },
    {
      "target": "POST /api/clusters",
      "description": "Creates a cluster with title and associates cards.",
      "framework": "Supertest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "PATCH /api/clusters/:id/cards",
      "description": "Moves multiple cards into a cluster.",
      "framework": "Supertest",
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "target": "POST /api/action-items",
      "description": "Converts a card/cluster into an action item and stores it.",
      "framework": "Supertest",
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "target": "GET /api/action-items/:sessionId",
      "description": "Retrieves all action items for a session.",
      "framework": "Supertest",
      "storyId": "US-011",
      "acIndex": 0
    },
    {
      "target": "PATCH /api/action-items/:id/done",
      "description": "Marks an action item as done and verifies broadcast.",
      "framework": "Supertest",
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "target": "POST /api/cards (WebSocket down)",
      "description": "Adds a card via REST when socket is unavailable.",
      "framework": "Supertest",
      "storyId": "US-012",
      "acIndex": 0
    },
    {
      "target": "Sync after reconnection",
      "description": "Ensures pending REST changes are merged without duplication.",
      "framework": "Supertest (socket.io-client)",
      "storyId": "US-012",
      "acIndex": 1
    },
    {
      "target": "GET /health",
      "description": "Health‑check endpoint returns 200 OK.",
      "framework": "Supertest",
      "storyId": "US-999",
      "acIndex": 0
    },
    {
      "target": "Static file serving of SPA",
      "description": "Root path serves index.html and JS bundle.",
      "framework": "Supertest",
      "storyId": "US-999",
      "acIndex": 0
    }
  ],
  "e2e": [
    {
      "scenario": "Facilitator creates a session and receives a shareable UUID link",
      "description": "Fills title/description/date, clicks create, verifies UUID in URL and that board loads.",
      "criticalPath": true,
      "storyId": "US-001",
      "acIndex": 0
    },
    {
      "scenario": "Participant opens UUID link and sees the board with default columns",
      "description": "Navigates to link, asserts session data loads without auth and default columns are rendered.",
      "criticalPath": true,
      "storyId": "US-002",
      "acIndex": 0
    },
    {
      "scenario": "Participant adds a new card and sees it instantly",
      "description": "Uses card form, verifies UI shows new card immediately and that other participants receive it via real‑time.",
      "criticalPath": true,
      "storyId": "US-003",
      "acIndex": 0
    },
    {
      "scenario": "Facilitator renames, adds, and deletes a column",
      "description": "Performs rename, addition, and deletion; checks persistence via reload and real‑time reflection for all users.",
      "criticalPath": true,
      "storyId": "US-004",
      "acIndex": 0
    },
    {
      "scenario": "Card creator edits and deletes their own card",
      "description": "Edits text/author, verifies update across participants; then deletes and ensures removal for all.",
      "criticalPath": true,
      "storyId": "US-005",
      "acIndex": 0
    },
    {
      "scenario": "Real‑time broadcast of card creation, move, and edit within 200 ms",
      "description": "Measures latency of socket.io events and asserts other clients receive updates promptly.",
      "criticalPath": true,
      "storyId": "US-006",
      "acIndex": 0
    },
    {
      "scenario": "WebSocket disconnect and automatic reconnection with state replay",
      "description": "Simulates network loss, performs actions via REST, reconnects, and verifies missed events are applied once.",
      "criticalPath": true,
      "storyId": "US-007",
      "acIndex": 0
    },
    {
      "scenario": "Participant votes on cards respecting session vote limit",
      "description": "Attempts to cast votes beyond limit, expects rejection; verifies vote counts update in real time.",
      "criticalPath": true,
      "storyId": "US-008",
      "acIndex": 0
    },
    {
      "scenario": "User creates a cluster, drags cards into it, and toggles expand/collapse",
      "description": "Creates cluster with title, drags multiple cards, checks grouped view and collapse behavior.",
      "criticalPath": true,
      "storyId": "US-009",
      "acIndex": 0
    },
    {
      "scenario": "Facilitator converts a card into an action item and verifies side list",
      "description": "Selects card, fills action item details, confirms appearance in side list and DB persistence.",
      "criticalPath": true,
      "storyId": "US-010",
      "acIndex": 0
    },
    {
      "scenario": "Participant marks an action item as done and sees instant update",
      "description": "Clicks done checkbox, asserts status change propagates to all participants.",
      "criticalPath": true,
      "storyId": "US-011",
      "acIndex": 1
    },
    {
      "scenario": "Operations succeed via REST while WebSocket is down and sync on restore",
      "description": "Disables socket, adds/edits cards via UI (which falls back to REST), re‑enables socket, verifies final state matches expectations.",
      "criticalPath": true,
      "storyId": "US-012",
      "acIndex": 0
    },
    {
      "scenario": "Full end‑to‑end flow: create session, add cards, vote, cluster, create action items, and observe real‑time updates without errors",
      "description": "Executes the complete user journey covering all major features, ensuring no console errors and consistent UI state.",
      "criticalPath": true,
      "storyId": "US-999",
      "acIndex": 1
    }
  ],
  "coverageTargets": {
    "unit": 80,
    "integration": 60,
    "e2e": 100
  }
}
