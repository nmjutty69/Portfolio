/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useAnimate } from "motion/react";

type Phase =
  | "Idle"
  | "Bouncing"
  | "Username_NMJ69"
  | "Username_Full"
  | "Smoke"
  | "Email";

const TITLE_WORDS = [
  { text: "NAUMAN", startIdx: 0, counters: [1, 2, 3, 4, 5, 6] },
  { text: "MALIK", startIdx: 6, counters: [1, 2, 3, 4, 5] },
  { text: "JUTT", startIdx: 11, counters: [6, 7, 8, 9] },
];

const getCounterText = (i: number) => {
  if (i <= 5) return i + 1;
  if (i <= 10) return i - 5;
  return i - 5;
};

const SMOKE_PUFFS = [
  { x: -56, y: -16, size: 56, delay: 0 },
  { x: -28, y: 12, size: 72, delay: 0.08 },
  { x: 0, y: -28, size: 64, delay: 0.14 },
  { x: 34, y: 10, size: 78, delay: 0.04 },
  { x: 62, y: -12, size: 54, delay: 0.18 },
  { x: 8, y: 26, size: 86, delay: 0.12 },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type IntroLoaderProps = {
  loop?: boolean;
  onComplete?: () => void;
};

export default function IntroLoader({
  loop = true,
  onComplete,
}: IntroLoaderProps) {
  const [scope, animate] = useAnimate();
  const [phase, setPhase] = useState<Phase>("Idle");

  useEffect(() => {
    let active = true;

    const runIntro = async () => {
      while (active) {
        setPhase("Idle");

        if (scope.current) {
          animate("#sequence-wrapper", { opacity: 1 }, { duration: 0 });
          animate(
            "#anim-ball",
            { opacity: 0, scale: 1, filter: "blur(1px)", y: 0, x: 0 },
            { duration: 0 },
          );
        }

        await wait(500);
        if (!active) return;

        setPhase("Bouncing");

        await wait(100);
        if (!active) return;

        const container = document.getElementById("anim-container");
        if (!container) return;

        let lastTargetY = 0;

        for (let i = 0; i < 15; i += 1) {
          if (!active) return;

          const marker = document.getElementById(`letter-${i}`);
          if (!marker) continue;

          const cRect = container.getBoundingClientRect();
          const tRect = marker.getBoundingClientRect();
          const targetX = tRect.left + tRect.width / 2 - cRect.left - 6;
          const targetY = tRect.top - cRect.top - 12;

          lastTargetY = targetY;

          if (i === 0) {
            await animate(
              "#anim-ball",
              { x: targetX, y: targetY - 150, opacity: 1, scale: 1 },
              { duration: 0.01 },
            );
            await animate(
              "#anim-ball",
              { y: targetY },
              { duration: 0.35, ease: "easeIn" },
            );
          } else {
            const prevMarker = document.getElementById(`letter-${i - 1}`);
            if (!prevMarker) continue;

            const pRect = prevMarker.getBoundingClientRect();
            const prevY = pRect.top - cRect.top - 12;
            const isCrossingWord = i === 6 || i === 11;
            const peakHeight = isCrossingWord ? 120 : 60;
            const duration = isCrossingWord ? 0.45 : 0.28;

            animate("#anim-ball", { x: targetX }, { duration, ease: "linear" });
            await animate(
              "#anim-ball",
              { y: [prevY, Math.min(prevY, targetY) - peakHeight, targetY] },
              {
                duration,
                times: [0, 0.5, 1],
                ease: ["easeOut", "easeIn"],
              },
            );
          }

          animate(
            "#anim-ball",
            { scaleX: 1.5, scaleY: 0.5, y: targetY + 4 },
            { duration: 0.05 },
          ).then(() =>
            animate(
              "#anim-ball",
              { scaleX: 1, scaleY: 1, y: targetY },
              { duration: 0.1 },
            ),
          );

          animate(`#letter-${i}`, { opacity: 1 }, { duration: 0.01 });
          animate(
            `#letter-${i}-inner`,
            {
              filter: ["blur(12px)", "blur(0px)"],
              scale: [0.8, 1],
              textShadow: ["0 0 20px white", "0 0 0px white"],
            },
            { duration: 0.4, ease: "easeOut" },
          );
          animate(
            `#counter-${i}`,
            { opacity: 1, y: [10, 0] },
            { duration: 0.2, ease: "easeOut" },
          );

          if (i > 0 && i - 1 !== 5 && i - 1 !== 14) {
            animate(
              `#counter-${i - 1}`,
              { opacity: 0, y: 5 },
              { duration: 0.2 },
            );
          }

          await wait(40);
        }

        if (!active) return;

        await wait(150);
        if (!active) return;

        await animate(
          "#anim-ball",
          {
            opacity: 0,
            scale: 0,
            filter: "blur(10px)",
            y: lastTargetY - 30,
          },
          { duration: 0.4, ease: "easeOut" },
        );

        await wait(700);
        if (!active) return;

        setPhase("Username_NMJ69");

        await wait(1400);
        if (!active) return;

        setPhase("Username_Full");

        await wait(1300);
        if (!active) return;

        setPhase("Smoke");

        await wait(1000);
        if (!active) return;

        setPhase("Email");

        await wait(2000);
        if (!active) return;

        await animate(
          "#sequence-wrapper",
          { opacity: 0 },
          { duration: 1, ease: "easeInOut" },
        );

        if (!loop) {
          onComplete?.();
          return;
        }
      }
    };

    runIntro();

    return () => {
      active = false;
    };
  }, [animate, loop, onComplete, scope]);

  return (
    <div
      id="anim-container"
      ref={scope}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black font-sans text-white"
    >
      <motion.div
        id="sequence-wrapper"
        className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center"
      >
        <motion.div
          id="anim-ball"
          className="absolute left-0 top-0 z-50 h-3 w-3 origin-bottom rounded-full bg-white blur-[1px]"
          style={{
            opacity: 0,
            boxShadow: "0 0 15px 4px rgba(255,255,255,0.6)",
          }}
        />

        <LayoutGroup>
          <AnimatePresence>
            {phase === "Bouncing" && (
              <motion.div
                key="title-area"
                className="absolute inset-0 z-10 flex w-full flex-col items-center justify-center px-4"
              >
                <div
                  className="flex max-w-[min(92vw,1120px)] flex-wrap justify-center gap-x-6 gap-y-10 text-center text-4xl font-bold tracking-[0.14em] shadow-white/20 sm:gap-x-10 sm:text-5xl md:flex-nowrap md:gap-x-16 md:text-6xl md:tracking-[0.18em]"
                  style={{
                    textShadow: "0 0 15px rgba(255,255,255,0.4)",
                  }}
                >
                  {TITLE_WORDS.map((word) => (
                    <div key={word.text} className="relative flex gap-1 md:gap-2">
                      {word.counters.map((_, cIdx) => {
                        const i = word.startIdx + cIdx;

                        return (
                          <LetterBox key={i} i={i} char={word.text[cIdx]} />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {(phase === "Username_NMJ69" || phase === "Username_Full") && (
              <motion.div
                key="username-container"
                className="absolute z-20 flex flex-col items-center"
                exit={{
                  opacity: 0,
                  scale: 1.06,
                  y: -12,
                  filter: "blur(18px)",
                  transition: { duration: 0.75, ease: "easeOut" },
                }}
              >
                <motion.div
                  className="relative flex items-center rounded-xl px-6 py-4 text-3xl font-light tracking-widest text-white/90 sm:px-8 sm:text-4xl"
                  style={{ textShadow: "0 0 14px rgba(255,255,255,0.3)" }}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      type: "spring",
                      bounce: 0.4,
                    }}
                  >
                    @
                  </motion.span>
                  <motion.span
                    layoutId="letter-0"
                    className="font-medium drop-shadow-md"
                    transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
                  >
                    N
                  </motion.span>
                  <motion.span
                    layoutId="letter-6"
                    className="font-medium drop-shadow-md"
                    transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
                  >
                    M
                  </motion.span>
                  <motion.span
                    layoutId="letter-11"
                    className="font-medium drop-shadow-md"
                    transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
                  >
                    J
                  </motion.span>

                  <motion.div
                    className="flex items-center overflow-hidden"
                    initial={{ width: 0, opacity: 0, margin: 0 }}
                    animate={
                      phase === "Username_Full"
                        ? { width: "auto", opacity: 1, margin: "0 2px" }
                        : { width: 0, opacity: 0, margin: 0 }
                    }
                    transition={{ duration: 0.8, ease: "backOut" }}
                  >
                    <span className="text-3xl font-medium uppercase leading-none tracking-[0.1em] drop-shadow-md sm:text-4xl">
                      UTTY
                    </span>
                  </motion.div>

                  <motion.span
                    layout
                    layoutId="counter-5"
                    className="text-3xl font-medium drop-shadow-md sm:text-4xl"
                    transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
                  >
                    6
                  </motion.span>
                  <motion.span
                    layout
                    layoutId="counter-14"
                    className="text-3xl font-medium drop-shadow-md sm:text-4xl"
                    transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
                  >
                    9
                  </motion.span>
                </motion.div>
              </motion.div>
            )}

            {phase === "Smoke" && (
              <motion.div
                key="smoke-cloud"
                className="absolute z-30 flex h-40 w-80 items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {SMOKE_PUFFS.map((puff) => (
                  <motion.span
                    key={`${puff.x}-${puff.y}`}
                    className="absolute rounded-full bg-white/20 blur-2xl"
                    style={{ width: puff.size, height: puff.size }}
                    initial={{ opacity: 0, scale: 0.35, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 0.46, 0],
                      scale: [0.35, 1.25, 2.15],
                      x: [0, puff.x * 0.35, puff.x],
                      y: [0, puff.y * 0.15, puff.y - 34],
                      filter: [
                        "blur(12px)",
                        "blur(24px)",
                        "blur(34px)",
                      ],
                    }}
                    transition={{
                      duration: 0.95,
                      delay: puff.delay,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>
            )}

            {phase === "Email" && (
              <motion.div
                key="email-container"
                className="absolute z-20 flex flex-col items-center"
                initial={{ opacity: 0, y: 8, filter: "blur(16px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <div className="relative flex w-full flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      className="z-10 select-all text-xs font-light tracking-[0.26em] text-white/70 sm:text-sm sm:tracking-[0.32em]"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                    >
                      naumanjutt@gmail.com
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </motion.div>
    </div>
  );
}

function LetterBox({ i, char }: { i: number; char: string }) {
  const isKept = i === 0 || i === 6 || i === 11;
  const keepCounter = i === 5 || i === 14;
  const counterText = getCounterText(i);
  const exitDuration = 0.8 + (i % 5) * 0.08;

  return (
    <div id={`letter-marker-${i}`} className="relative flex flex-col items-center">
      <motion.span
        id={`letter-${i}`}
        className="relative shadow-white/20"
        style={{
          opacity: 0,
          textShadow: "0 0 15px rgba(255,255,255,0.4)",
        }}
        layoutId={isKept ? `letter-${i}` : undefined}
        exit={
          !isKept
            ? {
                opacity: [1, 0, 0],
                y: [0, -40, -100],
                scale: [1, 1.2, 0.5],
                filter: ["blur(0px)", "blur(4px)", "blur(12px)"],
                transition: {
                  duration: exitDuration,
                  ease: "easeIn",
                },
              }
            : undefined
        }
      >
        <span id={`letter-${i}-inner`} className="relative inline-block">
          <span className="relative z-10">{char}</span>
        </span>
      </motion.span>

      <motion.span
        id={`counter-${i}`}
        className="absolute top-full mt-4 font-mono text-sm font-semibold tracking-[0.18em] text-white/75 sm:text-base md:text-lg"
        style={{
          opacity: 0,
          textShadow: "0 0 12px rgba(255,255,255,0.45)",
        }}
        layoutId={keepCounter ? `counter-${i}` : undefined}
        exit={
          !keepCounter
            ? { opacity: 0, transition: { duration: 0.3 } }
            : undefined
        }
      >
        {counterText}
      </motion.span>
    </div>
  );
}
