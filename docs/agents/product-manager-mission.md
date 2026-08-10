# Product Manager Mission Report

**Agent**: product-manager  
**Generated**: 2026-08-10T21:09:43.747Z

---

## User Stories (13)

### US-001: As a Facilitator, I want to create a retro session with title, description, and date and receive a shareable link
- So that: participants can join the session without authentication
- AC: Given the facilitator fills title/description/date and clicks create, a session is persisted in the database and a UUID link is returned; The returned link navigates to a session page that loads the session data and shows the board
### US-002: As a Participant, I want to join a session via the shareable UUID link without logging in
- So that: I can start contributing immediately
- AC: When a participant opens the UUID link, the SPA loads the session data without requiring authentication; The participant sees the board with default columns and can interact with it
### US-003: As a Participant, I want to view default columns and add cards with optional author information
- So that: I can share feedback during the retro
- AC: Participants can see default columns and add a card; the new card appears instantly in the UI; The new card is persisted in the database and is visible to other participants after refresh or via real‑time update
### US-004: As a Facilitator, I want to rename, add, or delete columns on the board
- So that: the board fits the team’s needs for the retro
- AC: Facilitator can rename an existing column, add a new column, or delete a column; changes persist and are reflected for all participants; Deleting a column either removes its cards or prompts the facilitator to reassign them
### US-005: As a Participant, I want to edit or delete the cards I created
- So that: I can correct mistakes or remove my input
- AC: Card creator can edit the card text and author; changes persist and are shown to all participants; Card creator can delete their own card; the card disappears for all participants
### US-006: As a Any user, I want all session changes to be broadcast in near real time to every connected participant
- So that: everyone sees updates instantly
- AC: When any user creates, moves, or edits a card, all other connected clients see the change within 200ms; Socket.io events are emitted for each change and correctly update client state
### US-007: As a User, I want the app to automatically reconnect and replay missed events after a WebSocket disconnect
- So that: my view stays in sync without duplicate updates
- AC: If a client loses the WebSocket connection and later reconnects, it receives the latest session state and any missed events; No duplicate events are applied after reconnection
### US-008: As a Participant, I want to vote on cards or clusters with a limited number of votes per session
- So that: the team can prioritize items
- AC: Each participant can allocate up to the configured number of votes per session; Vote counts are displayed on cards/clusters and update in real time for all participants
### US-009: As a Participant, I want to group related cards into clusters with a title
- So that: the board stays organized and themes emerge
- AC: Users can create a cluster, give it a title, and drag multiple cards into it; The cluster appears as a grouped entity that can be expanded or collapsed
### US-010: As a Facilitator, I want to convert any card or cluster into an action item with owner, due date, and description
- So that: action items are tracked and assigned
- AC: Facilitator can convert a card/cluster into an action item and specify title, description, owner, and optional due date; The action item appears in a side list and is stored in the database
### US-011: As a Participant, I want to view the list of action items and mark them as done
- So that: the team can see progress on follow‑up tasks
- AC: Participants can see all action items in a persistent side list; Marking an item as done updates its status instantly for all participants
### US-012: As a User, I want the SPA to continue working via REST when the WebSocket connection drops and automatically resynchronize when it is restored
- So that: no work is lost during temporary connectivity issues
- AC: While WebSocket is disconnected, users can add/edit cards and the operations succeed via REST calls; When the connection is restored, the client syncs pending changes and the UI reflects the final state without loss
### US-999: As a User, I want all components (session management, board, real‑time, voting, action items) wired together in the main application entry point
- So that: the retro board is fully functional end‑to‑end
- AC: Starting the application launches both the frontend SPA and the backend API, serving the SPA and exposing REST and WebSocket endpoints; A user can create a session, add cards, vote, create action items, and see all changes in real time without errors

## Tasks (54)

