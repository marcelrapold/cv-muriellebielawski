import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Phone,
  Briefcase,
  GraduationCap,
  Cpu,
  Globe,
  Zap,
  Layers,
  Award,
  Server,
  Code2,
  Languages,
  BadgeCheck,
  Calendar,
  Flag,
  Car
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { PrintButton } from "@/components/print-button";
import { Avatar } from "@/components/avatar";

// --- Components ---

const Section = ({
  id,
  title,
  children,
  icon,
  className,
}: {
  id?: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) => (
  <section id={id} className={cn("mb-12 print:mb-6", className)}>
    <div className="flex items-center gap-3 mb-6 print:mb-4 border-b border-border pb-2 print:[break-after:avoid]">
      {icon && <div className="text-accent">{icon}</div>}
      <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{title}</h2>
    </div>
    <div className="space-y-6 print:space-y-4">
      {children}
    </div>
  </section>
);

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  description, 
  icon 
}: { 
  title: string; 
  company: string; 
  period: string; 
  description: ReactNode; 
  icon?: ReactNode;
}) => (
  <div className="relative pl-8 md:pl-0 print:pl-0">
    {/* Mobile Timeline Line */}
    <div className="absolute left-3 top-2 bottom-0 w-px bg-border md:hidden print:hidden" />
    
    <div className="md:grid md:grid-cols-[120px_1fr] lg:grid-cols-[150px_1fr] gap-6 group print:block">
      {/* Date Column */}
      <div className="hidden md:block text-right pt-1 print:hidden">
        <span className="text-sm font-mono text-muted-foreground group-hover:text-accent transition-colors">{period}</span>
      </div>

      {/* Content Column */}
      <div className="relative">
        {/* Timeline Dot (Mobile) */}
        <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted border border-border md:hidden print:hidden" />
        
        {/* Mobile Date */}
        <div className="md:hidden mb-1 print:hidden">
           <span className="text-xs font-mono text-muted-foreground">{period}</span>
        </div>

        <div className="print:[break-inside:avoid]">
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
            {title}
          </h3>
          <div className="hidden print:block text-xs font-mono text-muted-foreground mb-1">
            {period}
          </div>
          <div className="text-accent font-medium mb-3 print:mb-2 flex items-center gap-2 text-sm">
            {company}
          </div>
        </div>
        <div className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  </div>
);

const EducationCard = ({
  school,
  degree,
  period,
  details,
  location
}: {
  school: string;
  degree: string;
  period: string;
  details?: string;
  location?: string;
}) => (
  <div className="flex flex-col p-4 print:p-3 rounded-lg bg-muted/30 border border-border hover:border-accent/50 transition-colors h-full">
    <div className="flex justify-between items-start mb-2 print:[break-inside:avoid]">
      <h3 className="text-foreground font-bold text-sm leading-snug pr-2">{degree}</h3>
      <span className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap border border-border">{period}</span>
    </div>
    <div className="text-accent text-xs font-medium mb-1">{school}</div>
    {location && <div className="text-muted-foreground text-[10px] mb-2 flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</div>}
    {details && <div className="text-muted-foreground text-xs mt-auto border-t border-border pt-2">{details}</div>}
  </div>
);

const SidebarItem = ({
  icon,
  label,
  value,
  link,
  multiline = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  link?: string;
  multiline?: boolean;
}) => (
  <div className="flex items-center gap-3 text-sm print:text-[11px] group">
    <div className="text-muted-foreground group-hover:text-accent transition-colors shrink-0">{icon}</div>
    <div className="overflow-hidden">
      <div className="text-muted-foreground text-xs print:text-[10px]">{label}</div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-sidebar-foreground hover:text-foreground transition-colors block font-medium",
            multiline ? "whitespace-pre-line leading-snug" : "truncate"
          )}
        >
          {value}
        </a>
      ) : (
        <div
          className={cn(
            "text-sidebar-foreground font-medium",
            multiline ? "whitespace-pre-line leading-snug" : "truncate"
          )}
        >
          {value}
        </div>
      )}
    </div>
  </div>
);

