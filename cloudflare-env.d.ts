// The D1 database binding is injected by the hosting platform at deploy time, so it is
// not declared in wrangler.jsonc and `wrangler types` cannot generate it. Declare it here.
declare namespace Cloudflare {
  interface Env {
    DB: D1Database;
  }
}
