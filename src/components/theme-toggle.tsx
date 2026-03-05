"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    const params = new URLSearchParams(window.location.search)
    const queryTheme = params.get("theme")
    if (queryTheme === "light" || queryTheme === "dark") {
      setTheme(queryTheme)
    }
  }, [setTheme])

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme)

    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    )
    params.set("theme", nextTheme)
    const query = params.toString()
    router.replace(query ? `${pathname}?${query}` : pathname)
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors relative",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
