interface Env {
  ASSETS: { fetch(req: Request): Promise<Response> }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (request.method === 'POST' && url.pathname === '/api/contact') {
      return handleContact(request, env)
    }

    // Serve static assets with SPA fallback
    const assetResponse = await env.ASSETS.fetch(request)
    if (assetResponse.status !== 404) {
      return assetResponse
    }
    const fallbackUrl = new URL('/index.html', request.url)
    return env.ASSETS.fetch(new Request(fallbackUrl, request))
  },
}

async function handleContact(request: Request, _env: Env): Promise<Response> {
  let body: { name?: string; email?: string; message?: string }
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  const { name, email, message } = body
  if (!name || !email || !message) {
    return json({ error: 'Missing required fields' }, 400)
  }

  const res = await fetch('https://formsubmit.co/ajax/geojimj@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Contact form message from ${name}`,
      _replyto: email,
    }),
  })

  const result = ((await res.json()) as { success: string; message?: string })
  if (result.success !== 'true') {
    console.error('FormSubmit error:', result.message)
    return json({ error: 'Failed to send message' }, 500)
  }

  return json({ ok: true })
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
