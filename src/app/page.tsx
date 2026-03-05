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
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar } from "@/components/avatar";

// --- Components ---

const Section = ({ title, children, icon, className }: { title: string; children: ReactNode; icon?: ReactNode; className?: string }) => (
  <section className={cn("mb-12", className)}>
    <div className="flex items-center gap-3 mb-6 border-b border-border pb-2">
      {icon && <div className="text-accent">{icon}</div>}
      <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{title}</h2>
    </div>
    <div className="space-y-6">
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
  <div className="relative pl-8 md:pl-0">
    {/* Mobile Timeline Line */}
    <div className="absolute left-3 top-2 bottom-0 w-px bg-border md:hidden" />
    
    <div className="md:grid md:grid-cols-[120px_1fr] lg:grid-cols-[150px_1fr] gap-6 group">
      {/* Date Column */}
      <div className="hidden md:block text-right pt-1">
        <span className="text-sm font-mono text-muted-foreground group-hover:text-accent transition-colors">{period}</span>
      </div>

      {/* Content Column */}
      <div className="relative">
        {/* Timeline Dot (Mobile) */}
        <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted border border-border md:hidden" />
        
        {/* Mobile Date */}
        <div className="md:hidden mb-1">
           <span className="text-xs font-mono text-muted-foreground">{period}</span>
        </div>

        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
          {title}
        </h3>
        <div className="text-accent font-medium mb-3 flex items-center gap-2 text-sm">
          {company}
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
  <div className="flex flex-col p-4 rounded-lg bg-muted/30 border border-border hover:border-accent/50 transition-colors h-full">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-foreground font-bold text-sm leading-snug pr-2">{degree}</h3>
      <span className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap border border-border">{period}</span>
    </div>
    <div className="text-accent text-xs font-medium mb-1">{school}</div>
    {location && <div className="text-muted-foreground text-[10px] mb-2 flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</div>}
    {details && <div className="text-muted-foreground text-xs mt-auto border-t border-border pt-2">{details}</div>}
  </div>
);

const SidebarItem = ({ icon, label, value, link }: { icon: ReactNode; label: string; value: string; link?: string }) => (
  <div className="flex items-center gap-3 text-sm group">
    <div className="text-muted-foreground group-hover:text-accent transition-colors shrink-0">{icon}</div>
    <div className="overflow-hidden">
      <div className="text-muted-foreground text-xs">{label}</div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sidebar-foreground hover:text-foreground transition-colors truncate block font-medium">
          {value}
        </a>
      ) : (
        <div className="text-sidebar-foreground truncate font-medium">{value}</div>
      )}
    </div>
  </div>
);

// --- Data ---

const profile = {
  name: "Marcel Rapold",
  title: "ICT Project Lead, AI Product & Platform Lead | EMBA",
  location: "Zürich, Switzerland",
  email: "marcel@marcelrapold.com",
  phone: "+41 76 566 90 80",
  linkedin: "marcelrapold",
  summary: "Technology must be efficient, sustainable, and decentralized. Digitalization is not a goal – it’s the lever for real transformation. I design and execute high-impact IT projects with speed, precision, and foresight. From public transport to Bitcoin & Lightning: I build systems that perform."
};

