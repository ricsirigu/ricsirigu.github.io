const zoneId = process.env.CLOUDFLARE_ZONE_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;

if (!zoneId || !apiToken) {
  console.log('Cloudflare cache purge skipped: CLOUDFLARE_ZONE_ID or CLOUDFLARE_API_TOKEN is not configured.');
  process.exit(0);
}

const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ purge_everything: true })
});

const result = await response.json();
if (!response.ok || !result.success) {
  throw new Error(`Cloudflare cache purge failed (${response.status}): ${JSON.stringify(result.errors || result)}`);
}

console.log('Cloudflare cache purged successfully.');
