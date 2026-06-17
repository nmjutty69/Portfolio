"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const asset = (path: string) => `/prolens-assets/${path}`;

const ROLES = [
  {
    number: "1",
    title: "Multi Stack Developer",
    color: "#d8dde3",
    body: "Building robust, scalable full-stack applications with backend architecture, API development, and modern frontend systems.",
  },
  {
    number: "2",
    title: "AI & Intelligent Systems",
    color: "#9fc0cf",
    body: "Developing voice chatbots, context-aware assistants, and LLM-powered agents using RAG and embedding models.",
  },
  {
    number: "3",
    title: "Healthcare Software Builder",
    color: "#dcf438",
    body: "Creating secure EMR systems, interactive charting tools, telemedicine workflows, and role-based healthcare platforms.",
  },
  {
    number: "4",
    title: "React.JS Developer",
    color: "#805db1",
    body: "Crafting responsive, data-driven interfaces with React, Next.js, Tailwind CSS, real-time modules, and clean frontend architecture.",
  },
];

const PROJECTS = [
  {
    title: "Digital Competency Assessment System",
    category: "Assessment Platform",
    year: "2025",
    roles: [
      { label: "Healthcare", tone: "silver" },
      { label: "AI Automation", tone: "blue" },
    ],
    image: asset("images/project-preview-01.png"),
    logo: asset("images/project-logo-01.svg"),
    surface: "white",
  },
  {
    title: "Oradentix",
    category: "Dental Management Software",
    year: "2025",
    roles: [
      { label: "Dental EMR", tone: "blue" },
      { label: "2D/3D Charting", tone: "purple" },
    ],
    image: asset("images/project-preview-03.png"),
    logo: asset("images/project-logo-02.svg"),
    surface: "gray",
  },
  {
    title: "Telemedicine Platform",
    category: "Multilingual healthcare platform",
    year: "2025",
    roles: [
      { label: "Healthcare", tone: "lime" },
      { label: "Multilingual", tone: "silver" },
    ],
    image: asset("images/project-preview-02.png"),
    logo: asset("images/project-logo-03.svg"),
    surface: "white",
  },
  {
    title: "AI Chatbots & Intelligent Systems",
    category: "Intelligent automation and LLM workflows",
    year: "2025",
    roles: [
      { label: "Voice AI", tone: "purple" },
      { label: "LLMs & RAG", tone: "silver" },
    ],
    image: asset("images/project-preview-04.png"),
    logo: asset("images/project-logo-01.svg"),
    surface: "gray",
  },
];

const CASE_STUDIES = [
  {
    title: "Workflow Intelligence",
    image: asset("images/case-study-preview-01.png"),
    logo: asset("images/case-study-logo-01.svg"),
  },
  {
    title: "Clinic Operations",
    image: asset("images/case-study-preview-02.png"),
    logo: asset("images/case-study-logo-02.svg"),
  },
  {
    title: "Automation Stack",
    image: asset("images/case-study-preview-03.png"),
    logo: asset("images/case-study-logo-03.svg"),
  },
  {
    title: "AI Product Lab",
    image: asset("images/case-study-preview-04.png"),
    logo: asset("images/case-study-logo-04.svg"),
  },
];

const CAREER = [
  {
    role: "Multi Stack Developer",
    company: "DevTix / Lahore",
    years: "June 2025  ->  Present",
    kind: "devtix",
    side: "left",
  },
  {
    role: "React.JS Internship",
    company: "Ronnie Ridge Tech / Lahore",
    years: "April 2025  ->  June 2025",
    kind: "ronnie",
    side: "right",
  },
  {
    role: "BS in Software Engineering",
    company: "University of Central Punjab / Lahore",
    years: "2019  ->  2024",
    kind: "ucp",
    side: "left",
  },
  {
    role: "Intermediate in Computer Science",
    company: "Punjab Group of Colleges / Lahore",
    years: "2017  ->  2019",
    kind: "pgc",
    side: "right",
  },
];

