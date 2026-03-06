"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({
  className,
  locale = "en",
}: {
  className?: string
  locale?: "de" | "en"
}) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (!mounted) {
      return
    }
    const currentTheme = resolvedTheme ?? theme ?? "dark"
    const nextTheme = currentTheme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
  }

  const currentTheme = resolvedTheme ?? theme ?? "dark"
  const nextTheme = currentTheme === "dark" ? "light" : "dark"
  const genericLabel = locale === "de" ? "Design wechseln" : "Toggle theme"
  const label = !mounted
    ? genericLabel
    : locale === "de"
      ? nextTheme === "light"
        ? "Helles Design aktivieren"
        : "Dunkles Design aktivieren"
      : nextTheme === "light"
        ? "Switch to light theme"
        : "Switch to dark theme"

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors relative",
        className
      )}
      aria-label={label}
      title={label}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
