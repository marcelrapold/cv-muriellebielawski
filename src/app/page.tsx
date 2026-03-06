import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  Cpu,
  Languages,
  BadgeCheck,
  Heart,
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { PrintButton } from "@/components/print-button";
import { Avatar } from "@/components/avatar";
import { DocumentLanguage } from "@/components/document-language";

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
  <section id={id} className={cn("mb-12 print:mb-4", className)}>
    <div className="mb-6 flex items-center gap-3 border-b border-border pb-2 print:mb-3 print:[break-after:avoid]">
      {icon && <div className="text-accent">{icon}</div>}
      <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">{title}</h2>
    </div>
    <div className="space-y-6 print:space-y-3">{children}</div>
  </section>
);

const ExperienceCard = ({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: ReactNode;
}) => (
  <div className="relative pl-8 print:pl-0 md:pl-0 print-keep">
    <div className="absolute bottom-0 left-3 top-2 w-px bg-border print:hidden md:hidden" />
    <div className="group gap-6 print:block md:grid md:grid-cols-[120px_1fr] lg:grid-cols-[150px_1fr]">
      <div className="hidden pt-1 text-right print:hidden md:block">
        <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-accent">
          {period}
        </span>
      </div>
      <div className="relative">
        <div className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-border bg-muted print:hidden md:hidden" />
        <div className="mb-1 print:hidden md:hidden">
          <span className="font-mono text-xs text-muted-foreground">{period}</span>
        </div>
        <div className="print:[break-inside:avoid]">
          <h3 className="flex items-center gap-2 text-lg font-bold text-foreground transition-colors group-hover:text-accent">
            {title}
          </h3>
          <div className="mb-1 hidden font-mono text-xs text-muted-foreground print:block">{period}</div>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-accent print:mb-1">
            {company}
          </div>
        </div>
        <div className="text-sm leading-relaxed text-muted-foreground print-experience-block">{description}</div>
      </div>
    </div>
  </div>
);

const EducationCard = ({
  school,
  degree,
  period,
  details,
}: {
  school: string;
  degree: string;
  period: string;
  details?: string;
}) => (
  <div className="flex h-full flex-col rounded-lg border border-border bg-muted/30 p-4 transition-colors hover:border-accent/50 print:p-2.5">
    <div className="mb-2 flex items-start justify-between print:mb-1 print:[break-inside:avoid]">
      <h3 className="pr-2 text-sm font-bold leading-snug text-foreground">{degree}</h3>
      <span className="shrink-0 whitespace-nowrap rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
        {period}
      </span>
    </div>
    <div className="mb-1 text-xs font-medium text-accent print:mb-0.5">{school}</div>
    {details && <div className="mt-auto border-t border-border pt-2 text-xs text-muted-foreground print:pt-1.5">{details}</div>}
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
  <div className="group flex items-center gap-3 text-sm print:text-[11px]">
    <div className="shrink-0 text-muted-foreground transition-colors group-hover:text-accent">{icon}</div>
    <div className="overflow-hidden">
      <div className="text-xs text-muted-foreground print:text-[10px]">{label}</div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "block font-medium text-foreground transition-colors hover:text-accent",
            multiline ? "whitespace-pre-line leading-snug" : "truncate",
          )}
        >
          {value}
        </a>
      ) : (
        <div
          className={cn(
            "font-medium text-foreground",
            multiline ? "whitespace-pre-line leading-snug" : "truncate",
          )}
        >
          {value}
        </div>
      )}
    </div>
  </div>
);

const profileDe = {
  name: "Murielle Bielawski",
  title: "Bachelor of Science (B.Sc.) in Business Administration | HR Operations | Business Support | Marketing Coordination",
  location: "Berlin, Deutschland",
  email: "muriellebielawski@yahoo.de",
  phone: "+49 176 43286430",
  summaryLines: [
    "HR- und operationsorientierte Business-Kandidatin mit Fokus auf Business Support und Marketing Coordination.",
    "Praxiserfahrung in HR, Administration, Marketing und serviceorientierten Prozessen in Corporate-, Mobility- und Retail-Umfeldern.",
  ],
};

const profileEn = {
  name: "Murielle Bielawski",
  title: "Bachelor of Science (B.Sc.) in Business Administration | HR Operations | Business Support | Marketing Coordination",
  location: "Berlin, Germany",
  email: "muriellebielawski@yahoo.de",
  phone: "+49 176 43286430",
  summaryLines: [
    "Business candidate focused on HR operations, business support, and marketing coordination.",
    "Hands-on experience across HR, administration, marketing, and customer-facing processes in corporate, mobility, and retail environments.",
  ],
};

