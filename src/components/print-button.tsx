"use client";

import { Printer } from "lucide-react";
import { cn } from "@/lib/utils";

export function PrintButton({
  className,
  locale = "en",
}: {
  className?: string;
  locale?: "de" | "en";
}) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const label = locale === "de" ? "CV drucken" : "Print CV";

  return (
    <button
      type="button"
      onClick={handlePrint}
      className={cn(
        "h-9 w-9 p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors relative flex items-center justify-center",
        className
      )}
      aria-label={label}
      title={label}
    >
      <Printer className="w-4 h-4" />
    </button>
  );
}
