import assert from "node:assert/strict";
import test from "node:test";
import { canonicalJson, hashJson, sha256 } from "../src/hash.ts";

test("canonical JSON and fingerprints are independent of object key order", () => {
  const left = { b: 2, a: { z: true, y: [3, 2, 1] } };
  const right = { a: { y: [3, 2, 1], z: true }, b: 2 };
  assert.equal(canonicalJson(left), canonicalJson(right));
  assert.equal(hashJson(left), hashJson(right));
  assert.match(sha256("test"), /^sha256:[a-f0-9]{64}$/);
});
