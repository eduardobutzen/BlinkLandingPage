"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  /** Foto opcional. Sem ela, o avatar mostra as iniciais. */
  image?: string;
};

function iniciais(nome: string) {
  const partes = nome.replace(/\./g, "").trim().split(/\s+/);
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <figure
                  className="p-8 rounded-3xl border border-border bg-card max-w-xs w-full"
                  key={i}
                  // A segunda volta existe só para emendar o loop: não deve ser lida de novo.
                  aria-hidden={index === 1 || undefined}
                >
                  <blockquote className="text-muted-foreground">{text}</blockquote>
                  <figcaption className="flex items-center gap-3 mt-5">
                    {image ? (
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt=""
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <span className="tavatar" aria-hidden="true">
                        {iniciais(name)}
                      </span>
                    )}
                    <span className="flex flex-col">
                      <span className="font-display font-semibold tracking-tight leading-5">
                        {name}
                      </span>
                      <span className="text-sm leading-5 text-muted-foreground tracking-tight">
                        {role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
