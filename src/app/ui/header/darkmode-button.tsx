"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

export default function DarkModeButton({}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="h-full w-fit">
        <button
          className="p-2"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <>
                <motion.div
                  key="dark"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ x: -10 }}
                >
                  <Image
                    src="/light-mode.svg"
                    alt="Light Mode Logo"
                    width={25}
                    height={25}
                  />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  key="light"
                  initial={{ x: 10 }}
                  animate={{ x: 0 }}
                  exit={{ x: 10 }}
                >
                  <Image
                    src="/dark-mode.svg"
                    alt="Dark Mode Logo"
                    width={25}
                    height={25}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </button>
      </div>
    </>
  );
}