// --- Data ---

const profileDe = {
  name: "Marcel Rapold",
  title: "ICT-Projektleiter | KI-Produkt- & Plattformleiter | EMBA",
  location: "Weinbergstrasse 5\n8703 Erlenbach\nZürich, Switzerland",
  email: "marcel@marcelrapold.com",
  phone: "+41 76 566 90 80",
  linkedin: "marcelrapold",
  summaryLines: [
    "Technologie muss effizient, nachhaltig und dezentral sein.",
    "Digitalisierung ist kein Selbstzweck – sie ist der Hebel für echte Transformation.",
    "Ich konzipiere und realisiere IT-Projekte mit hoher Wirkung,",
    "Tempo, Präzision und Weitsicht – vom öffentlichen Verkehr",
    "bis zu Bitcoin & Lightning. Ich baue Systeme, die funktionieren.",
  ],
};

const profileEn = {
  name: "Marcel Rapold",
  title: "ICT Project Lead | AI Product & Platform Lead | EMBA",
  location: "Weinbergstrasse 5\n8703 Erlenbach\nZurich, Switzerland",
  email: "marcel@marcelrapold.com",
  phone: "+41 76 566 90 80",
  linkedin: "marcelrapold",
  summaryLines: [
    "Technology must be efficient, sustainable, and decentralized.",
    "Digitalization is not a goal – it’s the lever for real transformation.",
    "I design and execute high-impact IT projects with speed, precision, and foresight. From public transport to Bitcoin & Lightning: I build systems that perform.",
  ],
};

const topSkillsEn = [
  "ICT Project Leadership (Public Sector)",
  "Platform Ownership (Web & Customer Journey)",
  "System Integration (Legacy + Cloud)",
  "Vendor & Stakeholder Management",
  "Architecture (API-first, modular)",
  "ITSM / Operations Mindset",
  "Privacy & Compliance (DSG/DSGVO)",
  "Release & Change Management",
  "Workflow Automation (n8n)",
  "AEM / Enterprise CMS Governance",
  "Identity & SSO Foundations (OIDC/OAuth2, IdP)",
  "Proxmox + Docker (Practitioner)",
];

const additionalSkillsEn = [
  "React / Next.js, Storybook Integration",
  "Typeform, Inxmail",
  "Supabase, Vercel",
  "Cloudflare Tunnels, Tailscale",
  "Analytics/Tracking Concepts",
  "Documentation (ADRs, Specs, Jira/ServiceNow Tickets)",
  "Lightning (LND/LNbits), Teaching",
];

const languagesEn = [
  { lang: "German", level: "Native / Bilingual" },
  { lang: "English", level: "Full Professional" },
  { lang: "Spanish", level: "Native / Bilingual" },
  { lang: "French", level: "Elementary" },
];

const certificationsEn = [
  "Cloud Computing",
  "Becoming a Thought Leader",
  "Conflict Management & Resolution",
  "Agile Software Development",
  "Project Management Fundamentals",
  "Programming Fundamentals",
];

const uiText = {
  de: {
    email: "E-Mail",
    phone: "Telefon",
    location: "Standort",
    dateOfBirth: "Geburtsdatum",
    nationality: "Nationalität",
    drivingLicense: "Führerschein",
    nationalityValue: "Schweizerisch",
    drivingLicenseValue: "Kategorie A1, B",
    coreSkills: "Kernkompetenzen",
    additional: "Weitere Fähigkeiten",
    languages: "Sprachen",
    certifications: "Zertifizierungen",
    experience: "Berufserfahrung",
    education: "Ausbildung",
    quickLinks: "Direktlinks",
    toExperience: "Zu Berufserfahrung",
    toEducation: "Zu Ausbildung",
  },
  en: {
    email: "Email",
    phone: "Phone",
    location: "Location",
    dateOfBirth: "Date of Birth",
    nationality: "Nationality",
    drivingLicense: "Driving License",
    nationalityValue: "Swiss",
    drivingLicenseValue: "Category A1, B",
    coreSkills: "Top Skills",
    additional: "Additional",
    languages: "Languages",
    certifications: "Certifications",
    experience: "Professional Experience",
    education: "Education",
    quickLinks: "Quick Links",
    toExperience: "Go to Experience",
    toEducation: "Go to Education",
  },
};


