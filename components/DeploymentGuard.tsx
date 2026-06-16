"use client";

import { useEffect, useRef, useState } from "react";

const POLL_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

export function DeploymentGuard() {
  const initialBuildId = useRef<string | null>(null);
  const [needsRefresh, setNeedsRefresh] = useState(false);

  useEffect(() => {
    async function fetchBuildId(): Promise<string | null> {
      try {
        const res = await fetch("/api/version", { cache: "no-store" });
        if (!res.ok) return null;
        const { buildId } = await res.json();
        return typeof buildId === "string" ? buildId : null;
      } catch {
        return null;
      }
    }

    fetchBuildId().then((id) => {
      if (id) initialBuildId.current = id;
    });

    const interval = setInterval(async () => {
      if (!initialBuildId.current) return;
      const id = await fetchBuildId();
      if (id && id !== initialBuildId.current) {
        setNeedsRefresh(true);
      }
    }, POLL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  if (!needsRefresh) return null;

  return (
    <div
      role="status"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-xl bg-indigo-600 px-5 py-3 text-sm text-white shadow-xl"
    >
      <span>This page has been updated.</span>
      <button
        onClick={() => window.location.reload()}
        className="font-bold underline hover:no-underline"
      >
        Reload
      </button>
    </div>
  );
}
