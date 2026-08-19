const GITHUB_API = "https://api.github.com";

function githubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  if (!token || !repo) return null;
  const [owner, name] = repo.split("/");
  if (!owner || !name) return null;
  return { token, owner, name, branch: process.env.GITHUB_BRANCH || "main" };
}

export function isGitHubStorageEnabled() {
  return githubConfig() !== null;
}

export function getGitHubPostsRawUrl() {
  const cfg = githubConfig();
  if (!cfg) return null;
  return `https://raw.githubusercontent.com/${cfg.owner}/${cfg.name}/${cfg.branch}/data/posts.json`;
}

async function githubRequest(path: string, init: RequestInit = {}) {
  const cfg = githubConfig();
  if (!cfg) throw new Error("GitHub storage is not configured.");

  const res = await fetch(`${GITHUB_API}/repos/${cfg.owner}/${cfg.name}/contents/${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${cfg.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init.headers || {}),
    },
  });

  if (res.status === 404) return null;

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = typeof data.message === "string" ? data.message : `GitHub API error (${res.status})`;
    throw new Error(message);
  }
  return data;
}

export async function githubReadText(path: string): Promise<{ content: string; sha: string } | null> {
  const data = await githubRequest(path);
  if (!data) return null;
  const content = Buffer.from(data.content, data.encoding === "base64" ? "base64" : "utf8").toString("utf8");
  return { content, sha: data.sha };
}

export async function githubWriteText(path: string, content: string, message: string) {
  const cfg = githubConfig();
  if (!cfg) throw new Error("GitHub storage is not configured.");

  const existing = await githubReadText(path);
  const body = {
    message,
    content: Buffer.from(content, "utf8").toString("base64"),
    branch: cfg.branch,
    ...(existing?.sha ? { sha: existing.sha } : {}),
  };

  const res = await fetch(`${GITHUB_API}/repos/${cfg.owner}/${cfg.name}/contents/${path}`, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${cfg.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const messageText = typeof data.message === "string" ? data.message : `GitHub write failed (${res.status})`;
    throw new Error(messageText);
  }
}

export async function githubWriteBinary(path: string, buffer: Buffer, message: string) {
  const cfg = githubConfig();
  if (!cfg) throw new Error("GitHub storage is not configured.");

  const existing = await githubRequest(path);
  const body = {
    message,
    content: buffer.toString("base64"),
    branch: cfg.branch,
    ...(existing?.sha ? { sha: existing.sha } : {}),
  };

  const res = await fetch(`${GITHUB_API}/repos/${cfg.owner}/${cfg.name}/contents/${path}`, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${cfg.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const messageText = typeof data.message === "string" ? data.message : `GitHub write failed (${res.status})`;
    throw new Error(messageText);
  }
}
