// Uses Node's built-in test runner (Node 18+) — no extra dependencies needed,
// which keeps the CI pipeline fast and simple to demo.
const test = require('node:test');
const assert = require('node:assert');

test('APP_VERSION defaults to a non-empty string', () => {
  const version = process.env.APP_VERSION || '1.0.0';
  assert.ok(version.length > 0, 'version should not be empty');
});

test('APP_COLOR defaults to a valid hex color', () => {
  const color = process.env.APP_COLOR || '#0B2545';
  assert.match(color, /^#[0-9a-fA-F]{6}$/, 'color should be a 6-digit hex code');
});

test('sanity check so the pipeline has something to run', () => {
  assert.strictEqual(1 + 1, 2);
});