const SKILLS = [
  {
    title: "Programming Languages",
    category: "Core",
    list: "C#, C++, C, Java, Python, JavaScript, TypeScript, PHP, SQL",
    tone: "purple",
  },
  {
    title: "Web Technologies & UI",
    category: "Frontend",
    list: "ReactJS, Next.js, HTML5, CSS, Tailwind CSS, Bootstrap, ShadCN",
    tone: "blue",
  },
  {
    title: "AI & Intelligent Systems",
    category: "AI",
    list: "AI chatbots, LLMs, RAG, embedding models, context-aware assistants, voice AI with ElevenLabs",
    tone: "lime",
  },
  {
    title: "Backend & Databases",
    category: "Backend",
    list: "ASP.NET MVC/Core, EF, ADO.NET, Laravel, SQL Server, MySQL, RESTful API design",
    tone: "silver",
  },
];

const POSTS = [
  {
    title: "Interview on CBS: New business approach",
    date: "Oct 12, 2025",
    image: asset("images/blog-preview-01.png"),
  },
  {
    title: "Article: How to implement business strategy",
    date: "Oct 12, 2025",
    image: asset("images/blog-preview-02.png"),
  },
  {
    title: "News: What's new in an automobile industry",
    date: "Oct 12, 2025",
  },
  {
    title: "Article: Reface implemented some new things",
    date: "Oct 12, 2025",
  },
];

