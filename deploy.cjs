const TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const GITHUB_REPO = process.env.DEPLOY_GITHUB_REPO;
const GITHUB_REF = process.env.DEPLOY_GITHUB_REF || "main";

async function createDeployment() {
  if (!TOKEN) {
    throw new Error("Missing VERCEL_TOKEN.");
  }

  if (!PROJECT_ID) {
    throw new Error("Missing VERCEL_PROJECT_ID.");
  }

  if (!GITHUB_REPO) {
    throw new Error("Missing DEPLOY_GITHUB_REPO.");
  }

  const deploymentRes = await fetch("https://api.vercel.com/v1/deployments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "murielle-cv",
      project: PROJECT_ID,
      framework: "nextjs",
      gitSource: {
        type: "github",
        repo: GITHUB_REPO,
        ref: GITHUB_REF,
      },
      skipGitConnect: true,
    }),
  });

  const deployment = await deploymentRes.json();
  console.log("Deployment:", deployment);
}

createDeployment().catch(console.error);
