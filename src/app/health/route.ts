export function GET() {
  return Response.json({
    status: "ok",
    service: "mastertut-almaty",
    timestamp: new Date().toISOString(),
  });
}
