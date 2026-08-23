"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes hydration guard
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-16 items-center rounded-full border border-border bg-bg-alt px-1 transition-colors"
    >
      <motion.span
        className="flex h-7 w-7 items-center justify-center rounded-full bg-card shadow-sm"
        animate={{ x: isDark ? 26 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-aqua" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-teal" />
        )}
      </motion.span>
    </button>
  );
}
