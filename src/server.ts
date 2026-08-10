// src/server.ts
import express, { Request, Response } from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import pino from 'pino';
import pinoHttp from 'pino-http';
import path from 'path';

// Initialize logger
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

// Create Express app
const app = express();
app.use(express.json());
app.use(pinoHttp({ logger }));

// Serve static files (frontend SPA) from the "public" directory if it exists
const publicDir = path.resolve(__dirname, '..', 'public');
app.use(express.static(publicDir));

// Simple health check route
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Placeholder for other REST routes – in a full implementation these would be imported
// e.g., app.use('/api/sessions', sessionsRouter);

// Create HTTP server
const httpServer = http.createServer(app);

// Initialize Socket.io on the same HTTP server
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  logger.info(`Socket.io client connected: ${socket.id}`);
  // Echo test event – useful for integration tests
  socket.on('ping', () => {
    socket.emit('pong');
  });
});

/**
 * Starts the server on the given port.
 * Returns the underlying HTTP server instance so callers can close it in tests.
 */
export function startServer(port: number = 3000): http.Server {
  httpServer.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
  });
  return httpServer;
}

// If this module is executed directly, start the server.
if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  startServer(port);
}
