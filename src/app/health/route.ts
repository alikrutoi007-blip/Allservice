export function GET() {
  return Response.json({
    status: "ok",
    service: "bari-jon-service",
    timestamp: new Date().toISOString(),
  });
}

