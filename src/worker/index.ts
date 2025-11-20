import type { Env } from '../shared/worker-configuration';
import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

export default app;