const experienceDe = [
  {
    period: "Jan 2022 - Present",
    title: "ICT-Projektleiter | KI-Produkt & Plattform",
    company: "Zürcher Verkehrsverbund (ZVV)",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-2">
        <li><strong className="text-foreground">Stv. ICT-Projektleiter für KI-Produkt- und Plattform-Initiativen:</strong> Führung strategischer KI-Vorhaben und Plattformentwicklung.</li>
        <li><strong className="text-foreground">Verantwortung Digitale Plattform:</strong> End-to-end Betrieb und Weiterentwicklung von zvv.ch als zentrale Kundenschnittstelle inkl. IT-Architektur, Hosting und Testmanagement.</li>
        <li><strong className="text-foreground">Digitalisierung & App-Ökosystem:</strong> Mitverantwortung für Web- und Mobile-Portfolio. Aufbau neuer Services zur Verbesserung der Kundenerfahrung.</li>
        <li><strong className="text-foreground">Ticketshop & Digitale Kanäle:</strong> Sicherstellung der Interoperabilität zwischen Ticketshop und digitalen Kanälen sowie Mitarbeit an Account-Roadmap und Frontend.</li>
        <li><strong className="text-foreground">KI-gestützte Automatisierung:</strong> Design und Umsetzung von KI-Workflows zur Optimierung interner Prozesse.</li>
        <li><strong className="text-foreground">MVPs & POCs:</strong> Konzeption und Umsetzung skalierbarer Low-Code-Lösungen (Dev/Ops) für interne Abläufe und Kundenschnittstellen.</li>
        <li><strong className="text-foreground">SPOC für externe Partner:</strong> Zentrale Ansprechperson für Entwicklungsdienstleister, Qualitätssicherung und Koordination.</li>
      </ul>
    ),
  },
  {
    period: "Jun 2016 - Dec 2021",
    title: "Applikationsmanager | Product Owner",
    company: "Zürcher Verkehrsverbund (ZVV)",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Business-IT-Alignment zur internen Synchronisation von Prozess- und Service-Management.</li>
        <li>Umsetzung strategischer Anforderungen in den Bereichen IT-Risiko, Sicherheit und Architekturmanagement.</li>
        <li>Stakeholder-Management zur Optimierung von Kommunikationsprozessen.</li>
        <li>Betrieb und Weiterentwicklung von zvv.ch (Rolle Product Owner).</li>
        <li>eTicketing: Technische Projektleitung, Architektur, Security und Betrieb.</li>
      </ul>
    ),
  },
  {
    period: "2018 - Present",
    title: "Mitgründer | Information Officer",
    company: "ΛLPA.one – Bitcoin at Core ⚡ Lightning at Heart",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Specialized in Bitcoin and Lightning Network services.</li>
        <li>Lightning Network Node Deployment & Payment Systems.</li>
        <li>Custom Lightning Workflows for seamless digital transactions.</li>
      </ul>
    ),
  },
  {
    period: "May 2025",
    title: "Dozent - Bitcoin & Lightning Network",
    company: "HWZ Hochschule für Wirtschaft Zürich",
    description: "Dozent für das Lightning-Network-Modul im ersten Bitcoin-only Executive Programm Europas (CAS Bitcoin Economy). Inhalte: Skalierung, Instant Payments, Wallets, Nodes und Routing-Märkte.",
  },
  {
    period: "Nov 2023 - Oct 2024",
    title: "Vorstandsmitglied",
    company: "Bitcoin Association Switzerland",
    description: "Förderung der Bitcoin-Adoption, Öffentlichkeitsarbeit, Bearbeitung regulatorischer Fragestellungen und Medienschnittstelle zur Stärkung des Schweizer Bitcoin-Ökosystems.",
  },
  {
    period: "Jan 2019 - Dec 2021",
    title: "Berater für digitale Innovation",
    company: "Tele Locher",
    description: "Planung und Umsetzung digitaler Multi-Channel-Strategien. Smart-Home-Integration und ICT-Multimedia-Lösungen für Firmenkunden.",
  },
  {
    period: "Jan 2014 - Apr 2016",
    title: "Leiter Webentwicklung",
    company: "WebComTV",
    description: (
       <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Projektmanagement (Agile/Waterfall).</li>
        <li>Requirements Engineering & Business Analyse.</li>
        <li>Full-Stack-Entwicklung (HTML5, PHP, SQL, CMS).</li>
      </ul>
    ),
  },
  {
    period: "Jun 2010 - Dec 2013",
    title: "Applikationsentwickler",
    company: "Signorell GmbH",
    description: (
       <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Entwicklung von Websites, iPad- und Facebook-Applikationen.</li>
        <li>D-IT: Sicherstellung von Datensicherheit und Datenintegrität am Filmset.</li>
        <li>Technische Planung und Integration von Livestreaming-Lösungen.</li>
        <li>Infrastruktur: NAS/SAN-Backuplösungen und Tape-Library-Management.</li>
      </ul>
    ),
  },
  {
    period: "Jan 2007 - Jun 2010",
    title: "Service-Center-Manager",
    company: "Tele Locher",
    description: (
       <ul className="list-disc list-outside ml-4 space-y-1">
        <li>IT-Beratung und Support für Unternehmenskunden.</li>
        <li>Serverkonfiguration (Wintel, Linux) und Netzwerkplanung.</li>
        <li>Corporate Design (Web, Print).</li>
      </ul>
    ),
  },
  {
    period: "May 2007 - Aug 2008",
    title: "Service- & Support-Agent",
    company: "Mister Q AG",
    description: "Applikations- und System-Support (Windows/Mac), Hardware-Wartung.",
  },
];

