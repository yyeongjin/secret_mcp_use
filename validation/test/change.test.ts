import assert from "node:assert/strict";
import test from "node:test";
import { fallbackBeforeCommit } from "../src/change.ts";

test("an unchanged manual dispatch does not replay the HEAD parent diff", () => {
  assert.equal(fallbackBeforeCommit("workflow_dispatch", "current", "parent"), "current");
});

test("push events retain the event or parent change boundary", () => {
  assert.equal(fallbackBeforeCommit("push", "current", "parent"), "parent");
  assert.equal(fallbackBeforeCommit("push", "root", null), null);
});