const uiText = {
  de: {
    email: "E-Mail",
    phone: "Telefon",
    location: "Standort",
    coreSkills: "Kernkompetenzen",
    languages: "Sprachen",
    certifications: "Zertifikate & ausgewählte Projekte",
    interests: "Interessen",
    experience: "Berufserfahrung",
    internships: "Praktika",
    education: "Ausbildung",
    quickLinks: "Direktlinks",
    toExperience: "Zu Berufserfahrung",
    toInternships: "Zu Praktika",
    toEducation: "Zu Ausbildung",
  },
  en: {
    email: "Email",
    phone: "Phone",
    location: "Location",
    coreSkills: "Core Skills",
    languages: "Languages",
    certifications: "Certificates & Selected Projects",
    interests: "Interests",
    experience: "Professional Experience",
    internships: "Internships",
    education: "Education",
    quickLinks: "Quick Links",
    toExperience: "Go to Experience",
    toInternships: "Go to Internships",
    toEducation: "Go to Education",
  },
};

const experienceDe = [
  {
    period: "07/24 - 12/24",
    title: "Werkstudentin im HR",
    company: "50Hertz, Berlin",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Werkstudentinnenrolle in den HR-Operations eines etablierten Unternehmens mit Fokus auf dokumentensichere
          Prozesse, administrative Präzision und die verlässliche Bearbeitung personalrelevanter Vorgänge.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Pflege von Mitarbeiterdaten und Bearbeitung laufender Vorgänge in den eingesetzten HR-Systemen.</li>
          <li>Erstellung von Arbeitszeugnissen und Referenzschreiben für Mitarbeitende.</li>
          <li>Bearbeitung von Vertragsverlängerungen, Arbeitszeitanpassungen und administrativen Vorgängen im Umfeld studentischer Beschäftigungsverhältnisse.</li>
        </ul>
      </>
    ),
  },
  {
    period: "04/23 - 06/23",
    title: "Werkstudentin",
    company: "Miet me, Riller and Schnauck, Berlin",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Operative Schnittstellenrolle zwischen Kundenservice, Administration und Tagesgeschäft in einem dynamischen
          Mobilitätsumfeld, das Genauigkeit, Tempo und hohe Verlässlichkeit verlangte.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Erstellung und Verwaltung von Fahrzeugmietverträgen.</li>
          <li>Datenpflege und schriftliche Kundenkorrespondenz zur Sicherstellung reibungsloser Vermietungsabläufe.</li>
          <li>Prüfung von Fahrzeugen vor und nach der Vermietung hinsichtlich Schäden, Sauberkeit und Tankstand.</li>
        </ul>
      </>
    ),
  },
  {
    period: "03/23 - 05/23",
    title: "Minijob, Einzelhandel",
    company: "Peek & Cloppenburg, Berlin",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Kundennahe Tätigkeit im Einzelhandel mit Fokus auf Servicequalität, Verkaufssupport und souveräner
          Abwicklung frequenzstarker Store-Prozesse.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Abwicklung von Kassiervorgängen und Zahlungsprozessen.</li>
          <li>Unterstützung des Verkaufsteams bei Kundenberatung und Warenpräsentation zur Förderung eines positiven Einkaufserlebnisses.</li>
        </ul>
      </>
    ),
  },
  {
    period: "06/21 - 08/21",
    title: "Minijob",
    company: "Dentistry Kubina, Leipzig",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Berufserfahrung in einem sensiblen Praxisumfeld, in dem Diskretion, Genauigkeit und strukturierte
          Unterstützung im administrativen Tagesgeschäft essenziell waren.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Administrative Unterstützung im Tagesgeschäft, insbesondere bei Terminplanung und Pflege von Patientenunterlagen.</li>
          <li>Unterstützung des Praxisteams bei organisatorischen Abläufen und in der Patientenbetreuung.</li>
        </ul>
      </>
    ),
  },
];