const educationDe = [
  {
    period: "Oct 2024 - May 2025",
    degree: "Executive MBA in General Management",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Schwerpunkt: Strategisches Management, Leadership & Digitale Transformation",
  },
  {
    period: "Mar 2025",
    degree: "International Management Program",
    school: "University of Virginia Darden School of Business",
    location: "Charlottesville, VA, USA",
    details: "Executive-Education-Modul",
  },
  {
    period: "Jan 2018 - Oct 2021",
    degree: "MAS in Digital Business",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Master of Advanced Studies",
  },
  {
    period: "2019",
    degree: "CAS Digital Finance",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Certificate of Advanced Studies",
  },
  {
    period: "2019",
    degree: "CAS Disruptive Technologies",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Certificate of Advanced Studies",
  },
  {
    period: "2018 - 2019",
    degree: "CAS Digital Leadership",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Certificate of Advanced Studies",
  },
  {
    period: "2013 - 2016",
    degree: "Dipl. Wirtschaftsinformatiker HF",
    school: "IFA College of Professional Education",
    location: "Zurich, Switzerland",
    details: "Professional Bachelor ODEC (Höhere Fachschule)",
  },
  {
    period: "2010 - 2013",
    degree: "Informatiker EFZ (Applikationsentwicklung)",
    school: "WISS Schools for Economy and Computer Science",
    location: "Zurich, Switzerland",
    details: "Fachrichtung Applikationsentwicklung",
  },
];

