import { logger } from "@/lib/logger";

export async function GET() {
  /* logger.info("health_check_called");

  return Response.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  }); */
  logger.error("health_check_failed");
  return new Response("error", { status: 500 });
}
