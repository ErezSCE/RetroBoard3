# Architect Mission Report

**Agent**: architect  
**Generated**: 2026-08-10T21:09:13.436Z

---

## Architecture Style

Modular Monolith with real‑time extension

## Components

- **React SPA** (Frontend): Single‑page application that renders the retro board, handles drag‑and‑drop, voting UI and communicates with the backend via REST and WebSocket.
- **Express REST API** (Backend Service): Stateless HTTP layer exposing CRUD endpoints for sessions, columns, cards, clusters and action items.
- **Socket.io Hub** (Real‑time Service): WebSocket server that pushes state changes (card moves, votes, new action items) to all connected clients and persists events to the database.
- **PostgreSQL** (Database): Relational store for sessions, columns, cards, clusters, votes and action items. Chosen for ACID guarantees and simple relational queries.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite — React has the largest ecosystem, mature drag‑and‑drop libraries (react‑beautiful‑dnd), and TypeScript support that eases future maintenance. Vite provides fast dev server start‑up. Vue and Svelte are viable but would require additional learning for a team already familiar with React.
- **Backend HTTP**: Node.js 20 + Express — Express is ultra‑lightweight, matches the simplicity of the app, and integrates seamlessly with Socket.io. Fastify offers better performance but adds a learning curve for middleware patterns; NestJS brings a full‑blown framework that is overkill for a single service.
- **Real‑time**: Socket.io 4 (Node.js) — Socket.io abstracts reconnection, fallback transports and room management, which speeds development of per‑session broadcasting. Raw ws requires manual handling of these concerns. Firebase would introduce external vendor lock‑in and unnecessary cost for a simple board.
- **Database**: PostgreSQL 15 (hosted on Supabase) — PostgreSQL gives relational integrity for sessions, cards, votes and supports complex queries (e.g., ordering, aggregation). Supabase provides a managed instance with zero‑ops backups, fitting the "simple implementation" constraint. SQLite would limit concurrent users and lacks built‑in HA; MongoDB is document‑oriented and would require extra modeling for relational constraints.
- **Containerization / Deployment**: Docker (single‑container image) deployed on Render — Docker guarantees environment parity across dev and prod while keeping the deployment footprint tiny (one container). Render offers free tier, automatic HTTPS and simple scaling without managing Kubernetes. Heroku is similar but pricing is higher for comparable resources; Elastic Beanstalk adds unnecessary AWS complexity.
- **CI/CD**: GitHub Actions — GitHub Actions integrates directly with the repository, provides free minutes for open‑source, and can run lint, unit tests, build Docker image and push to Render. GitLab CI would require moving the repo; CircleCI adds external service overhead.
- **Testing**: Jest + React Testing Library for frontend, Supertest for API — Jest is the de‑facto standard for unit testing in React/TS projects, offers fast watch mode and built‑in coverage. React Testing Library encourages testing from the user’s perspective. Supertest pairs nicely with Express for HTTP integration tests. Mocha is older and lacks the same ecosystem; Cypress is great for e2e but not needed for unit coverage at this stage.
- **Logging / Observability**: pino (JSON logger) + Prometheus exporter — pino is extremely low‑overhead and outputs structured JSON, making it easy to ship to any log aggregation service. Winston is more feature‑rich but slower; Log4js is less actively maintained.

## Epics

- **E1** Session Management: Facilitator can create a retro session, obtain a shareable random UUID link, and participants can join via that link without authentication.
- **E2** Column & Card CRUD: Create, rename, add, edit and delete columns; add, edit, delete cards with optional author field; drag‑and‑drop reordering and moving between columns.
- **E3** Real‑time Collaboration: Broadcast all session changes (cards, column edits, moves, votes, clusters) to every connected participant with near‑real‑time latency; include reconnection and state‑replay logic.
- **E4** Voting & Grouping: Allow each participant a configurable number of votes, vote on cards or clusters, display vote counts, and enable creation of clusters (grouped cards) with titles.
- **E5** Action Item Management: Facilitator can turn any card/cluster into an action item, assign owner, due date, mark as done, and edit later; action items are always visible in a side list.
- **E6** Offline / Sync Fallback: If the WebSocket connection drops, the SPA continues to work via REST calls and automatically resynchronizes pending changes when the connection is restored.

## Architecture Diagram

```mermaid
flowchart LR
    subgraph Client
        SPA["React SPA"]
    end
    subgraph Server
        API["Express REST API"]
        WS["Socket.io Hub"]
        DB["PostgreSQL"]
    end
    SPA -->|HTTP (REST)| API
    SPA -->|WebSocket| WS
    API -->|CRUD Operations| DB
    WS -->|Realtime Updates| DB
    WS -->|Broadcast| SPA
```
