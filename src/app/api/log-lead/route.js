// src/app/api/log-lead/route.js
export async function POST(req) {
  const body = await req.json();
  console.log('Lead Captured:', body);

  // TODO: Save to file or DB later
  return new Response(JSON.stringify({ success: true }));
}