export default function ProlensSite() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const alwaysVisible = [
        ".pl-header",
        ".pl-template-badge",
        ".pl-hero-copy h1",
        ".pl-hero-copy p",
        ".pl-hero-actions",
        ".pl-hero-portrait",
        ".pl-role-chip",
        ".pl-animate",
        ".pl-project-stage",
        ".pl-project-card",
        ".pl-case-card",
        ".pl-career-card",
        ".pl-skill-card",
        ".pl-blog-row",
        ".pl-contact-avatar",
        ".pl-contact-form label",
        ".pl-contact-email",
      ];
      const topRevealTargets = [
        ".pl-header",
        ".pl-template-badge",
        ".pl-hero-copy h1",
        ".pl-hero-copy > p",
        ".pl-hero-actions",
        ".pl-hero-portrait",
        ".pl-hero-portrait .pl-role-chip",
      ];

      if (reduceMotion) {
        gsap.set(alwaysVisible, {
          autoAlpha: 1,
          clearProps: "transform,filter,clipPath",
        });
        return;
      }

      gsap.defaults({ ease: "power3.out", duration: 0.8 });

      const heroTimeline = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      heroTimeline
        .fromTo(
          ".pl-header",
          { autoAlpha: 0, y: -26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
          },
        )
        .fromTo(
          ".pl-template-badge",
          { autoAlpha: 0, x: 34, y: 24, scale: 0.92 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.72,
          },
          "-=0.48",
        )
        .fromTo(
          ".pl-hero-copy h1",
          { autoAlpha: 0, y: 82, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.05,
            clearProps: "filter",
          },
          "-=0.28",
        )
        .fromTo(
          ".pl-hero-copy p",
          { autoAlpha: 0, y: 30, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.72,
            clearProps: "filter",
          },
          "-=0.76",
        )
        .fromTo(
          ".pl-hero-portrait",
          {
            autoAlpha: 0,
            y: 82,
            scale: 0.84,
            rotation: 5,
            filter: "blur(14px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            filter: "blur(0px)",
            duration: 1.12,
            ease: "expo.out",
            clearProps: "filter",
          },
          "-=0.9",
        )
        .fromTo(
          ".pl-hero-actions",
          { autoAlpha: 0, y: 34, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.74,
            clearProps: "filter",
          },
          "-=0.62",
        )
        .fromTo(
          ".pl-hero-portrait .pl-role-chip",
          {
            autoAlpha: 0,
            y: 34,
            scale: 0.78,
            rotation: (index: number) => [-7, 5, -5, 8][index] ?? 0,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            stagger: 0.08,
            duration: 0.68,
            ease: "back.out(1.9)",
          },
          "-=0.5",
        );

      const revealFallback = window.setTimeout(() => {
        const title = rootRef.current?.querySelector(".pl-hero-copy h1");
        const titleOpacity = title
          ? Number.parseFloat(window.getComputedStyle(title).opacity)
          : 1;
        const hiddenChip = Array.from(
          rootRef.current?.querySelectorAll(".pl-hero-portrait .pl-role-chip") ??
            [],
        ).some(
          (chip) => Number.parseFloat(window.getComputedStyle(chip).opacity) < 0.5,
        );

        if (titleOpacity < 0.1 || hiddenChip) {
          gsap.set(topRevealTargets, {
            autoAlpha: 1,
            clearProps: "transform,filter",
          });
        }
      }, 2400);

      gsap.to(".pl-orbit-one", {
        rotation: 360,
        duration: 54,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".pl-orbit-two", {
        rotation: -360,
        duration: 42,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".pl-orbit-three", {
        rotation: 360,
        duration: 66,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".pl-hero-portrait .pl-role-chip", {
        y: (index: number) => [8, -7, 6, -6][index % 4],
        rotation: (index: number) => [2, -2.5, 2.5, -2][index % 4],
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: "sine.inOut",
      });

      gsap.to(".pl-template-badge", {
        y: -10,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".pl-dots-light", {
        backgroundPosition: "72px 108px",
        ease: "none",
        scrollTrigger: {
          trigger: ".prolens-site",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.to(".pl-hero-copy h1", {
        y: -92,
        autoAlpha: 0.58,
        ease: "none",
        scrollTrigger: {
          trigger: ".pl-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".pl-hero-actions", {
        y: -112,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".pl-hero",
          start: "25% top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".pl-hero-portrait", {
        y: -96,
        scale: 0.94,
        rotation: -2,
        ease: "none",
        scrollTrigger: {
          trigger: ".pl-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".pl-animate").forEach((element) => {
        const children = element.querySelectorAll("h2, p, .pl-pill");

        gsap.fromTo(
          children.length ? children : element,
          { autoAlpha: 0, y: 42, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.08,
            clearProps: "filter",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".pl-role-row").forEach((row, index) => {
        gsap.fromTo(
          row,
          {
            autoAlpha: 0,
            x: index % 2 === 0 ? 38 : -38,
            filter: "blur(8px)",
          },
          {
            autoAlpha: 1,
            x: 0,
            filter: "blur(0px)",
            clearProps: "filter",
            scrollTrigger: {
              trigger: row,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".pl-photo").forEach((photo, index) => {
        gsap.fromTo(
          photo,
          {
            autoAlpha: 0,
            y: 48,
            rotation: index % 2 === 0 ? -14 : 14,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: index * 0.06,
            scrollTrigger: {
              trigger: ".pl-photo-strip",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".pl-project-stage").forEach((stage, index) => {
        const card = stage.querySelector(".pl-project-card");
        if (!card) return;
        const visual = stage.querySelector(".pl-project-visual");
        const image = stage.querySelector(".pl-project-image");
        const orbit = stage.querySelector(".pl-project-orbit");
        const tags = stage.querySelectorAll(".pl-project-tags .pl-role-chip");

        gsap.fromTo(
          card,
          {
            autoAlpha: 0.18,
            y: 110,
            scale: 0.86,
            rotation: index % 2 === 0 ? -2.5 : 2.5,
            clipPath: "inset(10% 12% round 18px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            clipPath: "inset(0% 0% round 8px)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: stage,
              start: "top 80%",
              end: "center 48%",
              scrub: 0.8,
            },
          },
        );

        if (visual) {
          gsap.fromTo(
            visual,
            { y: 40, scale: 0.92, rotation: index % 2 === 0 ? 7 : -7 },
            {
              y: 0,
              scale: 1,
              rotation: 0,
              scrollTrigger: {
                trigger: stage,
                start: "top 76%",
                end: "center center",
                scrub: 0.9,
              },
            },
          );
        }

        if (image) {
          gsap.to(image, {
            scale: 1.12,
            rotation: index % 2 === 0 ? -3 : 3,
            ease: "none",
            scrollTrigger: {
              trigger: stage,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }

        if (orbit) {
          gsap.to(orbit, {
            rotation: index % 2 === 0 ? 360 : -360,
            duration: 38 + index * 6,
            repeat: -1,
            ease: "none",
          });
        }

        if (tags.length) {
          gsap.fromTo(
            tags,
            { autoAlpha: 0, y: 22, scale: 0.86 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              scrollTrigger: {
                trigger: stage,
                start: "top 62%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        gsap.to(card, {
          scale: 0.92,
          y: -54,
          autoAlpha: 0.78,
          scrollTrigger: {
            trigger: stage,
            start: "center center",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      gsap.fromTo(
        ".pl-case-card",
        { autoAlpha: 0, y: 38, scale: 0.9, rotation: 2 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".pl-case-rail",
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".pl-social-list a",
        { autoAlpha: 0, x: 54, filter: "blur(8px)" },
        {
          autoAlpha: 1,
          x: 0,
          filter: "blur(0px)",
          stagger: 0.08,
          clearProps: "filter",
          scrollTrigger: {
            trigger: ".pl-social-list",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".pl-timeline-line",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".pl-timeline",
            start: "top 78%",
            end: "bottom 66%",
            scrub: 1,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".pl-career-card").forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 64, scale: 0.94, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            clearProps: "filter",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.to(".pl-skill-rail", {
        x: -320,
        ease: "none",
        scrollTrigger: {
          trigger: ".pl-skills",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.fromTo(
        ".pl-skill-card",
        { autoAlpha: 0, y: 48, scale: 0.92 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".pl-skills",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".pl-blog-row",
        { autoAlpha: 0, x: 56, filter: "blur(10px)" },
        {
          autoAlpha: 1,
          x: 0,
          filter: "blur(0px)",
          stagger: 0.1,
          clearProps: "filter",
          scrollTrigger: {
            trigger: ".pl-blog-list",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        [".pl-contact-avatar", ".pl-contact-form label", ".pl-contact-email"],
        { autoAlpha: 0, y: 38, filter: "blur(8px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.08,
          clearProps: "filter",
          scrollTrigger: {
            trigger: ".pl-contact",
            start: "top 74%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.to(".pl-contact-chips .pl-role-chip", {
        y: (index: number) => [7, -6, 8, -5][index % 4],
        duration: 2.9,
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();

      return () => {
        window.clearTimeout(revealFallback);
      };
    },
    { scope: rootRef },
  );

  return (
    <div className="prolens-site" ref={rootRef}>
      <Header />
      <FloatingTemplateBadge />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SocialSection />
        <CareerSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Career", "#career"],
    ["Blog", "#blog"],
  ];

  return (
    <header className={`pl-header ${open ? "pl-header-open" : ""}`}>
      <a href="#home" className="pl-logo">
        <RollingText text="Portfolio" />
      </a>
      <nav className="pl-nav" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={label} href={href}>
            <RollingText text={label} /> <span aria-hidden>{"\u2193"}</span>
          </a>
        ))}
      </nav>
      <a href="#contacts" className="pl-contact-link">
        <RollingText text="Contacts" /> <span aria-hidden>{"\u2193"}</span>
      </a>
      <button
        className="pl-menu"
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <div className="pl-mobile-menu" aria-hidden={!open}>
        {[...links, ["Contacts", "#contacts"]].map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            <RollingText text={label} />
          </a>
        ))}
      </div>
    </header>
  );
}

function FloatingTemplateBadge() {
  return (
    <aside className="pl-template-badge" aria-label="Template preview">
      <div className="pl-template-mark" aria-hidden>
        <span />
      </div>
      <div className="pl-template-video">
        <video
          src={asset("videos/astra-template-preview.mp4")}
          autoPlay
          muted
          loop
          playsInline
        />
        <span>Astra</span>
      </div>
      <a className="pl-template-cta" href="#contacts">
        Take it FREE <b>&rarr;</b>
      </a>
      <div className="pl-made-in">
        <span aria-hidden>&#9873;</span> Made in Framer
      </div>
    </aside>
  );
}

function HeroSection() {
  return (
    <section id="home" className="pl-section pl-hero pl-dots-light">
      <div className="pl-hero-copy">
        <h1>Nauman Malik</h1>
        <p>
          I build scalable software systems and AI-powered platforms that
          simplify complex workflows, improve automation, and deliver practical
          real-world impact.
        </p>
        <div className="pl-hero-actions">
          <ArrowButton href="#contacts">Let&apos;s connect</ArrowButton>
          <AvatarStack />
          <div className="pl-rating">
            <span>{"\u2605\u2605\u2605\u2605\u2605"}</span>
            <p>Trusted by businesses</p>
          </div>
        </div>
      </div>
      <HeroPortrait />
    </section>
  );
}

function HeroPortrait() {
  return (
    <div className="pl-hero-portrait">
      <span className="pl-orbit pl-orbit-one" />
      <span className="pl-orbit pl-orbit-two" />
      <span className="pl-orbit pl-orbit-three" />
      <Image
        src={asset("images/hero-portrait-01.png")}
        alt="Nauman Malik"
        width={386}
        height={386}
        priority
        className="pl-portrait-image"
      />
      <RoleChip className="pl-chip-entrepreneur" tone="silver">
        Full Stack Developer
      </RoleChip>
      <RoleChip className="pl-chip-investor" tone="blue">
        DB Expert
      </RoleChip>
      <RoleChip className="pl-chip-advisor" tone="lime">
        AI Developer
      </RoleChip>
      <RoleChip className="pl-chip-partner" tone="purple">
        Vibe Coder
      </RoleChip>
    </div>
  );
}

function AvatarStack() {
  const avatars = [
    "hero-avatar-01.png",
    "hero-avatar-02.png",
    "hero-avatar-03.png",
    "hero-avatar-04.png",
  ];

  return (
    <div className="pl-avatar-stack" aria-hidden>
      {avatars.map((avatar) => (
        <Image
          key={avatar}
          src={asset(`images/${avatar}`)}
          alt=""
          width={38}
          height={38}
        />
      ))}
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="pl-section pl-about">
      <div className="pl-about-left">
        <Pill>About Me</Pill>
        <h2>Hello, I&apos;m Nauman</h2>
        <p>Here you&apos;ll find detailed descriptions of what I do and how I can help.</p>
        <div className="pl-signature">N.Malik</div>
        <div className="pl-quote">
          <span>&rdquo;</span>
          <strong>
            My mission is to build intelligent automation that simplifies work,
            improves efficiency, and creates real impact for businesses and
            healthcare teams.
          </strong>
        </div>
      </div>
      <div className="pl-about-right">
        <div className="pl-role-list">
          {ROLES.map((role, index) => (
            <article className="pl-role-row" key={role.title}>
              <span
                className="pl-role-number"
                style={{ backgroundColor: role.color }}
              >
                {role.number}
              </span>
              <div>
                <h3>{role.title}</h3>
                {role.body && <p>{role.body}</p>}
              </div>
              <b>{index === 0 ? "\u2212" : "+"}</b>
            </article>
          ))}
        </div>
        <PhotoStrip />
      </div>
    </section>
  );
}

function PhotoStrip() {
  const photos = [
    "career-photo-01.png",
    "about-profile-photo.png",
    "career-photo-02.png",
    "career-photo-03.png",
  ];

  return (
    <div className="pl-photo-strip" aria-label="Career moments">
      {photos.map((photo, index) => (
        <div key={photo} className={`pl-photo pl-photo-${index + 1}`}>
          <Image
            src={asset(`images/${photo}`)}
            alt=""
            width={176}
            height={214}
          />
        </div>
      ))}
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="pl-section pl-projects pl-dots-dark">
      <div className="pl-section-heading pl-project-heading pl-animate">
        <Pill dark>Projects</Pill>
        <h2>What I&apos;m Proud of</h2>
        <p>
          A collection of impactful products I&apos;ve helped build, combining
          clean engineering, intelligent automation, and real-world problem
          solving.
        </p>
      </div>
      <div className="pl-project-list">
        {PROJECTS.map((project) => (
          <div className="pl-project-stage" key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="pl-small-header pl-animate">Other projects</div>
      <div className="pl-case-rail">
        {CASE_STUDIES.map((item) => (
          <article className="pl-case-card" key={item.title}>
            <Image src={item.image} alt="" width={427} height={297} />
            <div className="pl-case-overlay" />
            <Image
              src={item.logo}
              alt=""
              width={132}
              height={52}
              className="pl-case-logo"
            />
          </article>
        ))}
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: {
    title: string;
    category: string;
    year: string;
    image: string;
    logo: string;
    surface: string;
    roles: { label: string; tone: string }[];
  };
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`pl-project-card pl-project-card-${project.surface}`}>
      <div className="pl-project-copy">
        <h3>{project.title}</h3>
        <p>{project.category}</p>
        <p>{project.year}</p>
      </div>
      <div className="pl-project-visual">
        <span className="pl-project-orbit" />
        <Image
          src={project.image}
          alt={project.title}
          width={330}
          height={330}
          className="pl-project-image"
        />
        <Image
          src={project.logo}
          alt=""
          width={140}
          height={80}
          className="pl-project-logo"
        />
      </div>
      <div className="pl-project-tags">
        {project.roles.map((role) => (
          <RoleChip key={role.label} tone={role.tone}>
            {role.label}
          </RoleChip>
        ))}
      </div>
    </article>
  );
}

function SocialSection() {
  const socials = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      iconClass: "pl-social-linkedin",
      icon: "in",
    },
    {
      label: "GitHub",
      href: "https://github.com",
      iconClass: "pl-social-github",
      icon: "gh",
    },
    {
      label: "naumandev001@gmail.com",
      href: "mailto:naumandev001@gmail.com",
      iconClass: "pl-social-mail",
      icon: "@",
    },
    {
      label: "(+92) 3314362258",
      href: "tel:+923314362258",
      iconClass: "pl-social-phone",
      icon: "ph",
    },
  ];

  return (
    <section className="pl-section pl-socials">
      <div className="pl-social-heading pl-animate">
        <Pill>Contacts & Socials</Pill>
        <h2>Where to Find Me</h2>
      </div>
      <div className="pl-social-list">
        {socials.map((social) => (
          <a key={social.label} href={social.href} aria-label={social.label}>
            <span className={`pl-social-icon ${social.iconClass}`}>
              {social.icon}
            </span>
            <RollingText text={social.label} />
            <b>&rarr;</b>
          </a>
        ))}
      </div>
    </section>
  );
}

function CareerSection() {
  return (
    <section id="career" className="pl-section pl-career">
      <div className="pl-section-heading pl-career-heading pl-animate">
        <Pill>Career & Education</Pill>
        <h2>My Way</h2>
        <p>
          The journey to becoming who I am today wasn&apos;t easy, and I look
          back on every step with pride. Below are my key milestones.
        </p>
      </div>
      <div className="pl-timeline">
        <span className="pl-timeline-line" aria-hidden />
        {CAREER.map((item, index) => (
          <article
            key={item.company}
            className={`pl-career-card pl-career-${item.side}`}
          >
            <CareerLogo kind={item.kind} />
            <div>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <strong>{item.years}</strong>
            <span className="pl-timeline-dot" style={{ top: `${58 + index * 206}px` }} />
          </article>
        ))}
        <ArrowButton href="#contacts" className="pl-career-button">
          View Full Career
        </ArrowButton>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="pl-section pl-skills">
      <div className="pl-section-heading">
        <Pill>Technical Skills</Pill>
        <h2>My Arsenal</h2>
      </div>
      <div className="pl-skill-rail">
        {SKILLS.map((item) => (
          <article className="pl-skill-card" key={item.title}>
            <span className={`pl-skill-mark pl-tone-${item.tone}`}>
              {item.category.slice(0, 2)}
            </span>
            <p>{item.list}</p>
            <div>
              <strong>{item.title}</strong>
              <span>{item.category}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="pl-mobile-dots" aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="pl-section pl-blog pl-dots-light">
      <div className="pl-blog-left">
        <Pill>Blog</Pill>
        <h2>What I Share</h2>
        <p>Here you can read my news, business insights, and other experiences.</p>
        <div className="pl-quote pl-blog-quote">
          <span>&rdquo;</span>
          <strong>
            It&apos;s incredibly important to share knowledge with those who
            have chosen the same path as you.
          </strong>
        </div>
      </div>
      <div className="pl-blog-list">
        {POSTS.map((post) => (
          <article className="pl-blog-row" key={post.title}>
            <span>{post.date}</span>
            <h3>{post.title}</h3>
            {post.image && (
              <Image src={post.image} alt="" width={112} height={84} />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contacts" className="pl-section pl-contact">
      <div className="pl-contact-left">
        <Pill dark>Contact Me</Pill>
        <div className="pl-contact-avatar">
          <span className="pl-project-orbit" />
          <Image
            src={asset("images/contact-avatar.png")}
            alt="Nauman Malik"
            width={76}
            height={76}
          />
        </div>
        <div className="pl-contact-chips">
          <RoleChip tone="silver">React.JS</RoleChip>
          <RoleChip tone="blue">Full Stack</RoleChip>
          <RoleChip tone="lime">AI & LLMs</RoleChip>
          <RoleChip tone="purple">Software Engineer</RoleChip>
        </div>
      </div>
      <div className="pl-contact-form">
        <div className="pl-contact-socials" aria-label="Social links">
          <span>in</span>
          <span>gh</span>
          <span>@</span>
        </div>
        <p className="pl-contact-email">naumandev001@gmail.com</p>
        <label>Your Name *</label>
        <label>Your Email *</label>
        <label>Your Phone</label>
        <label className="pl-message">Your message *</label>
        <div className="pl-form-actions">
          <ArrowButton href="mailto:naumandev001@gmail.com">Send message</ArrowButton>
          <p>
            Your information will remain private and will not be shared without
            your permission.
          </p>
        </div>
      </div>
      <div className="pl-footer-meta">
        <span>&copy; 2026 Nauman</span>
        <span>Lahore, PK</span>
        <span>Built in Next.js</span>
      </div>
    </footer>
  );
}

function ArrowButton({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a className={`pl-arrow-button ${className}`} href={href}>
      {children}
      <span>&rarr;</span>
    </a>
  );
}

function RollingText({ text }: { text: string }) {
  return (
    <span className="pl-rolling" aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span className="pl-roll-char" aria-hidden key={`${character}-${index}`}>
          <span>{character === " " ? "\u00a0" : character}</span>
          <span>{character === " " ? "\u00a0" : character}</span>
        </span>
      ))}
    </span>
  );
}

function Pill({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return <span className={`pl-pill ${dark ? "pl-pill-dark" : ""}`}>{children}</span>;
}

function RoleChip({
  children,
  className = "",
  tone,
}: {
  children: ReactNode;
  className?: string;
  tone: string;
}) {
  return <span className={`pl-role-chip pl-tone-${tone} ${className}`}>{children}</span>;
}

function CareerLogo({ kind }: { kind: string }) {
  return (
    <span className="pl-career-logo">
      {kind === "devtix" && <i className="pl-logo-devtix">DX</i>}
      {kind === "ronnie" && <i className="pl-logo-ronnie">RR</i>}
      {kind === "ucp" && <i className="pl-logo-ucp">UCP</i>}
      {kind === "pgc" && <i className="pl-logo-pgc">PGC</i>}
    </span>
  );
}
