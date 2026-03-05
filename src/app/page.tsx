'use client';

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Phone,
  Calendar,
  Briefcase,
  GraduationCap,
  Code2,
  Zap,
  Bitcoin,
  ChevronDown
} from "lucide-react";

// CV Data
const profile = {
  name: "Marcel Rapold",
  title: "Digital Leader",
  tagline: "⚡ Bitcoiner",
  location: "Zürich, Switzerland",
  email: "marcel@rapold.ch",
  phone: "+41 76 566 90 80",
  github: "muraschal",
  linkedin: "marcelrapold",
};

const education = [
  {
    period: "2024 - 2025",
    title: "Executive Modul - Advanced Management Program",
    school: "HWZ",
  },
  {
    period: "2017 - 2021",
    title: "MAS Digital Business",
    school: "HWZ",
    details: ["CAS Digital Finance", "CAS Digital Leadership", "CAS Disruptive Technologies"],
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
      "WebAnalytics tools evaluation & implementation",
      "Mobile apps consolidation & timetable redesign",
    ],
  },
  {
    period: "June 2016 - present",
    title: "Application Manager / Product Owner",
    company: "Zürcher Verkehrsverbund (ZVV)",
    highlights: [
      "Product ownership & KPI definition",
      "eTicketing architecture & security",
      "IT risk & security management",
      "Budget & contract responsibility",
    ],
  },
  {
    period: "2019 - 2021",
    title: "Digital Innovation Consultant",
    company: "TeleLocher AG",
    highlights: [
      "Digital multi-channel strategy",
      "Smart Home integration",
      "ICT multimedia solutions",
    ],
  },
  {
    period: "2018 - present",
    title: "Co-Founder | Information Officer",
    company: "ALPA.one",
    highlights: [
      "Strategic IT planning",
      "Business efficiency & innovation",
    ],
  },
  {
    period: "2014 - 2016",
    title: "Head of Web Development",
    company: "WebComTV AG",
    highlights: [
      "Agile/SCRUM project management",
      "Full-stack development",
      "CMS development (Contao, Typo3, WordPress)",
    ],
  },
];

const skills = [
  { name: "Project Management", level: 95 },
  { name: "HTML/CSS/JavaScript", level: 90 },
  { name: "React/Next.js", level: 85 },
  { name: "PHP/SQL", level: 80 },
  { name: "AEM CMS", level: 75 },
  { name: "Bitcoin/Lightning", level: 70 },
];

const skillTags = [
  "Agile/SCRUM", "Requirements Engineering", "UML", "Risk Management",
  "HTML5/CSS3", "JavaScript", "PHP", "SQL", "React", "Next.js",
  "AEM", "WordPress", "Contao", "TypeScript",
  "IT Project Management", "Product Ownership", "Stakeholder Management",
  "Public Transport", "Digital Finance", "Web Development", "CRM"
];

export default function CV() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [expandedJobs, setExpandedJobs] = useState<number[]>([0]);

  const toggleJob = (index: number) => {
    setExpandedJobs(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 z-50 origin-left"
      />

      {/* Header Banner */}
      <div className="h-48 bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        {/* Profile Card */}
        <div className="bg-[#111111] rounded-2xl border border-orange-500/20 shadow-2xl overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="md:w-80 bg-gradient-to-b from-[#1a1a1a] to-[#111111] p-8 border-r border-orange-500/10">
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-4xl font-bold text-black">
                MR
              </div>

              {/* Name */}
              <h1 className="text-2xl font-bold text-white text-center mb-1">
                {profile.name}
              </h1>
              <p className="text-orange-400 text-center mb-1">{profile.title}</p>
              <p className="text-amber-400 text-center text-sm mb-8">{profile.tagline}</p>

              {/* Contact */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-sm">{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <a href={`mailto:${profile.email}`} className="text-sm hover:text-orange-400 transition-colors">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <a href={`tel:${profile.phone}`} className="text-sm hover:text-orange-400 transition-colors">
                    {profile.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Github className="w-4 h-4 text-orange-500 shrink-0" />
                  <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-orange-400 transition-colors">
                    {profile.github}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Linkedin className="w-4 h-4 text-orange-500 shrink-0" />
                  <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-orange-400 transition-colors">
                    {profile.linkedin}
                  </a>
                </div>
              </div>

              {/* Skills Bar Chart */}
              <div className="mb-8">
                <h3 className="text-orange-400 text-sm font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Skills
                </h3>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">{skill.name}</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Tags */}
              <div>
                <h3 className="text-orange-400 text-sm font-semibold mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-orange-500/10 text-orange-300 rounded-md border border-orange-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 p-8">
              {/* Profile */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full" />
                  Profile
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Highly skilled and versatile IT Project Manager with extensive experience 
                  in public transportation, digital innovation, and web development. 
                  Specialized in leading high-impact projects from initial concept through implementation.
                  Known for robust analytical skills, effective communication, and relentless focus on customer satisfaction.
                </p>
              </section>

              {/* Experience Timeline */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full" />
                  Professional Experience
                </h2>
                
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500 via-amber-500 to-orange-500/30" />

                  <div className="space-y-4">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-10"
                      >
                        {/* Timeline Dot */}
                        <div className={`absolute left-1 top-2 w-4 h-4 rounded-full border-2 ${
                          expandedJobs.includes(index) 
                            ? 'bg-orange-500 border-orange-400' 
                            : 'bg-[#111111] border-orange-500'
                        }`}>
                          {expandedJobs.includes(index) && (
                            <div className="absolute inset-1 bg-amber-400 rounded-full animate-pulse" />
                          )}
                        </div>

                        {/* Job Card */}
                        <div 
                          className={`bg-[#1a1a1a] rounded-xl border transition-all cursor-pointer ${
                            expandedJobs.includes(index)
                              ? 'border-orange-500/30'
                              : 'border-orange-500/10 hover:border-orange-500/20'
                          }`}
                          onClick={() => toggleJob(index)}
                        >
                          <div className="p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <span className="text-xs text-orange-400 font-mono">{exp.period}</span>
                                <h3 className="text-white font-semibold">{exp.title}</h3>
                                <p className="text-amber-400 text-sm">{exp.company}</p>
                              </div>
                              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                                expandedJobs.includes(index) ? 'rotate-180 text-orange-400' : ''
                              }`} />
                            </div>

                            {/* Expanded Details */}
                            {expandedJobs.includes(index) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-orange-500/10"
                              >
                                <ul className="space-y-2">
                                  {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                      <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 shrink-0" />
                                      {highlight}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full" />
                  Education
                </h2>
                
                <div className="grid gap-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#1a1a1a] rounded-xl p-4 border border-orange-500/10 hover:border-orange-500/20 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-xs text-orange-400 font-mono">{edu.period}</span>
                          <h3 className="text-white font-medium">{edu.title}</h3>
                          <p className="text-amber-400 text-sm">{edu.school}</p>
                        </div>
                        <GraduationCap className="w-5 h-5 text-orange-500/50" />
                      </div>
                      {edu.details && edu.details.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {edu.details.map((detail, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-orange-500/10 text-orange-300 rounded">
                              {detail}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {profile.name} • Built with Next.js & Framer Motion</p>
        </footer>
      </div>
    </div>
  );
}