- **TASK-001** [infra/npm workspaces or Yarn workspaces] Initialize monorepo with frontend and backend packages
- **TASK-002** [frontend/Vite, React 18, TypeScript] Setup React frontend project with Vite and TypeScript
- **TASK-003** [backend/Node.js 20, Express, TypeScript] Setup Express backend project with TypeScript
- **TASK-004** [infra/Docker] Create multi‑stage Dockerfile for monolith
- **TASK-005** [infra/GitHub Actions] Configure GitHub Actions CI pipeline
- **TASK-006** [backend/Express, TypeScript, pg] Implement POST /api/sessions endpoint
- **TASK-007** [backend/Node.js, TypeScript] Session service for creation logic
- **TASK-008** [db/PostgreSQL, Supabase migrations] Database migration for sessions table
- **TASK-009** [frontend/React, TypeScript, react-hook-form] Session creation form component
- **TASK-010** [frontend/axios or fetch API] Integrate session creation API call in frontend
- **TASK-011** [testing/Jest, Supertest] Backend unit test for session creation
- **TASK-012** [testing/Jest, React Testing Library] Frontend component test for session form
- **TASK-013** [frontend/React Router v6] Route handling for session link (/:sessionId)
- **TASK-014** [backend/Express, pg] Implement GET /api/sessions/:id endpoint
- **TASK-015** [testing/Jest, React Testing Library, msw] Frontend routing test for session entry
- **TASK-016** [backend/Express, pg] CRUD API endpoints for columns
- **TASK-017** [backend/Express, pg] CRUD API endpoints for cards
- **TASK-018** [db/PostgreSQL] Database migrations for columns and cards tables
- **TASK-019** [frontend/React, react-beautiful-dnd, TypeScript] Board component displaying columns and cards
- **TASK-020** [frontend/React, TypeScript, headless UI or similar] Add Card modal/component
- **TASK-021** [frontend/axios or fetch, React Query optional] Integrate add‑card API call in frontend UI
- **TASK-022** [testing/Jest, pg-mem or testcontainers] Backend unit tests for column and card services
- **TASK-023** [backend/Express, pg] Endpoint for renaming a column
- **TASK-024** [frontend/React, TypeScript, react-beautiful-dnd] Column management UI (rename, add, delete)
- **TASK-025** [testing/Jest, React Testing Library] Component tests for column management UI
- **TASK-026** [backend/Express, TypeScript] Validate card edit/delete ownership on backend
- **TASK-027** [frontend/React, TypeScript] Edit and delete UI for own cards
- **TASK-028** [testing/Jest, Supertest] Unit tests for card edit/delete permission logic
- **TASK-029** [backend/Socket.io 4, Node.js] Setup Socket.io server integrated with Express
- **TASK-030** [backend/Socket.io] Emit real‑time events on session changes
- **TASK-031** [frontend/socket.io-client, React Context or Redux] Socket.io client integration in React SPA
- **TASK-032** [testing/Jest, socket.io-client, supertest] Integration test for socket event propagation
- **TASK-033** [frontend/socket.io-client, React Query or custom hook] Client‑side reconnection and state replay logic
- **TASK-034** [backend/Express, pg] Endpoint to fetch full current session state
- **TASK-035** [testing/Jest, Playwright or Cypress] Test scenario for disconnect/reconnect synchronization
- **TASK-036** [backend/Express, pg] Voting API endpoint (POST /api/sessions/:sid/votes)
- **TASK-037** [db/PostgreSQL] Database migration for votes table
- **TASK-038** [frontend/React, TypeScript] Vote UI component and client‑side limit enforcement
- **TASK-039** [testing/Jest, Supertest] Unit tests for voting logic and limits
- **TASK-040** [db/PostgreSQL] Database migrations and API for clusters
- **TASK-041** [frontend/React, react-beautiful-dnd] Cluster creation and drag‑into‑cluster UI
- **TASK-042** [testing/Jest, React Testing Library, Supertest] Tests for cluster creation and card assignment
- **TASK-043** [db/PostgreSQL] Database migration and API for action items
- **TASK-044** [frontend/React, TypeScript] UI to convert card/cluster to action item and side list component
- **TASK-045** [testing/Jest, Supertest] Backend tests for action item endpoints
- **TASK-046** [frontend/React, TypeScript] Side list component with mark‑done toggle
- **TASK-047** [testing/Jest, socket.io-client] Test for action item status update propagation
- **TASK-048** [frontend/IndexedDB or localStorage, custom hook] Offline operation queue for REST calls when socket is down
- **TASK-049** [backend/Express middleware] Add idempotency token support to REST endpoints
- **TASK-050** [testing/Cypress or Playwright] Automated test for offline queue and replay behavior
- **TASK-051** [frontend/React, React Router, socket.io-client] Root App component with routing, context providers, and socket initialization
- **TASK-052** [backend/Express, Socket.io, pino] Main server entry point mounting REST routes and Socket.io
- **TASK-053** [infra/Docker, concurrently npm package] Docker entrypoint script to start both frontend dev server and backend API
- **TASK-054** [testing/Playwright] End‑to‑end test covering full user flow
