export function GET() {
  return Response.json({
    status: "ok",
    service: "allservice-almaty",
    timestamp: new Date().toISOString(),
  });
}
