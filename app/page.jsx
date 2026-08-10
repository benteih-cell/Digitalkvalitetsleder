"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, ShieldCheck, Laptop, Users, ArrowRight, Sparkles, Mail, Phone, MapPin } from "lucide-react";

const contact = {
  title: "Digital kvalitetsleder | Dokumentstyring | Kvalitet og prosessforbedring",
  phone: "+47 482 65 659",
  email: "benteih@gmail.com",
  location: "Herøy, Nordland"
};

const services = [
  {
    icon: ShieldCheck,
    title: "Kvalitetsledelse",
    text: "Utvikling og vedlikehold av kvalitetssystemer, prosedyrer, avvikshåndtering, risikovurderinger og forbedringsarbeid."
  },
  {
    icon: FileText,
    title: "Dokumentstyring",
    text: "Struktur, versjonskontroll, dokumentregistre, styrende dokumentasjon og bedre informasjonsflyt."
  },
  {
    icon: Laptop,
    title: "Digital struktur",
    text: "Ryddig bruk av Microsoft 365, SharePoint, Teams og digitale arbeidsprosesser som gjør hverdagen enklere."
  },
  {
    icon: Users,
    title: "Opplæring og støtte",
    text: "Praktisk veiledning, arbeidsmøter og opplæring slik at rutiner faktisk blir tatt i bruk i organisasjonen."
  }
];

const hrServices = [
  "Onboarding og strukturert mottak av nye medarbeidere",
  "Oppfølging av fremmedspråklige og internasjonale ansatte",
  "Tverrkulturell kommunikasjon og integrering på arbeidsplassen",
  "Rutiner for opplæring, veiledning og medarbeideroppfølging"
];

const packages = [
  {
    name: "Kartlegging",
    description: "Et lavterskel oppstartsoppdrag for å avklare behov og gi konkrete anbefalinger.",
    items: ["Gjennomgang av dagens rutiner og dokumentasjon", "Kort behovsanalyse", "Skriftlig anbefaling", "Oppsummeringsmøte"]
  },
  {
    name: "Prosjektoppdrag",
    description: "Et avgrenset oppdrag med tydelig definert leveranse og tidsramme.",
    featured: true,
    items: ["Fast avtalt omfang og leveranse", "Dokumentstyring eller kvalitetssystem", "Revisjonsforberedelse", "Skriftlig sluttrapport"]
  },
  {
    name: "Fullt engasjement",
    description: "Bistand over en avtalt periode, f.eks. ved vikariat eller kapasitetsbehov.",
    items: ["Vikariat eller kapasitetsavlastning i avtalt periode", "Løpende oppfølging gjennom perioden", "Tett samarbeid med ledelsen", "Overlevering og dokumentasjon ved avslutning"]
  }
];

const audiences = [
  "Bygg og anlegg",
  "Havbruk og sjømat",
  "Maritime virksomheter",
  "Teknologibedrifter",
  "Ingeniør- og konsulentselskaper",
  "Vekstselskaper med økende dokumentasjonskrav"
];

const experience = [
  "Dokumentstyring og informasjonsforvaltning i prosjektmiljøer",
  "Kvalitetssystemer, QA/HMS og styrende dokumentasjon",
  "Prosessforbedring, workshopledelse og opplæring",
  "Digital struktur i Microsoft 365, SharePoint og Teams"
];

function Button({ children, variant = "primary", className = "" }) {
  return <button className={`btn ${variant === "outline" ? "btnOutline" : "btnPrimary"} ${className}`}>{children}</button>;
}

