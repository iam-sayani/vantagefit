// Password gate for the prototype. Only the password matters; username can be
// anything (or left blank). Change PASS below and redeploy to rotate.
const PASS = "welcome";

export default {
  async fetch(request, env) {
    const got = request.headers.get("Authorization") || "";
    let ok = false;
    if (got.startsWith("Basic ")) {
      try {
        const decoded = atob(got.slice(6));
        const pass = decoded.slice(decoded.indexOf(":") + 1);
        ok = pass === PASS;
      } catch (e) { ok = false; }
    }
    if (!ok) {
      return new Response("This is a private prototype. Enter the password to continue.", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Vantage Fit prototype", charset="UTF-8"',
          "X-Robots-Tag": "noindex, nofollow",
          "Cache-Control": "no-store",
        },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
