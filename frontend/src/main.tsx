import { ProductionRenderer } from "./production/ProductionRenderer";
import { acquireProductionRendererRuntime, hasProductionRendererRuntime, mountProductionRenderer, requireProductionRendererMount } from "./production/bootstrap";
import { PRODUCTION_RENDERER_GAPS } from "./production/evidence";
import { RootShellErrorBoundary } from "./recovered/features/window-chrome/root-shell-state";

const capabilities = [
  {
    number: "01",
    title: "Inference router",
    body: "Readable boundaries for Cursor, Claude Code, Codex, and OpenRouter routing, including streamed responses and tool execution.",
    tag: "HOST"
  },
  {
    number: "02",
    title: "Local execution",
    body: "A coordinator and host boundary designed around owned local work, with optional Docker-backed sandbox lifecycle controls.",
    tag: "RUNTIME"
  },
  {
    number: "03",
    title: "Renderer recovery",
    body: "A typed React surface reconstructed from inspectable UI, state, CSS, and protocol evidence in the shipped 0.18 application.",
    tag: "UI"
  }
] as const;

function WebDeployment() {
  return (
    <main className="web-deployment">
      <div className="web-deployment__glow" aria-hidden="true" />
      <nav className="web-nav" aria-label="Primary navigation">
        <a className="web-brand" href="#top" aria-label="Grok Bot reconstruction home">
          <span className="web-brand__mark" aria-hidden="true">G</span>
          <span>GROK BOT / 0.18</span>
        </a>
        <div className="web-nav__links">
          <a href="#architecture">Architecture</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#provenance">Provenance</a>
        </div>
        <span className="web-status"><i /> WEB BUILD</span>
      </nav>

      <section className="web-hero" id="top">
        <div className="web-hero__copy">
          <p className="web-eyebrow"><span>RESEARCH RECONSTRUCTION</span><span>WEB COMPANION</span></p>
          <h1>A desktop agent,<br /><em>reconstructed</em> in the open.</h1>
          <p className="web-hero__lede">A source-oriented study of Grok Bot 0.18—its Electron shell, agent runtime, local execution model, and polished React interface.</p>
          <div className="web-actions">
            <a className="web-button web-button--primary" href="#architecture">Explore the system <span aria-hidden="true">↘</span></a>
            <a className="web-button" href="#capabilities">View capabilities <span aria-hidden="true">→</span></a>
          </div>
          <p className="web-disclaimer">Unofficial and independent. Not affiliated with or endorsed by Anysphere.</p>
        </div>

        <div className="web-console" aria-label="System architecture preview">
          <div className="web-console__topbar">
            <div className="web-console__lights"><i /><i /><i /></div>
            <span>runtime-map.ts</span>
            <span>READ ONLY</span>
          </div>
          <div className="web-console__body">
            <div className="web-map-node web-map-node--shell">
              <span className="web-map-node__icon">⌁</span>
              <div><small>01 / SHELL</small><strong>Electron + React</strong></div>
              <b>LIVE</b>
            </div>
            <div className="web-map-line"><span>typed IPC</span></div>
            <div className="web-map-node web-map-node--host">
              <span className="web-map-node__icon">◈</span>
              <div><small>02 / HOST</small><strong>Coordinator runtime</strong></div>
              <b>ACTIVE</b>
            </div>
            <div className="web-map-branches" aria-hidden="true"><i /><i /><i /></div>
            <div className="web-map-grid">
              <div><small>MODEL</small><strong>Router</strong><span>4 providers</span></div>
              <div><small>TOOLS</small><strong>MCP</strong><span>Plugin bridge</span></div>
              <div><small>BOX</small><strong>Local VM</strong><span>Docker ready</span></div>
            </div>
            <div className="web-console__trace"><i /><span>trace_018</span><code>protocol_v1.ready</code><b>42ms</b></div>
          </div>
        </div>
      </section>

      <section className="web-section" id="architecture">
        <div className="web-section__heading">
          <p className="web-eyebrow">SYSTEM / 01</p>
          <h2>Built from the inside out.</h2>
          <p>The reconstruction keeps native boundaries explicit instead of flattening them into a mock application.</p>
        </div>
        <div className="web-flow" aria-label="Reconstructed application layers">
          <article><span>01</span><h3>Renderer</h3><p>React, conversation state, settings, plugins, and responsive workspace surfaces.</p><code>frontend/</code></article>
          <article><span>02</span><h3>Desktop</h3><p>Secure preload contracts, lifecycle ownership, settings, secrets, and update boundaries.</p><code>electron-main/</code></article>
          <article><span>03</span><h3>Runtime</h3><p>Agent coordination, streaming turns, local execution, and provider routing.</p><code>host/</code></article>
          <article><span>04</span><h3>Toolchain</h3><p>Deterministic compilation, audits, packaging, and verification around pinned inputs.</p><code>scripts/</code></article>
        </div>
      </section>

      <section className="web-section web-section--capabilities" id="capabilities">
        <div className="web-section__heading">
          <p className="web-eyebrow">CAPABILITIES / 02</p>
          <h2>What the reconstruction covers.</h2>
          <p>Three focused systems connect the visible interface to the agent runtime beneath it.</p>
        </div>
        <div className="web-capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <div><span>{capability.number}</span><small>{capability.tag}</small></div>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="web-provenance" id="provenance">
        <div>
          <p className="web-eyebrow">PROVENANCE / 03</p>
          <h2>Evidence before invention.</h2>
        </div>
        <p>This project treats the immutable public release as its specification. Recovered behavior is accepted only when it can be tied to an inspectable artifact, protocol contract, or repeatable observation.</p>
        <div className="web-provenance__stats">
          <span><strong>0.18.0</strong>Pinned release</span>
          <span><strong>TypeScript</strong>Readable source</span>
          <span><strong>React 19</strong>Renderer stack</span>
        </div>
      </section>

      <footer className="web-footer">
        <span>GROK BOT / SOURCE-ORIENTED RECONSTRUCTION</span>
        <span>DEPLOYED AS A STATIC WEB COMPANION</span>
      </footer>
    </main>
  );
}

const mount = requireProductionRendererMount(document.getElementById("root"));
if (hasProductionRendererRuntime(window)) {
  const runtime = acquireProductionRendererRuntime(window);
  mountProductionRenderer(mount, <RootShellErrorBoundary><ProductionRenderer {...runtime} /></RootShellErrorBoundary>);
} else {
  mountProductionRenderer(mount, <WebDeployment />);
}

const reportHealth = async () => {
  const health = {
    ready: mount.childElementCount > 0,
    title: document.title,
    url: location.href,
    preload: hasProductionRendererRuntime(window),
    sourceComposed: true,
    upstreamEntry: false,
    cleanEntrypoint: "frontend/src/main.tsx",
    recoveredEntrypoints: 5,
    viteClient: import.meta.hot != null,
    surfaces: hasProductionRendererRuntime(window) ? ["shell", "account", "sign-in", "conversation", "transcript", "composer", "sidebar", "agents", "settings", "plugins", "updates", "deep-links", "desktop-bridge"] : ["web-companion", "architecture", "capabilities", "provenance"],
    evidenceGaps: Object.keys(PRODUCTION_RENDERER_GAPS)
  };
  try {
    await fetch("/__reconstructed_health", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(health)
    });
  } catch {
    // The health endpoint is available only in the reconstruction development host.
  }
};
window.requestAnimationFrame(() => void reportHealth());

if (import.meta.hot) {
  import.meta.hot.accept();
}
