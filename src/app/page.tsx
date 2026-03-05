"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowDown, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code2,
  Database,
  Globe,
  Smartphone,
  Briefcase,
  GraduationCap,
  Calendar,
  ChevronRight,
  Terminal,
  Zap,
  Bitcoin
} from "lucide-react";

// CV Data
const profile = {
  name: "Marcel Rapold",
  title: "Digital Leader",
  tagline: "⚡ Bitcoiner",
  location: "Zürich, Switzerland",
  email: "marcel@rapold.ch",
  github: "muraschal",
  linkedin: "marcelrapold",
};

const education = [
  {
    period: "2024 - 2025",
    title: "Executive Modul - Advanced Management Program",
    school: "HWZ",
    details: ["Strategic Leadership", "Business Innovation"],
  },
  {
    period: "2017 - 2021",
    title: "Master of Advanced Studies in Digital Business",
    school: "HWZ",
    details: ["CAS Digital Finance (Bitcoin/Blockchain)", "CAS Digital Leadership", "CAS Disruptive Technologies"],
  },
  {
    period: "2013 - 2016",
    title: "Business Data Processing Specialist",
    school: "IFA",
    details: ["Bachelor Degree"],
  },
  {
    period: "2010 - 2013",
    title: "Application Developer EFZ",
    school: "WISS",
    details: [],
  },
];

const experience = [
  {
    period: "Jan 2022 - present",
    title: "IT Project Manager",
    company: "Zürcher Verkehrsverbund (ZVV)",
    highlights: [
      "Technical lead of AEM CMS cloud shift for zvv.ch",
      "NOVA connection to central Swiss transport platform",
      "SwissPass login implementation & migration to SP IdP",
      "WebAnalytics tools (AT-Internet) evaluation & implementation",
      "Mobile apps consolidation",
      "Timetable front-end redesign & integration",
      "CRM evaluation for ZVV Contact",
    ],
  },
  {
    period: "June 2016 - present",
    title: "Application Manager / Product Owner",
    company: "Zürcher Verkehrsverbund (ZVV)",
    highlights: [
      "Web: Product ownership, KPI definition, PDCA, process optimization",
      "eTicketing: Architecture, security, test management",
      "IT risk, security & architecture management",
      "Budget & contract responsibility",
      "Stakeholder management",
    ],
  },
  {
    period: "2019 - 2021",
    title: "Digital Innovation Consultant",
    company: "TeleLocher AG",
    highlights: [
      "Digital multi-channel strategy",
      "Smart Home integration",
      "ICT multimedia solutions for corporate clients",
    ],
  },
  {
    period: "2018 - present",
    title: "Co-Founder | Information Officer",
    company: "ALPA.one",
    highlights: [
      "Strategic IT planning",
      "Business efficiency & innovation management",
    ],
  },
  {
    period: "2014 - 2016",
    title: "Head of Web Development",
    company: "WebComTV AG",
    highlights: [
      "Agile/SCRUM project management",
      "Requirements engineering & UML",
      "Full-stack development (HTML5, jQuery, PHP, SQL)",
      "CMS development (Contao, Typo3, WordPress)",
    ],
  },
];

const skills = {
  projectManagement: ["Agile/SCRUM", "Waterfall", "Requirements Engineering", "UML", "Risk Management", "KPI & PDCA"],
  technical: ["HTML5/CSS3", "JavaScript/TypeScript", "PHP", "SQL", "React/Next.js", "CMS (AEM, WordPress, Contao)"],
  leadership: ["IT Project Management", "Product Ownership", "Stakeholder Management", "Budget & Contract Management"],
  domains: ["Public Transport", "Digital Finance", "Bitcoin/Lightning", "Web Development", "CRM"],
};

// Components
function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center py-20 ${className}`}>
      <div className="max-w-5xl mx-auto px-6 w-full">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
    >
      {children}
    </motion.h2>
  );
}

function TimelineItem({ period, title, subtitle, details, index }: { 
  period: string; 
  title: string; 
  subtitle?: string;
  details?: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 border-l border-white/10"
    >
      <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-accent-pink to-accent-teal" />
      <span className="text-sm text-accent-pink font-mono">{period}</span>
      <h3 className="text-xl font-semibold mt-1">{title}</h3>
      {subtitle && <p className="text-gray-400 mb-2">{subtitle}</p>}
      {details && details.length > 0 && (
        <ul className="mt-3 space-y-1">
          {details.map((detail, i) => (
            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-0.5 text-accent-teal shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 text-sm glass rounded-full border border-white/10 hover:border-accent-pink/50 transition-colors cursor-default">
      {children}
    </span>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="animated-bg noise">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-pink via-accent-orange to-accent-teal z-50 origin-left"
      />

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
        <div className="glass px-6 py-3 rounded-full flex gap-6">
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "Über" },
            { id: "experience", label: "Erfahrung" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Kontakt" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm transition-colors ${
                activeSection === item.id 
                  ? "text-accent-pink" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="hero" className="pt-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <Bitcoin className="w-4 h-4 text-accent-orange" />
              <span className="text-sm text-gray-300">Digital Leader</span>
              <span className="text-accent-orange">⚡</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">{profile.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              IT Project Manager • Digital Innovation • Bitcoin
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/5 transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-pink" />
                <span>{profile.email}</span>
              </a>
              <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
                <MapPin className="w-4 h-4 text-accent-teal" />
                <span>{profile.location}</span>
              </div>
            </div>

            <motion.button
              onClick={() => scrollTo("about")}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm">Mehr über mich</span>
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <SectionTitle>Über Mich</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Highly skilled and versatile IT Project Manager mit umfangreicher Erfahrung 
              im öffentlichen Verkehr, digitaler Innovation und Webentwicklung.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Spezialisiert auf die Leitung von High-Impact-Projekten von der 
              Konzeption bis zur Implementierung. Expertin in der Identifikation 
              von Kundenanforderungen, der Steuerung von Softwareentwicklungsprozessen 
              und der Verwaltung komplexer Teams.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Bekannt für robuste analytische Fähigkeiten, effektive Kommunikation 
              und unermüdlichen Fokus auf Kundenzufriedenheit.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Briefcase, label: "10+ Jahre", desc: "Erfahrung" },
              { icon: Zap, label: "50+", desc: "Projekte" },
              { icon: Terminal, label: "5", desc: "Sprachen" },
              { icon: Code2, label: "∞", desc: "Kaffee" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl text-center gradient-border"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-pink" />
                <div className="text-2xl font-bold gradient-text">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionTitle>Berufserfahrung</SectionTitle>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <TimelineItem
              key={exp.title}
              index={i}
              period={exp.period}
              title={exp.title}
              subtitle={exp.company}
              details={exp.highlights}
            />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <SectionTitle>Ausbildung</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold">{edu.title}</h3>
                  <p className="text-accent-teal">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-500 font-mono">{edu.period}</span>
              </div>
              {edu.details.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {edu.details.map((detail) => (
                    <span key={detail} className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-400">
                      {detail}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionTitle>Skills & Kompetenzen</SectionTitle>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize text-accent-orange">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="pb-32">
        <SectionTitle>Kontakt</SectionTitle>
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Lust auf Zusammenarbeit? Lass uns connecten!
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-pink to-accent-orange rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js & Framer Motion.</p>
      </footer>
    </div>
  );
}
