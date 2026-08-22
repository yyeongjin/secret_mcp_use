const sectionIds = Array.from({ length: 19 }, (_, index) => `S${String(index + 1).padStart(2, "0")}`);

function classify(status) {
  if (status === "PASS" || status === "CACHED_PASS") return "pass";
  if (status === "DOCUMENT_GAP" || status === "PATCH_REQUIRED") return "gap";
  if (status === "UNKNOWN") return "unknown";
  if (status?.startsWith("FAILED")) return "failed";
  return "blocked";
}

function renderGrid(element, outputs, statusKey = "status") {
  const byId = new Map((outputs ?? []).filter(Boolean).map((item) => [item.sectionId, item]));
  element.replaceChildren(...sectionIds.map((sectionId) => {
    const item = byId.get(sectionId);
    const status = item?.[statusKey] ?? "NOT_RUN";
    const node = document.createElement("article");
    node.className = `node ${classify(status)}`;
    const id = document.createElement("strong");
    id.textContent = sectionId;
    const result = document.createElement("span");
    result.textContent = status;
    node.append(id, result);
    return node;
  }));
}

function metric(value, label) {
  const item = document.createElement("div");
  item.className = "metric";
  const count = document.createElement("strong");
  count.textContent = String(value ?? 0);
  const caption = document.createElement("span");
  caption.textContent = label;
  item.append(count, caption);
  return item;
}

async function refresh() {
  try {
    const response = await fetch("/api/pipeline", { cache: "no-store" });
    if (!response.ok) throw new Error((await response.json()).error ?? `HTTP ${response.status}`);
    const data = await response.json();
    const summary = data.pipeline?.summaries?.[0];
    if (!summary) throw new Error("The artifact contains no target summary.");
    document.querySelector("#connection").textContent = "Artifact connected";
    document.querySelector("#run-id").textContent = summary.runId;
    document.querySelector("#target").textContent = summary.targetId;
    document.querySelector("#trigger").textContent = summary.triggerPath;
    const metrics = document.querySelector("#metrics");
    metrics.replaceChildren(
      metric(summary.documentAuditRequests, "Stage 1 requests"),
      metric(summary.implementationAuditRequests, "Stage 2 requests"),
      metric(summary.totalLogicalAuditRequests, "Total primary requests"),
    );
    const documentOutputs = data.documentMatrix?.sections ?? summary.nodes?.map((node) => ({
      sectionId: node.sectionId,
      status: node.documentAuditStatus,
    }));
    const implementationOutputs = data.implementationMatrix?.sections ?? summary.nodes?.map((node) => ({
      sectionId: node.sectionId,
      status: node.auditStatus,
    }));
    renderGrid(document.querySelector("#document-grid"), documentOutputs);
    renderGrid(document.querySelector("#implementation-grid"), implementationOutputs);
    document.querySelector("#document-total").textContent = `${documentOutputs?.length ?? 0} / 19`;
    document.querySelector("#implementation-total").textContent = `${implementationOutputs?.length ?? 0} / 19`;
    document.querySelector("#error").hidden = true;
  } catch (error) {
    document.querySelector("#connection").textContent = "Artifact unavailable";
    const target = document.querySelector("#error");
    target.textContent = error instanceof Error ? error.message : String(error);
    target.hidden = false;
  }
}

await refresh();
setInterval(refresh, 3000);
