const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = 'prj_VecRG4GhWhnWtYwDVUmcyzq6OxM8';

const files = [
  'package.json',
  'package-lock.json', 
  'next.config.ts',
  'tsconfig.json',
  'tailwind.config.ts',
  'src/app/page.tsx',
  'src/app/layout.tsx',
  'src/app/globals.css'
];

async function createDeployment() {
  // First, get the deployment prefs
  const prefsRes = await fetch(`https://api.vercel.com/v6/deployments/prefs?projectId=${PROJECT_ID}`, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  const prefs = await prefsRes.json();
  
  console.log('Got prefs:', prefs);
  
  // Create deployment
  const deploymentRes = await fetch('https://api.vercel.com/v1/deployments', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'marcel-cv',
      project: PROJECT_ID,
      framework: 'nextjs',
      gitSource: {
        type: 'github',
        repo: 'iamaeon99/marcel-cv',
        ref: 'master'
      },
      // Skip git commit check
      skipGitConnect: true
    })
  });
  
  const deployment = await deploymentRes.json();
  console.log('Deployment:', deployment);
}

createDeployment().catch(console.error);