const experienceEn = [
  {
    period: "07/24 - 12/24",
    title: "Working Student in HR",
    company: "50Hertz, Berlin",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Working student role within the HR operations function of an established company, focused on process-safe
          administration, precise documentation, and reliable handling of personnel-related workflows.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Maintained employee data and processed recurring workflows in the relevant HR systems.</li>
          <li>Prepared employment references and recommendation letters for employees.</li>
          <li>Handled contract renewals, working-time adjustments, and administrative workflows related to student employment.</li>
        </ul>
      </>
    ),
  },
  {
    period: "04/23 - 06/23",
    title: "Working Student",
    company: "Miet me, Riller and Schnauck, Berlin",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Cross-functional role spanning customer service, administration, and operations in a fast-moving mobility
          environment where accuracy, pace, and reliability were essential.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Created and managed vehicle rental contracts.</li>
          <li>Maintained operational data and handled written customer correspondence to support smooth rental processes.</li>
          <li>Inspected vehicles before and after rental for damage, cleanliness, and fuel levels.</li>
        </ul>
      </>
    ),
  },
  {
    period: "03/23 - 05/23",
    title: "Minijob, retail store",
    company: "Peek & Cloppenburg, Berlin",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Customer-facing retail role with a strong service mindset and confident support of sales-driven processes in
          a demanding store environment.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Handled point-of-sale transactions and payment processing.</li>
          <li>Supported the sales team with customer service and merchandise presentation, contributing to a positive shopping experience.</li>
        </ul>
      </>
    ),
  },
  {
    period: "06/21 - 08/21",
    title: "Minijob",
    company: "Dentistry Kubina, Leipzig",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Professional experience in a sensitive practice setting that required discretion, organization, and a calm,
          structured approach to administrative and patient-facing routines.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Supported daily administrative work, including appointment scheduling and maintenance of patient records.</li>
          <li>Assisted the dental team with organizational routines and patient support.</li>
        </ul>
      </>
    ),
  },
];

const internshipDe = [
  {
    period: "04/24 - 06/24",
    title: "Praktikum im Marketing",
    company: "Schmohl AG, Zurich",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Marketingpraktikum in einem hochwertigen Automobilumfeld mit Fokus auf markenorientierte Kommunikation,
          Eventunterstützung und präzise administrative Koordination.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Erstellung von Social-Media-Content zur Stärkung der Online-Präsenz.</li>
          <li>Operative Unterstützung bei der Planung und Durchführung von Veranstaltungen, einschließlich der Präsentation neuer Automodelle.</li>
          <li>Administrative Koordination sowie Beiträge zur Erstellung eines Emergency Handbooks.</li>
        </ul>
      </>
    ),
  },
  {
    period: "08/21 - 09/21",
    title: "Praktikum im Marketing",
    company: "La marca mobility GmbH, Landsberg am Lech",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Marketingstation mit Fokus auf Social Media, Eventorganisation und operative Unterstützung kundenorientierter
          Kommunikations- und Markenmaßnahmen.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Betreuung und Pflege von Social-Media-Kanälen zur Steigerung der Markenbekanntheit.</li>
          <li>Planung und Koordination von Events einschließlich Materialorganisation und Teilnehmerkommunikation.</li>
          <li>Unterstützung beim Aufbau und der Pflege von Kundenbeziehungen durch zielgerichtete Marketingmaßnahmen.</li>
        </ul>
      </>
    ),
  },
];

const internshipEn = [
  {
    period: "04/24 - 06/24",
    title: "Internship in Marketing",
    company: "Schmohl AG, Zurich",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Marketing internship in a premium automotive environment focused on brand communication, event support, and
          precise administrative coordination.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Created social media content to strengthen the brand's online presence.</li>
          <li>Supported the planning and execution of events, including presentations of new vehicle models.</li>
          <li>Handled administrative coordination and contributed to the creation of an emergency handbook.</li>
        </ul>
      </>
    ),
  },
  {
    period: "08/21 - 09/21",
    title: "Internship in Marketing",
    company: "La marca mobility GmbH, Landsberg am Lech",
    description: (
      <>
        <p className="mb-3 text-foreground">
          Marketing role focused on social media, event coordination, and operational support for customer-facing
          communication and brand-building activities.
        </p>
        <ul className="ml-4 list-outside list-disc space-y-1">
          <li>Managed and maintained social media channels to support brand visibility.</li>
          <li>Coordinated event logistics, including materials and participant communication.</li>
          <li>Supported customer relationship development through targeted marketing activities.</li>
        </ul>
      </>
    ),
  },
];

const educationDe = [
  {
    period: "10/25 - heute",
    degree: "M.Sc. Business Administration",
    school: "Business & Law School, Berlin",
  },
  {
    period: "10/21 - 07/25",
    degree: "B.Sc. International Business",
    school: "Business & Law School, Berlin",
  },
  {
    period: "07/23 - 12/23",
    degree: "Auslandssemester",
    school: "UNCW Wilmington, North Carolina",
  },
  {
    period: "08/19 - 07/21",
    degree: "IB Diploma (Higher Level)",
    school: "International School, Leipzig",
    details: "Art, Business, English",
  },
];

