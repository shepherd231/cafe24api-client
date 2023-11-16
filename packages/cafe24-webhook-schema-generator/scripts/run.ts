import { run } from '../src/runner';

declare global {
  interface Window {
    __result: ReturnType<typeof run>;
  }
}

/**
 * @description
 * As IIFE cannot return a vaule,
 * we need to assign the result to a global variable
 * and access it from outside.
 */
window.__result = run();