const experienceEn = [
  {
    period: "Jan 2022 - Present",
    title: "ICT Project Lead | AI Product & Platform",
    company: "Zürcher Verkehrsverbund (ZVV)",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-2">
        <li><strong className="text-foreground">Deputy ICT project lead for AI product and platform initiatives:</strong> Leading strategic AI initiatives and platform development.</li>
        <li><strong className="text-foreground">Digital platform ownership:</strong> End-to-end operation and evolution of zvv.ch as a central customer interface, including IT architecture, hosting, and test management.</li>
        <li><strong className="text-foreground">Digitalization & app ecosystem:</strong> Co-responsible for the web and mobile portfolio. Built new services to improve customer experience.</li>
        <li><strong className="text-foreground">Ticket shop & digital channels:</strong> Ensured interoperability between the ticket shop and digital channels and contributed to account roadmap and frontend topics.</li>
        <li><strong className="text-foreground">AI-driven automation:</strong> Designed and implemented AI workflows to optimize internal processes.</li>
        <li><strong className="text-foreground">MVPs & POCs:</strong> Designed and delivered scalable low-code solutions (Dev/Ops) for internal workflows and customer touchpoints.</li>
        <li><strong className="text-foreground">SPOC for external partners:</strong> Central contact for development vendors, quality assurance, and coordination.</li>
      </ul>
    ),
  },
  {
    period: "Jun 2016 - Dec 2021",
    title: "Application Manager | Product Owner",
    company: "Zürcher Verkehrsverbund (ZVV)",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Business-IT alignment to synchronize process and service management.</li>
        <li>Implemented strategic requirements across IT risk, security, and architecture management.</li>
        <li>Stakeholder management to improve communication workflows.</li>
        <li>Operation and continuous development of zvv.ch (Product Owner role).</li>
        <li>eTicketing: Technical project leadership, architecture, security, and operations.</li>
      </ul>
    ),
  },
  {
    period: "2018 - Present",
    title: "Co-Founder | Information Officer",
    company: "ΛLPA.one – Bitcoin at Core ⚡ Lightning at Heart",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Specialized in Bitcoin and Lightning Network services.</li>
        <li>Lightning Network node deployment and payment systems.</li>
        <li>Custom Lightning workflows for seamless digital transactions.</li>
      </ul>
    ),
  },
  {
    period: "May 2025",
    title: "Lecturer - Bitcoin & Lightning Network",
    company: "HWZ University of Applied Sciences Zurich",
    description: "Lecturer for the Lightning Network module in Europe’s first Bitcoin-only executive program (CAS Bitcoin Economy). Topics: scaling, instant payments, wallets, nodes, and routing markets.",
  },
  {
    period: "Nov 2023 - Oct 2024",
    title: "Board Member",
    company: "Bitcoin Association Switzerland",
    description: "Promoted Bitcoin adoption, public communication, regulatory positioning, and media collaboration to strengthen the Swiss Bitcoin ecosystem.",
  },
  {
    period: "Jan 2019 - Dec 2021",
    title: "Consultant for Digital Innovation",
    company: "Tele Locher",
    description: "Planned and delivered digital multi-channel strategies, including smart-home integration and ICT multimedia solutions for business clients.",
  },
  {
    period: "Jan 2014 - Apr 2016",
    title: "Head of Web Development",
    company: "WebComTV",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Project management (Agile/Waterfall).</li>
        <li>Requirements engineering and business analysis.</li>
        <li>Full-stack development (HTML5, PHP, SQL, CMS).</li>
      </ul>
    ),
  },
  {
    period: "Jun 2010 - Dec 2013",
    title: "Application Developer",
    company: "Signorell GmbH",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Developed websites, iPad apps, and Facebook applications.</li>
        <li>Digital imaging technician: ensured data security and integrity on film sets.</li>
        <li>Technical planning and integration of live streaming solutions.</li>
        <li>Infrastructure: NAS/SAN backup solutions and tape library management.</li>
      </ul>
    ),
  },
  {
    period: "Jan 2007 - Jun 2010",
    title: "Service Center Manager",
    company: "Tele Locher",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>IT consulting and support for enterprise clients.</li>
        <li>Server configuration (Wintel, Linux) and network planning.</li>
        <li>Corporate design across web and print.</li>
      </ul>
    ),
  },
  {
    period: "May 2007 - Aug 2008",
    title: "Service & Support Agent",
    company: "Mister Q AG",
    description: "Application and system support (Windows/Mac), including hardware maintenance.",
  },
];

