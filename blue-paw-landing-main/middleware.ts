import { next } from "@vercel/edge";

// Edge Middleware runs on Vercel's network before any request reaches the app.
// We read Vercel's geo header and block the listed countries everywhere else
// the site stays fully available.
export const config = {
  // Run on every path EXCEPT Vercel internals and static assets, so the block
  // page is returned for real page navigations only.
  matcher: ["/((?!_next|_vercel|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js|woff2?|ttf|map)).*)"],
};

// ISO 3166-1 alpha-2 country codes to block. "PK" = Pakistan.
const BLOCKED_COUNTRIES = new Set(["PK"]);

export default function middleware(request: Request) {
  // Vercel injects the visitor's country here automatically.
  const country = request.headers.get("x-vercel-ip-country") ?? "";

  if (BLOCKED_COUNTRIES.has(country)) {
    return new Response(BLOCK_PAGE_HTML, {
      // 451 = "Unavailable For Legal Reasons" — the correct status for geo-blocks.
      status: 451,
      headers: {
        "content-type": "text/html; charset=utf-8",
        // Don't let CDNs/browsers cache the block across regions.
        "cache-control": "no-store",
      },
    });
  }

  // Everyone else continues to the site normally.
  return next();
}

const BLOCK_PAGE_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Not available in your region</title>
    <style>
      :root { color-scheme: light dark; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        background: #0b0d12;
        color: #e7e9ee;
        text-align: center;
        padding: 24px;
      }
      .card { max-width: 460px; }
      h1 { font-size: 1.5rem; margin: 0 0 12px; }
      p { margin: 0; line-height: 1.6; color: #9aa1ad; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This site isn't available in your region</h1>
      <p>We're sorry, but access to this website is currently restricted in your location.</p>
    </div>
  </body>
</html>`;