const educationEn = [
  {
    period: "10/25 - present",
    degree: "M.Sc. Business Administration",
    school: "Business & Law School, Berlin",
  },
  {
    period: "10/21 - 07/25",
    degree: "B.Sc. International Business",
    school: "Business & Law School, Berlin",
  },
  {
    period: "07/23 - 12/23",
    degree: "Study Abroad Semester",
    school: "UNCW Wilmington, North Carolina",
  },
  {
    period: "08/19 - 07/21",
    degree: "IB Diploma (Higher Level)",
    school: "International School, Leipzig",
    details: "Art, Business, English",
  },
];

const topSkillsDe = [
  "HR Operations & Personaladministration",
  "Administrative Koordination & Prozesssicherheit",
  "Marketing Coordination & Social Media Support",
  "Dokumenten- und Datenmanagement (SAP, ELO)",
  "Stakeholder- und Kundenkommunikation",
  "MS Office für Reporting, Korrespondenz & Organisation",
];

const topSkillsEn = [
  "HR Operations & People Administration",
  "Administrative Coordination & Process Reliability",
  "Marketing Coordination & Social Media Support",
  "Document and Data Management (SAP, ELO)",
  "Stakeholder and Customer Communication",
  "MS Office for Reporting, Correspondence & Organization",
];

const languages = [
  { lang: "Deutsch", flagCode: "de", level: "Muttersprache" },
  { lang: "Englisch", flagCode: "us", level: "C1" },
  { lang: "Ukrainisch", flagCode: "ua", level: "Grundkenntnisse" },
  { lang: "Spanisch", flagCode: "es", level: "Grundkenntnisse" },
];

const languagesEn = [
  { lang: "German", flagCode: "de", level: "Native" },
  { lang: "English", flagCode: "us", level: "C1" },
  { lang: "Ukrainian", flagCode: "ua", level: "Basic" },
  { lang: "Spanish", flagCode: "es", level: "Basic" },
];

const certificationsDe = [
  "12/23 - American Red Cross: First Aid Certification",
  "06/21 - Ausgewähltes Marketingprojekt: NIVEA / Beiersdorf (Berlin)",
];

const certificationsEn = [
  "12/23 - American Red Cross: First Aid Certification",
  "06/21 - Selected marketing project: NIVEA / Beiersdorf (Berlin)",
];

const niveaProjectBulletsDe = [
  "Produktkonzept für NIVEA entwickelt",
  "Zielgruppe, Positionierung und Wettbewerb analysiert",
  "Konzept als Prototyp ausgearbeitet und präsentiert",
];

const niveaProjectBulletsEn = [
  "Developed a product concept for NIVEA",
  "Analyzed target audience, positioning, and competitors",
  "Translated the concept into a prototype and presented it",
];

const interestsDe = ["Fitness & Zumba", "Reisen", "Podcasts"];
const interestsEn = ["Fitness & Zumba", "Travel", "Podcasts"];

const pageMetadata = {
  de: {
    title: "Murielle Bielawski | HR Operations, Business Support & Marketing Coordination",
    description:
      "Murielle Bielawski ist B.Sc.-Absolventin in International Business und M.Sc.-Kandidatin mit Praxiserfahrung in HR-Operations, administrativer Koordination, Marketing und serviceorientierten Geschäftsprozessen in Berlin.",
  },
  en: {
    title: "Murielle Bielawski | HR Operations, Business Support & Marketing Coordination",
    description:
      "Murielle Bielawski is a B.Sc. International Business graduate and M.Sc. Business Administration candidate with hands-on experience in HR operations, administrative coordination, marketing, and customer-facing business processes in Berlin.",
  },
} as const;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = lang === "de" ? "de" : "en";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cv-muriellebielawski.vercel.app";
  const pageUrl = locale === "de" ? `${siteUrl}?lang=de` : siteUrl;
  const metadata = pageMetadata[locale];

  return {
    title: { absolute: metadata.title },
    description: metadata.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        en: siteUrl,
        de: `${siteUrl}?lang=de`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? "en_US" : "de_DE",
      url: pageUrl,
      title: metadata.title,
      description: metadata.description,
      images: [{ url: `/api/social-image?lang=${locale}`, alt: "Murielle Bielawski CV preview" }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [`/api/social-image?lang=${locale}`],
    },
  };
}