const educationEn = [
  {
    period: "Oct 2024 - May 2025",
    degree: "Executive MBA in General Management",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Focus: Strategic Management, Leadership & Digital Transformation",
  },
  {
    period: "Mar 2025",
    degree: "International Management Program",
    school: "University of Virginia Darden School of Business",
    location: "Charlottesville, VA, USA",
    details: "Executive education module",
  },
  {
    period: "Jan 2018 - Oct 2021",
    degree: "MAS in Digital Business",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Master of Advanced Studies",
  },
  {
    period: "2019",
    degree: "CAS Digital Finance",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Certificate of Advanced Studies",
  },
  {
    period: "2019",
    degree: "CAS Disruptive Technologies",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Certificate of Advanced Studies",
  },
  {
    period: "2018 - 2019",
    degree: "CAS Digital Leadership",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Certificate of Advanced Studies",
  },
  {
    period: "2013 - 2016",
    degree: "Advanced Federal Diploma of Higher Education in Business Information Technology",
    school: "IFA College of Professional Education",
    location: "Zurich, Switzerland",
    details: "Professional Bachelor ODEC (Higher Professional Education)",
  },
  {
    period: "2010 - 2013",
    degree: "Federal VET Diploma in Information Technology (EFZ), Application Development",
    school: "WISS Schools for Economy and Computer Science",
    location: "Zurich, Switzerland",
    details: "Specialization in application development",
  },
];

const topSkills = [
  "ICT-Projektleitung (öffentlicher Sektor)",
  "Plattformverantwortung (Web & Customer Journey)",
  "Systemintegration (Legacy + Cloud)",
  "Vendor- & Stakeholder-Management",
  "Architektur (API-first, modular)",
  "ITSM- & Betriebs-Mindset",
  "Datenschutz & Compliance (DSG/DSGVO)",
  "Release- & Change-Management",
  "Workflow-Automation (n8n)",
  "AEM / Enterprise CMS Governance",
  "Identity- & SSO-Basis (OIDC/OAuth2, IdP)",
  "Proxmox + Docker (Praxis)",
];

const additionalSkills = [
  "React / Next.js, Storybook-Integration",
  "Typeform, Inxmail",
  "Supabase, Vercel",
  "Cloudflare Tunnels, Tailscale",
  "Analytics-/Tracking-Konzepte",
  "Dokumentation (ADRs, Spezifikationen, Jira/ServiceNow Tickets)",
  "Lightning (LND/LNbits), Lehre",
];

const languages = [
  { lang: "Deutsch", level: "Muttersprache / Zweisprachig" },
  { lang: "Englisch", level: "Verhandlungssicher" },
  { lang: "Spanisch", level: "Muttersprache / Zweisprachig" },
  { lang: "Französisch", level: "Grundkenntnisse" },
];

const certifications = [
  "Cloud Computing",
  "Becoming a Thought Leader",
  "Konfliktmanagement & Konfliktlösung",
  "Agile Softwareentwicklung",
  "Projektmanagement Grundlagen",
  "Programmierung Grundlagen",
];

