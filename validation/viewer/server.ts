import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const repositoryRoot = process.cwd();
const dataRoot = path.resolve(repositoryRoot, process.env.PIPELINE_VIEWER_DATA_ROOT ?? ".validation-runs/current");
const publicRoot = path.join(repositoryRoot, "validation/viewer/public");
const port = Number(process.env.PIPELINE_VIEWER_PORT ?? "4318");

async function optionalJson(pathname: string): Promise<unknown | null> {
  try {
    return JSON.parse(await readFile(pathname, "utf8")) as unknown;
  } catch {
    return null;
  }
}

async function pipelinePayload(): Promise<unknown> {
  const pipeline = await optionalJson(path.join(dataRoot, "pipeline-summary.json")) as {
    summaries?: Array<{ runId?: string }>;
  } | null;
  if (!pipeline) throw new Error(`pipeline-summary.json was not found under ${dataRoot}`);
  const runId = pipeline.summaries?.[0]?.runId;
  const runRoot = runId ? path.join(dataRoot, "runs", runId) : null;
  return {
    dataRoot,
    pipeline,
    documentMatrix: runRoot ? await optionalJson(path.join(runRoot, "document-audit-matrix.json")) : null,
    implementationMatrix: runRoot ? await optionalJson(path.join(runRoot, "audit-matrix.json")) : null,
    documentManifest: runRoot ? await optionalJson(path.join(runRoot, "document-audit-batch-manifest.json")) : null,
    implementationManifest: runRoot ? await optionalJson(path.join(runRoot, "implementation-audit-batch-manifest.json")) : null,
  };
}

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);
    if (url.pathname === "/api/pipeline") {
      response.writeHead(200, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
      response.end(JSON.stringify(await pipelinePayload()));
      return;
    }
    const requestPath = url.pathname === "/" ? "/index.html" : url.pathname;
    const pathname = path.resolve(publicRoot, `.${requestPath}`);
    if (!pathname.startsWith(`${publicRoot}${path.sep}`)) throw new Error("Invalid viewer path.");
    await stat(pathname);
    response.writeHead(200, { "content-type": contentTypes[path.extname(pathname)] ?? "application/octet-stream" });
    createReadStream(pathname).pipe(response);
  } catch (error) {
    response.writeHead(404, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ error: error instanceof Error ? error.message : String(error) }));
  }
}).listen(port, "127.0.0.1", () => {
  process.stdout.write(`Pipeline viewer: http://127.0.0.1:${port}\nData root: ${dataRoot}\n`);
});
