import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-dynamic";

export function GET() {
  let buildId = "development";
  try {
    buildId = readFileSync(
      join(process.cwd(), ".next/BUILD_ID"),
      "utf-8",
    ).trim();
  } catch {
    // Not in a built environment (local dev) — return default
  }
  return Response.json({ buildId });
}
