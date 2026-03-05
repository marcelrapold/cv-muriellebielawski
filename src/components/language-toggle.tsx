"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeLang, setActiveLang] = useState<"de" | "en">("de");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    setActiveLang(params.get("lang") === "en" ? "en" : "de");
  }, []);

  const setLang = (lang: "de" | "en") => {
    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );
    params.set("lang", lang);
    setActiveLang(lang);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const toggleLang = () => {
    setLang(activeLang === "de" ? "en" : "de");
  };

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={cn(
        "h-9 w-9 p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors relative flex items-center justify-center",
        className
      )}
      aria-label={`Sprache wechseln zu ${activeLang === "de" ? "EN" : "DE"}`}
      title={`Switch to ${activeLang === "de" ? "EN" : "DE"}`}
    >
      <span
        className="text-[11px] font-semibold leading-none tracking-wide text-center"
        aria-hidden="true"
      >
        {activeLang === "de" ? "DE" : "EN"}
      </span>
    </button>
  );
}
