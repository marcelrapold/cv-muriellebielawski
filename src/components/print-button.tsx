"use client";

import { Printer } from "lucide-react";
import { cn } from "@/lib/utils";

export function PrintButton({ className }: { className?: string }) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className={cn(
        "h-9 w-9 p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors relative flex items-center justify-center",
        className
      )}
      aria-label="CV drucken"
      title="Drucken"
    >
      <Printer className="w-4 h-4" />
    </button>
  );
}
