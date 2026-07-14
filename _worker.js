// Password gate for the prototype. Change PASS below and redeploy to rotate.
const USER = "vfit";
const PASS = "pulse2026";

export default {
  async fetch(request, env) {
    const expected = "Basic " + btoa(USER + ":" + PASS);
    const got = request.headers.get("Authorization") || "";
    if (got !== expected) {
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
