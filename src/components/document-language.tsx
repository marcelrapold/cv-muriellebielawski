"use client";

import { useEffect } from "react";

export function DocumentLanguage({ lang }: { lang: "de" | "en" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
