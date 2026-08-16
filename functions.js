/** Optional Playgrounds stub. */
export default {
  async fetch(request) {
    return Response.json({ ok: true, name: "pg-sealedbid", path: new URL(request.url).pathname });
  },
};
