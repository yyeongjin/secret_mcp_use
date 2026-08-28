import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import YAML from "yaml";

interface WorkflowStep {
  name?: string;
  id?: string;
  run?: string;
}

test("a broken baseline is recorded without bypassing patched-worktree verification", async () => {
  const source = await readFile(".github/workflows/validate-design-index.yml", "utf8");
  const workflow = YAML.parse(source) as {
    jobs: {
      validate: { steps: WorkflowStep[] };
      "persist-state": { if: string };
    };
  };
  const baseline = workflow.jobs.validate.steps.find((step) => step.id === "frontend-baseline");
  assert.ok(baseline?.run);
  assert.match(baseline.run, /npm run test:frontend/);
  assert.match(baseline.run, /status=\$\?/);
  assert.match(baseline.run, /exit 0/);

  const audit = workflow.jobs.validate.steps.find((step) => (
    step.name === "Run isolated audit, patch guards, tests, and optional draft PR publication"
  ));
  assert.match(audit?.run ?? "", /npm run audit/);
  assert.equal(workflow.jobs["persist-state"].if, "needs.validate.result == 'success'");

  const worktreeSource = await readFile("validation/src/worktree.ts", "utf8");
  assert.match(worktreeSource, /runCommand\("npm", \["run", "test:frontend"\]/);
  assert.match(worktreeSource, /\["apply", "--unidiff-zero", "--whitespace=error-all"/);
});