export default async function CV({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = lang === "de" ? "de" : "en";
  const profile = locale === "en" ? profileEn : profileDe;
  const topSkillsLocalized = locale === "en" ? topSkillsEn : topSkillsDe;
  const languagesLocalized = locale === "en" ? languagesEn : languages;
  const certificationsLocalized = locale === "en" ? certificationsEn : certificationsDe;
  const niveaProjectBulletsLocalized = locale === "en" ? niveaProjectBulletsEn : niveaProjectBulletsDe;
  const experienceLocalized = locale === "en" ? experienceEn : experienceDe;
  const internshipLocalized = locale === "en" ? internshipEn : internshipDe;
  const educationLocalized = locale === "en" ? educationEn : educationDe;
  const interestsLocalized = locale === "en" ? interestsEn : interestsDe;
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
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cv-muriellebielawski.vercel.app",
    knowsAbout: [
      "HR Operations",
      "Administrative Coordination",
      "Business Support",
      "Marketing Coordination",
      "Business Administration",
      "Data Management",
      "Customer Communication",
    ],
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-amber-500/30 print:bg-white print:text-black">
      <DocumentLanguage lang={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <div className="mx-auto min-h-screen max-w-7xl print:min-h-0 print:grid print:grid-cols-[200px_1fr] md:grid md:grid-cols-[300px_1fr] md:[--hero-row-h:24rem] lg:[--hero-row-h:25rem]">
        <aside className="flex flex-col border-r border-sidebar-border bg-sidebar transition-colors duration-300 print:static print:h-auto print:overflow-visible print:border-b-0 print:border-r print:bg-white print:[break-inside:avoid] md:sticky md:top-0 md:h-screen md:overflow-y-auto">
          <div className="relative w-full shrink-0 overflow-hidden border-b border-sidebar-border bg-sidebar aspect-[3/4] print:h-auto print:aspect-[3/4] md:h-[var(--hero-row-h)] md:aspect-auto">
            <div className="absolute inset-0 print:hidden">
              <Avatar staticSrc="/muri.png" animatedSrc="/muri.png" alt={profile.name} priority />
            </div>
            <img
              src="/muri.png"
              alt={profile.name}
              className="hidden h-full w-full object-cover object-center print:block"
              loading="eager"
              decoding="async"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-32 bg-gradient-to-t from-sidebar to-transparent opacity-90 transition-colors duration-300 print:hidden md:block" />
            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 print:hidden md:hidden" />
            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-background/90 via-transparent to-transparent print:hidden md:hidden" />
            <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col justify-end p-6 print:hidden md:hidden">
              <div className="mb-1 text-3xl font-bold tracking-tight text-foreground drop-shadow-md">{profile.name}</div>
              <p className="mb-3 text-lg font-medium text-accent drop-shadow-md">{profile.title}</p>
              <p className="line-clamp-4 text-sm font-medium leading-relaxed text-muted-foreground/90 text-shadow-sm">
                {profile.summaryLines.join(" ")}
              </p>
            </div>
            <div className="absolute right-4 top-4 z-30 print:hidden md:hidden">
              <div className="flex items-center gap-2">
                <LanguageToggle locale={locale} />
                <ThemeToggle locale={locale} />
                <PrintButton locale={locale} />
              </div>
            </div>
          </div>

          <div className="space-y-10 p-6 print:space-y-2 print:p-2 md:p-8">
            <div id="contact" className="space-y-4 print:space-y-3 print-avoid-break">
              <SidebarItem icon={<Mail className="h-4 w-4" />} label={t.email} value={profile.email} link={`mailto:${profile.email}`} />
              <SidebarItem icon={<Phone className="h-4 w-4" />} label={t.phone} value={profile.phone} link={`tel:${profile.phone}`} />
              <SidebarItem
                icon={<MapPin className="h-4 w-4" />}
                label={t.location}
                value={profile.location}
                link="https://maps.google.com/?q=Berlin"
                multiline
              />
            </div>

            <nav className="border-t border-sidebar-border pt-2 print:hidden md:hidden">
              <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{t.quickLinks}</h3>
              <div className="space-y-1.5">
                <a href="#experience" className="block text-xs text-sidebar-foreground transition-colors hover:text-foreground">
                  {t.toExperience}
                </a>
                <a href="#internships" className="block text-xs text-sidebar-foreground transition-colors hover:text-foreground">
                  {t.toInternships}
                </a>
                <a href="#education" className="block text-xs text-sidebar-foreground transition-colors hover:text-foreground">
                  {t.toEducation}
                </a>
              </div>
            </nav>

            <div className="pt-4 print:pt-3 border-t border-sidebar-border">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground print-keep-heading">
                <span className="inline-flex w-4 shrink-0 justify-center">
                  <Cpu className="h-4 w-4 text-accent" />
                </span>
                {t.coreSkills}
              </h3>
              <div className="space-y-2 print:space-y-1">
                {topSkillsLocalized.map((skill) => (
                  <div
                    key={skill}
                    className="border-l-2 border-accent/40 py-0.5 pl-2 text-xs leading-snug text-sidebar-foreground print:py-0 print:text-[9px] print:leading-tight print-avoid-break"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 print:pt-3 border-t border-sidebar-border print-avoid-break">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground print-keep-heading">
                <span className="inline-flex w-4 shrink-0 justify-center">
                  <Languages className="h-4 w-4 text-accent" />
                </span>
                {t.languages}
              </h3>
              <div className="space-y-3 print:space-y-2 print-keep-list">
                {languagesLocalized.map((l) => (
                  <div key={l.lang} className="print-avoid-break">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                      <img
                        src={`/flags/${l.flagCode}.svg`}
                        alt=""
                        aria-hidden="true"
                        className="h-3 w-4 shrink-0 rounded-[2px] object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <span>{l.lang}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{l.level}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 print:pt-3 border-t border-sidebar-border print-avoid-break">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground print-keep-heading">
                <span className="inline-flex w-4 shrink-0 justify-center">
                  <BadgeCheck className="h-4 w-4 text-accent" />
                </span>
                {t.certifications}
              </h3>
              <ul className="space-y-2 print:space-y-1 print-keep-list">
                {certificationsLocalized.map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-xs text-muted-foreground print:text-[10px] print-avoid-break">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {cert}
                  </li>
                ))}
              </ul>
              <ul className="ml-4 mt-3 list-outside list-disc space-y-1 text-xs text-muted-foreground">
                {niveaProjectBulletsLocalized.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 print:pt-3 border-t border-sidebar-border print-avoid-break">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground print-keep-heading">
                <span className="inline-flex w-4 shrink-0 justify-center">
                  <Heart className="h-4 w-4 text-accent" />
                </span>
                {t.interests}
              </h3>
              <ul className="space-y-2 print:space-y-1 print-keep-list">
                {interestsLocalized.map((interest) => (
                  <li key={interest} className="flex items-start gap-2 text-xs text-muted-foreground print:text-[10px] print-avoid-break">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="flex flex-col">
          <div className="relative hidden min-h-0 flex-col justify-center border-b border-border p-6 print:flex print:p-5 md:flex md:h-[var(--hero-row-h)] md:p-12">
            <div className="absolute right-6 top-6 print:hidden">
              <div className="flex items-center gap-2">
                <LanguageToggle locale={locale} />
                <ThemeToggle locale={locale} />
                <PrintButton locale={locale} />
              </div>
            </div>
            <div className="mb-8">
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{profile.name}</h1>
              <p className="text-xl font-medium text-accent print:text-lg print:leading-snug">{profile.title}</p>
            </div>
            <div className="max-w-3xl">
              <p className="border-l-4 border-accent/20 pl-6 text-lg leading-relaxed text-muted-foreground print:pl-4 print:text-[15px]">
                {profile.summaryLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="p-6 print:p-4 md:p-12">
            <Section id="experience" title={t.experience} icon={<Briefcase className="h-5 w-5" />}>
              <div className="space-y-10 print:space-y-3">
                {experienceLocalized.map((item, i) => (
                  <ExperienceCard key={i} {...item} />
                ))}
              </div>
            </Section>

            <Section id="internships" title={t.internships} icon={<Briefcase className="h-5 w-5" />}>
              <div className="space-y-10 print:space-y-3">
                {internshipLocalized.map((item, i) => (
                  <ExperienceCard key={i} {...item} />
                ))}
              </div>
            </Section>

            <Section id="education" title={t.education} icon={<GraduationCap className="h-5 w-5" />}>
              <div className="grid gap-4 print:grid-cols-1 print:gap-2 md:grid-cols-2">
                {educationLocalized.map((item, i) => (
                  <EducationCard key={i} {...item} />
                ))}
              </div>
            </Section>

            <footer className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground print:mt-5 print:pt-3">
              <p>© 2026 Murielle Bielawski</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
