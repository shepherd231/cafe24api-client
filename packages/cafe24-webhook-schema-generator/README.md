# cafe24-webhook-schema-generator

Web scraper for Cafe24 Webhook documentation page.

## Entrypoints

- `bin/run/index.js`: Runs `scripts/run.ts` using CLI and outputs the result to the specified output path.
- `scripts/run.ts`: Calls `src/runner.ts:run` and assigns result to `window.__result` for returning the result to the node process from the browser context.
- `src/runner.ts:run`: Scrapes the API Index page and returns the result.

## Building & Bundling

See `projects.json::targets::build` for how building and bundling process works.

