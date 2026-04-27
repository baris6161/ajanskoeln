"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-6 font-sans text-foreground">
        <h1 className="text-xl font-semibold">CRM — unerwarteter Fehler</h1>
        {error.digest ? (
          <p className="text-sm text-muted-foreground">Referenz: {error.digest}</p>
        ) : null}
        <button
          type="button"
          className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
          onClick={() => reset()}
        >
          Erneut versuchen
        </button>
      </body>
    </html>
  );
}