export default function Home() {
  return (
    <div className="site">
      <header className="header">
        <div className="headerInner">
          <div className="brandBlock">
            <div className="logo"><ShieldCheck size={24} /></div>
            <div>
              <p className="brand">Digital Kvalitetsleder</p>
              <p className="tagline">Kvalitet. Struktur. Forbedring.</p>
            </div>
          </div>
          <nav className="nav">
            <a href="#tjenester">Tjenester</a>
            <a href="#hr">HR</a>
            <a href="#pakker">Pakker</a>
            <a href="#om">Om</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a href="#kontakt"><Button className="smallBtn">Book samtale</Button></a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroBg" />
          <div className="container heroGrid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="pill"><Sparkles size={16} /> Ekstern kvalitetsleder ved behov</div>
              <h1>Få kontroll på kvalitet, dokumentasjon og struktur uten å ansette.</h1>
              <p className="heroLead">Digital Kvalitetsleder gir små og mellomstore virksomheter tilgang til profesjonell kvalitetsledelse, dokumentstyring og prosessforbedring, levert som avgrensede oppdrag tilpasset behovet.</p>
              <div className="callout">For virksomheter som trenger bedre kontroll på kvalitetssystemer, dokumentasjon, SharePoint, prosesser og etterlevelse uten å etablere en egen fulltidsstilling.</div>
              <div className="actions">
                <a href="#kontakt"><Button>Ta kontakt <ArrowRight size={20} /></Button></a>
                <a href="#pakker"><Button variant="outline">Se tjenestepakker</Button></a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <div className="challengeCard">
                <p className="overline light">Typiske utfordringer</p>
                <div className="challengeList">
                  {["Dokumenter ligger spredt i mapper, e-post og Teams", "Prosedyrer er utdaterte eller mangler helt", "Avvik følges ikke systematisk opp", "Daglig leder gjør kvalitetsarbeidet på kveldstid", "Bedriften vil bruke AI, men mangler ryddig informasjonsgrunnlag"].map((item) => (
                    <div key={item} className="challengeItem"><CheckCircle2 size={20} /><p>{item}</p></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="tjenester" className="section white">
          <div className="container">
            <div className="sectionIntro">
              <p className="overline">Hva vi leverer</p>
              <h2>Praktisk kvalitetsarbeid som skaper orden og fremdrift.</h2>
              <p>Målet er ikke flere dokumenter for dokumentenes skyld. Målet er bedre arbeidsprosesser, mindre risiko og mer tid til kjernevirksomheten.</p>
            </div>
            <div className="serviceGrid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="serviceCard">
                    <div className="iconBox"><Icon size={28} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="container audienceGrid">
            <div>
              <p className="overline light">Hvem passer det for?</p>
              <h2>For virksomheter som trenger struktur, men ikke en heltidsstilling.</h2>
              <p className="darkLead">Tjenesten passer særlig godt for små og mellomstore bedrifter med økende krav til dokumentasjon, kvalitet, etterlevelse og digital samhandling.</p>
            </div>
            <div className="audienceCards">
              {audiences.map((audience) => (
                <div key={audience} className="audienceCard"><CheckCircle2 size={20} />{audience}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="hr" className="section pale">
          <div className="container audienceGrid">
            <div className="sectionIntro">
              <p className="overline">HR-nær støtte</p>
              <h2>God struktur på HR-oppgaver skaper trygghet i hverdagen.</h2>
              <p>Mange virksomheter vokser raskt og henter inn ny arbeidskraft, uten å ha rutiner på plass for mottak og oppfølging. Vi bistår med de HR-relaterte oppgavene som ofte faller mellom stolene.</p>
            </div>
            <div className="experienceGrid" style={{ marginTop: 0 }}>
              {hrServices.map((item) => (
                <div key={item}><CheckCircle2 size={20} />{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="pakker" className="section pale">
          <div className="container">
            <div className="centerIntro">
              <p className="overline">Oppdragstyper</p>
              <h2>Velg oppdragsformen som passer behovet.</h2>
              <p>Tydelig avgrenset omfang gir forutsigbarhet og lav terskel for å komme i gang – uten løpende bindingstid.</p>
            </div>
            <div className="packageGrid">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`packageCard ${pkg.featured ? "featured" : ""}`}>
                  {pkg.featured && <div className="badge">Mest aktuell</div>}
                  <h3>{pkg.name}</h3>
                  <p className="packageDescription">{pkg.description}</p>
                  <ul>
                    {pkg.items.map((item) => <li key={item}><CheckCircle2 size={20} />{item}</li>)}
                  </ul>
                  <a href={`mailto:${contact.email}?subject=Forespørsel om ${pkg.name}-pakken`}><Button className="fullBtn">Be om tilbud</Button></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai" className="section dark">
          <div className="container aiBox">
            <div>
              <p className="overline light">AI-klar bedrift</p>
              <h2>God AI starter med god informasjonsstruktur.</h2>
              <p className="darkLead">Mange virksomheter ønsker å ta i bruk Copilot og andre AI-verktøy, men mangler ryddige dokumenter, tydelige rutiner og kvalitetssikret informasjon. Vi hjelper deg med å få grunnmuren på plass.</p>
            </div>
            <div className="aiList">
              {["Rydding av dokumenter og mapper", "Standard for filnavn, versjon og eierskap", "Strukturering av SharePoint og Teams", "Forbedret søkbarhet og informasjonsflyt", "Rutiner for kvalitetssikring før AI tas i bruk"].map((item) => (
                <div key={item}><CheckCircle2 size={20} />{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="om" className="section white">
          <div className="container aboutBox">
            <div className="aboutDark">
              <p className="overline light">Om tjenesten</p>
              <h2>Digital Kvalitetsleder</h2>
              <p>{contact.title}</p>
            </div>
            <div>
              <p className="aboutText">Digital Kvalitetsleder er utviklet for virksomheter som trenger mer struktur, bedre dokumentflyt og tryggere kvalitetsarbeid, men som ikke har behov for en fulltidsressurs. Tjenesten kombinerer praktisk erfaring fra dokumentstyring, kvalitetsarbeid, prosessforbedring og digital samhandling.</p>
              <div className="experienceGrid">
                {experience.map((item) => <div key={item}><CheckCircle2 size={20} />{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="section pale">
          <div className="container contactBox">
            <p className="overline">Kontakt</p>
            <h2>Trenger du en kvalitetsleder, men ikke på heltid?</h2>
            <p>Ta kontakt for en uforpliktende samtale om hvordan Digital Kvalitetsleder kan bidra med kvalitet, dokumentasjon og struktur i din virksomhet.</p>
            <div className="contactGrid">
              <a href={`mailto:${contact.email}`}><Mail size={24} /><span>E-post</span><strong>{contact.email}</strong></a>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}><Phone size={24} /><span>Telefon</span><strong>{contact.phone}</strong></a>
              <div><MapPin size={24} /><span>Sted</span><strong>{contact.location}</strong></div>
            </div>
            <a href={`mailto:${contact.email}?subject=Uforpliktende samtale om Digital Kvalitetsleder`}><Button className="emailBtn"><Mail size={20} /> Send e-post</Button></a>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Digital Kvalitetsleder</footer>
    </div>
  );
}