const experience = [
  {
    period: "Jan 2022 - Present",
    title: "ICT Project Lead, AI Product & Platform",
    company: "Zürcher Verkehrsverbund (ZVV)",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-2">
        <li><strong className="text-foreground">Acting ICT Project Lead for AI Product & Platform Initiatives:</strong> Leading strategic AI initiatives and platform development.</li>
        <li><strong className="text-foreground">Digital Platform Responsibility:</strong> Owner role for end-to-end operation and evolution of zvv.ch as the central customer interface. Optimization of IT architecture, hosting, and test management.</li>
        <li><strong className="text-foreground">Digitalization & App Ecosystem:</strong> Co-responsible for the web and mobile portfolio. Building new services that drive digital transformation and improve customer experience.</li>
        <li><strong className="text-foreground">Ticket Shop & Digital Channels:</strong> Ensuring interoperability between ticket shop and digital channels. Contributing to customer account roadmap and frontend development.</li>
        <li><strong className="text-foreground">AI-driven Automation:</strong> Design and implementation of AI-powered automation workflows to optimize internal processes.</li>
        <li><strong className="text-foreground">MVPs & POCs:</strong> Defining and delivering Low-code scalable solutions (Dev/Ops) for internal processes and customer interfaces.</li>
        <li><strong className="text-foreground">SPOC for External Partners:</strong> Central point of contact for external development partners, quality assurance, and coordination.</li>
      </ul>
    ),
  },
  {
    period: "Jun 2016 - Dec 2021",
    title: "Application Manager / Product Owner",
    company: "Zürcher Verkehrsverbund (ZVV)",
    description: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Business IT alignment for internal synchronization of process and service management.</li>
        <li>Implementation of strategic requirements regarding IT risk, security, and architecture management.</li>
        <li>Stakeholder management to optimize communication processes.</li>
        <li>Operation and further development of zvv.ch (Product Owner role).</li>
        <li>eTicketing: Technical project management, architecture, security, and operations.</li>
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
        <li>Lightning Network Node Deployment & Payment Systems.</li>
        <li>Custom Lightning Workflows for seamless digital transactions.</li>
      </ul>
    ),
  },
  {
    period: "May 2025",
    title: "Lecturer - Bitcoin & Lightning Network",
    company: "HWZ Hochschule für Wirtschaft Zürich",
    description: "Taught the Lightning Network module in Europe’s first Bitcoin-only executive program (CAS Bitcoin Economy). Covered scaling, instant payments, wallets, nodes, and routing markets.",
  },
  {
    period: "Nov 2023 - Oct 2024",
    title: "Board Member",
    company: "Bitcoin Association Switzerland",
    description: "Advancing Bitcoin adoption, public education, addressing legal challenges, and serving as media liaison to foster the Swiss Bitcoin ecosystem.",
  },
  {
    period: "Jan 2019 - Dec 2021",
    title: "Digital Innovation Consultant",
    company: "Tele Locher",
    description: "Planning and execution of digital multi-channel strategies. Smart Home integration and ICT multimedia solutions for corporate clients.",
  },
  {
    period: "Jan 2014 - Apr 2016",
    title: "Head of Web Development",
    company: "WebComTV",
    description: (
       <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Project management (Agile/Waterfall).</li>
        <li>Requirements Engineering & Business Analysis.</li>
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
        <li>Development of websites, iPad & Facebook applications.</li>
        <li>D-IT: Ensuring data security & integrity on film sets.</li>
        <li>LiveStreaming technical planning & integration.</li>
        <li>Infrastructure: NAS/SAN backup solutions & Tape Library management.</li>
      </ul>
    ),
  },
  {
    period: "Jan 2007 - Jun 2010",
    title: "Service Center Manager",
    company: "Tele Locher",
    description: (
       <ul className="list-disc list-outside ml-4 space-y-1">
        <li>IT Consulting & Support for corporate clients.</li>
        <li>Server configuration (Wintel, Linux) & Network planning.</li>
        <li>Corporate Design (Web, Print).</li>
      </ul>
    ),
  },
  {
    period: "May 2007 - Aug 2008",
    title: "Service & Support Agent",
    company: "Mister Q AG",
    description: "Application & System Support (Windows/Mac), Hardware maintenance.",
  },
];

const education = [
  {
    period: "Oct 2024 - May 2025",
    degree: "Executive MBA in General Management",
    school: "HWZ University of Applied Sciences",
    location: "Zurich, Switzerland",
    details: "Focus on Strategic Management, Leadership & Digital Transformation",
  },
  {
    period: "Mar 2025",
    degree: "International Management Program",
    school: "University of Virginia Darden School of Business",
    location: "Charlottesville, VA, USA",
    details: "Executive Education Module",
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
    degree: "Dipl. Business Information Technology Specialist HF",
    school: "IFA College of Professional Education",
    location: "Zurich, Switzerland",
    details: "Professional Bachelor ODEC (Higher College of Professional Education)",
  },
  {
    period: "2010 - 2013",
    degree: "Federal VET Diploma in Information Technology (EFZ)",
    school: "WISS Schools for Economy and Computer Science",
    location: "Zurich, Switzerland",
    details: "Specialization in Application Development",
  },
];

const topSkills = [
  "Proxmox",
  "Docker Products",
  "Cloudflare",
  "IT Project Management",
  "AI/Platform Leadership",
  "Bitcoin/Lightning",
  "Linux/Unix",
  "SQL/DB",
  "UML/BPMN",
  "CMS Dev",
];

const languages = [
  { lang: "German", level: "Native / Bilingual" },
  { lang: "English", level: "Full Professional" },
  { lang: "Spanish", level: "Native / Bilingual" },
  { lang: "French", level: "Elementary" },
];

