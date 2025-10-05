import { createServer } from 'http';
import type { Express } from 'express';

export async function registerRoutes(app: Express) {
  // No API routes needed for this portfolio website
  // Add any API routes here if required in the future

  return createServer(app);
}
