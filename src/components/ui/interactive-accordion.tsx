"use client";

import { useId, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  number: string;
  title: string;
  content: ReactNode;
}

interface UniqueAccordionProps {
  items: AccordionItem[];
  /** Item aberto na primeira renderização. `null` abre nenhum. */
  defaultOpenId?: string | null;
  className?: string;
}

export function UniqueAccordion({
  items,
  defaultOpenId = items[0]?.id ?? null,
  className,
}: UniqueAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultOpenId);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const uid = useId();

  return (
    <div className={cn("w-full", className)}>
      <div className="space-y-0">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isHovered = hoveredId === item.id;
          const painelId = `${uid}-${item.id}-painel`;
          const botaoId = `${uid}-${item.id}-botao`;

          return (
            <div key={item.id}>
              <motion.button
                type="button"
                id={botaoId}
                aria-expanded={isActive}
                aria-controls={painelId}
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                className="w-full group relative text-left cursor-pointer"
                initial={false}
              >
                <div className="flex items-center gap-4 sm:gap-6 py-5 px-1">
                  {/* Número, com o círculo que cresce ao abrir */}
                  <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-foreground"
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isHovered ? 0.85 : 0,
                        opacity: isActive ? 1 : isHovered ? 0.1 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                    <motion.span
                      className="relative z-10 text-sm font-display font-semibold tracking-wide tabular-nums"
                      animate={{ color: isActive ? "var(--on-invert)" : "var(--text-2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.number}
                    </motion.span>
                  </div>

                  <motion.h3
                    className="text-lg sm:text-xl md:text-2xl font-display font-bold tracking-tight text-balance"
                    animate={{
                      x: isActive || isHovered ? 4 : 0,
                      color: isActive || isHovered ? "var(--text)" : "var(--text-2)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    {item.title}
                  </motion.h3>

                  <div className="ml-auto flex items-center gap-3 shrink-0">
                    <motion.div
                      className="flex items-center justify-center w-8 h-8"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-foreground"
                        aria-hidden="true"
                        animate={{ opacity: isActive || isHovered ? 1 : 0.4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          initial={false}
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>

                {/* Régua base + a que se preenche conforme o estado */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-foreground origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    id={painelId}
                    role="region"
                    aria-labelledby={botaoId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="pl-4 sm:pl-14 md:pl-16 pr-2 md:pr-12 py-6 text-muted-foreground leading-relaxed max-w-[68ch]"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      {item.content}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