const certifications = [
  "Cloud Computing",
  "Becoming a Thought Leader",
  "Conflict Management & Resolution",
  "Agile Software Development",
  "Project Management Fundamentals",
  "Programming Fundamentals",
];

export default function CV() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-amber-500/30">
      
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-[300px_1fr] min-h-screen">
        
        {/* --- Sidebar (Left) --- */}
        <aside className="bg-sidebar border-r border-sidebar-border md:sticky md:top-0 md:h-screen md:overflow-y-auto flex flex-col transition-colors duration-300">
          
          {/* Profile Image - Full Width & Matched Height */}
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-sidebar border-b border-sidebar-border shrink-0">
            <Avatar
              staticSrc="/mra.png"
              animatedSrc="/mra.gif"
              alt={profile.name}
              priority
            />
            {/* Desktop Gradient Overlay */}
            <div className="hidden md:block absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sidebar to-transparent opacity-90 transition-colors duration-300" />

            {/* Mobile Gradient Overlay & Content */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            
            <div className="md:hidden absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-10">
                <h1 className="text-3xl font-bold tracking-tight text-foreground mb-1 drop-shadow-md">{profile.name}</h1>
                <p className="text-lg text-accent font-medium mb-3 drop-shadow-md">{profile.title}</p>
                <p className="text-sm text-muted-foreground/90 leading-relaxed line-clamp-4 text-shadow-sm font-medium">{profile.summary}</p>
            </div>
            
            {/* Mobile Theme Toggle */}
            <div className="md:hidden absolute top-4 right-4 z-10">
                <ThemeToggle />
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="p-6 md:p-8 space-y-10">
            
            {/* Contact Info */}
            <div className="space-y-4">
              <SidebarItem icon={<Mail className="w-4 h-4" />} label="Email" value={profile.email} link={`mailto:${profile.email}`} />
              <SidebarItem icon={<Phone className="w-4 h-4" />} label="Phone" value={profile.phone} link={`tel:${profile.phone}`} />
              <SidebarItem icon={<MapPin className="w-4 h-4" />} label="Location" value={profile.location} />
              <SidebarItem icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" value="linkedin.com/in/marcelrapold" link={`https://linkedin.com/in/${profile.linkedin}`} />
              
              <div className="pt-4 border-t border-sidebar-border space-y-4">
                <SidebarItem icon={<Calendar className="w-4 h-4" />} label="Date of Birth" value="July 5, 1985" />
                <SidebarItem icon={<Flag className="w-4 h-4" />} label="Nationality" value="Swiss" />
                <SidebarItem icon={<Car className="w-4 h-4" />} label="Driving License" value="Category A1, B" />
              </div>
            </div>

            {/* Top Skills */}
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent" /> Top Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <span key={skill} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Languages className="w-4 h-4 text-accent" /> Languages
              </h3>
              <div className="space-y-3">
                {languages.map((l) => (
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
                <BadgeCheck className="w-4 h-4 text-accent" /> Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="text-xs text-muted-foreground flex items-start gap-2">
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
          <div className="hidden md:flex flex-col justify-center p-6 md:p-12 border-b border-border min-h-[400px] relative">
            <div className="absolute top-6 right-6">
              <ThemeToggle />
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
              <p className="text-lg leading-relaxed text-muted-foreground border-l-4 border-accent/20 pl-6">
                {profile.summary}
              </p>
            </div>
          </div>

          {/* Content Below */}
          <div className="p-6 md:p-12">
            {/* Experience */}
            <Section title="Professional Experience" icon={<Briefcase className="w-5 h-5" />}>
              <div className="space-y-10">
                {experience.map((item, i) => (
                  <ExperienceCard key={i} {...item} />
                ))}
              </div>
            </Section>

            {/* Education - Grid Layout for Compactness */}
            <Section title="Education" icon={<GraduationCap className="w-5 h-5" />}>
              <div className="grid md:grid-cols-2 gap-4">
                {education.map((item, i) => (
                  <EducationCard key={i} {...item} />
                ))}
              </div>
            </Section>

            {/* Footer */}
            <footer className="border-t border-border pt-8 mt-16 text-muted-foreground text-sm">
              <p>© {new Date().getFullYear()} Marcel Rapold • Digital Leader</p>
            </footer>
          </div>

        </main>
      </div>
    </div>
  );
}