export default async function CV({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = lang === "de" ? "de" : "en";
  const profile = locale === "en" ? profileEn : profileDe;
  const topSkillsLocalized = locale === "en" ? topSkillsEn : topSkills;
  const additionalSkillsLocalized = locale === "en" ? additionalSkillsEn : additionalSkills;
  const languagesLocalized = locale === "en" ? languagesEn : languages;
  const certificationsLocalized = locale === "en" ? certificationsEn : certifications;
  const experienceLocalized = locale === "en" ? experienceEn : experienceDe;
  const educationLocalized = locale === "en" ? educationEn : educationDe;
  const t = uiText[locale];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Weinbergstrasse 5",
      postalCode: "8703",
      addressLocality: "Erlenbach",
      addressRegion: "ZH",
      addressCountry: "CH",
    },
    sameAs: [`https://linkedin.com/in/${profile.linkedin}`],
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcelrapold.com",
    knowsAbout: [
      "AI Product Management",
      "Platform Leadership",
      "ICT Project Leadership",
      "Digital Transformation",
      "Bitcoin",
      "Lightning Network",
    ],
  };
  return (
    <div
      className="min-h-screen bg-background text-foreground font-sans selection:bg-amber-500/30 print:bg-white print:text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-[300px_1fr] min-h-screen print:grid print:grid-cols-[220px_1fr] print:min-h-0">
        
        {/* --- Sidebar (Left) --- */}
        <aside className="bg-sidebar border-r border-sidebar-border md:sticky md:top-0 md:h-screen md:overflow-y-auto flex flex-col transition-colors duration-300 print:bg-white print:static print:h-auto print:overflow-visible print:border-r print:border-b-0 print:[break-inside:avoid]">
          
          {/* Profile Image - Full Width & Matched Height */}
          <div className="relative w-full aspect-[3/4] print:aspect-auto print:h-44 overflow-hidden bg-sidebar border-b border-sidebar-border shrink-0">
            <Avatar
              staticSrc="/mra.png"
              animatedSrc="/mra.gif"
              alt={profile.name}
              priority
            />
            {/* Desktop Gradient Overlay */}
            <div className="hidden md:block absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sidebar to-transparent opacity-90 transition-colors duration-300 z-20 pointer-events-none" />

            {/* Mobile Gradient Overlay & Content */}
            <div className="md:hidden print:hidden absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 z-20 pointer-events-none" />
            <div className="md:hidden print:hidden absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-20 pointer-events-none" />
            
            <div className="md:hidden print:hidden absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-30">
                <div className="text-3xl font-bold tracking-tight text-foreground mb-1 drop-shadow-md">{profile.name}</div>
                <p className="text-lg text-accent font-medium mb-3 drop-shadow-md">{profile.title}</p>
                <p className="text-sm text-muted-foreground/90 leading-relaxed line-clamp-4 text-shadow-sm font-medium">
                  {profile.summaryLines.join(" ")}
                </p>
            </div>
            
            {/* Mobile Theme Toggle */}
            <div className="md:hidden print:hidden absolute top-4 right-4 z-30">
                <div className="flex items-center gap-2">
                  <LanguageToggle />
                  <ThemeToggle />
                  <PrintButton />
                </div>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="p-6 md:p-8 print:p-3 space-y-10 print:space-y-4">
            
            {/* Contact Info */}
            <div id="contact" className="space-y-4">
              <SidebarItem icon={<Mail className="w-4 h-4" />} label={t.email} value={profile.email} link={`mailto:${profile.email}`} />
              <SidebarItem icon={<Phone className="w-4 h-4" />} label={t.phone} value={profile.phone} link={`tel:${profile.phone}`} />
              <SidebarItem
                icon={<MapPin className="w-4 h-4" />}
                label={t.location}
                value={profile.location}
                link="https://earth.google.com/web/search/Weinbergstrasse+5,+8703+Erlenbach,+Switzerland"
                multiline
              />
              <SidebarItem icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" value="linkedin.com/in/marcelrapold" link={`https://linkedin.com/in/${profile.linkedin}`} />
              
              <div className="pt-4 border-t border-sidebar-border space-y-4">
                <SidebarItem icon={<Calendar className="w-4 h-4" />} label={t.dateOfBirth} value={locale === "en" ? "July 5, 1985" : "5. Juli 1985"} />
                <SidebarItem icon={<Flag className="w-4 h-4" />} label={t.nationality} value={t.nationalityValue} />
                <SidebarItem icon={<Car className="w-4 h-4" />} label={t.drivingLicense} value={t.drivingLicenseValue} />
              </div>
            </div>

            <nav className="pt-2 border-t border-sidebar-border print:hidden">
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                {t.quickLinks}
              </h3>
              <div className="space-y-1.5">
                <a href="#experience" className="text-xs text-sidebar-foreground hover:text-foreground transition-colors block">
                  {t.toExperience}
                </a>
                <a href="#education" className="text-xs text-sidebar-foreground hover:text-foreground transition-colors block">
                  {t.toEducation}
                </a>
              </div>
            </nav>

            {/* Top Skills */}
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent" /> {t.coreSkills}
              </h3>
              <div className="space-y-2 print:space-y-1.5">
                {topSkillsLocalized.map((skill) => (
                  <div
                    key={skill}
                    className="text-xs print:text-[10px] text-sidebar-foreground leading-snug border-l-2 border-accent/40 pl-2 py-0.5"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="mt-5 print:mt-3">
                <h4 className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                  {t.additional}
                </h4>
                <div className="space-y-1 print:space-y-0.5">
                  {additionalSkillsLocalized.map((skill) => (
                    <div key={skill} className="text-[11px] print:text-[10px] text-muted-foreground leading-snug">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Languages className="w-4 h-4 text-accent" /> {t.languages}
              </h3>
              <div className="space-y-3 print:space-y-2">
                {languagesLocalized.map((l) => (
                  <div key={l.lang}>
                    <div className="text-sm text-foreground font-medium">{l.lang}</div>
                    <div className="text-xs text-muted-foreground">{l.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-accent" /> {t.certifications}
              </h3>
              <ul className="space-y-2 print:space-y-1">
                {certificationsLocalized.map((cert) => (
                  <li key={cert} className="text-xs print:text-[10px] text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* --- Main Content (Right) --- */}
        <main className="flex flex-col">
          
          {/* Header & Summary Section - Height Matched to Image (approx) */}
          <div className="hidden md:flex print:flex flex-col justify-center p-6 md:p-12 print:p-5 border-b border-border min-h-[400px] print:min-h-0 relative">
            <div className="absolute top-6 right-6 print:hidden">
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
                <PrintButton />
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                {profile.name}
              </h1>
              <p className="text-xl text-accent font-medium">
                {profile.title}
              </p>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg print:text-[15px] leading-relaxed text-muted-foreground border-l-4 border-accent/20 pl-6 print:pl-4">
                {profile.summaryLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Content Below */}
          <div className="p-6 md:p-12 print:p-5">
            {/* Experience */}
            <Section id="experience" title={t.experience} icon={<Briefcase className="w-5 h-5" />}>
              <div className="space-y-10 print:space-y-5">
                {experienceLocalized.map((item, i) => (
                  <ExperienceCard key={i} {...item} />
                ))}
              </div>
            </Section>

            {/* Education - Grid Layout for Compactness */}
            <Section id="education" title={t.education} icon={<GraduationCap className="w-5 h-5" />}>
              <div className="grid md:grid-cols-2 gap-4 print:grid-cols-1 print:gap-2.5">
                {educationLocalized.map((item, i) => (
                  <EducationCard key={i} {...item} />
                ))}
              </div>
            </Section>

            {/* Footer */}
            <footer className="border-t border-border pt-8 mt-16 print:pt-5 print:mt-8 text-muted-foreground text-sm">
              <p>© 2026 Marcel Rapold</p>
            </footer>
          </div>

        </main>
      </div>
    </div>
  );
}
