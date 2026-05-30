export const siteConfig = {
  name: "POP-LUKIĆ DOO",
  shortName: "POP-LUKIĆ",
  tagline: "Drvena ambalaža i rezana građa",
  description:
    "Proizvodnja drvenih paleta, gajbica i rezane građe. ISPM 15 i FSC™ sertifikovano. Sopstvena logistika iz Banatskog Velikog Sela.",
  url: "https://poplukic.rs",
  locale: "sr_RS",
  email: "office.poplukic@gmail.com",
  phone: "+381 13 881 200",
  phoneHref: "tel:+38113881200",
  address: {
    street: "Nikole Tesle 61",
    city: "Banatsko Veliko Selo",
    postal: "23312",
    country: "Srbija",
    full: "Nikole Tesle 61, 23312 Banatsko Veliko Selo, Srbija",
  },
  coords: { lat: 45.048, lng: 20.789 },
  founded: 2005,
  legal: {
    mb: "08736057",
    pib: "101080332",
    activity: "Prerada drveta",
  },
  certifications: [
    { id: "ispm15", name: "ISPM 15", detail: "IPPC - termički tretirane palete za izvoz" },
    { id: "fsc", name: "FSC™", detail: "FSC-C132511 - održivo šumsko drvo" },
  ],
  stats: [
    { value: "15.000+", label: "Gajbica dnevno" },
    { value: "20+", label: "Godina iskustva" },
    { value: "100%", label: "FSC sertifikovana sirovina" },
    { value: "24-48h", label: "Isporuka u Srbiji" },
  ],
} as const;

export const navLinks = [
  { name: "Početna", href: "/" },
  { name: "O nama", href: "/o-nama" },
  {
    name: "Proizvodi",
    href: "/#proizvodi",
    children: [
      { name: "Drvene palete", href: "/proizvodi/palete" },
      { name: "Drvene gajbice", href: "/proizvodi/gajbice" },
      { name: "Rezana građa", href: "/proizvodi/rezana-gradja" },
    ],
  },
  { name: "Transport", href: "/usluge/transport" },
  { name: "Kontakt", href: "/kontakt" },
] as const;

export const products = [
  {
    title: "Drvene palete",
    subtitle: "EUR standard i po meri",
    href: "/proizvodi/palete",
    image: "/images/palete.png",
    points: ["1200×800 / 1200×1000 mm", "ISPM 15 termički tretman", "Industrijske i boks palete"],
  },
  {
    title: "Drvene gajbice",
    subtitle: "Za voće i povrće",
    href: "/proizvodi/gajbice",
    image: "/images/gajbice-branded.png",
    points: ["Jednoredne i dvoredne", "Kapacitet 15.000 kom/dan", "Sklopljene ili u elementima"],
  },
  {
    title: "Rezana građa",
    subtitle: "Topola i hrast",
    href: "/proizvodi/rezana-gradja",
    image: "/images/lumber.png",
    points: ["KD 8-12% ili vazdušno sušena", "Klasa A i B", "Sušara i parna komora"],
  },
  {
    title: "Transport",
    subtitle: "Sopstveni vozni park",
    href: "/usluge/transport",
    image: "/images/transport-branded.png",
    points: ["Šleperi do 24 t", "Srbija i region", "CMR dokumentacija"],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Sečenje i priprema",
    desc: "Kontrolisana sirovina iz sertifikovanih izvora.",
    image: "/images/lumber.png",
  },
  {
    step: "02",
    title: "Sušenje i tretman",
    desc: "Automatizovane sušare i ISPM 15 termički tretman.",
    image: "/images/palete.png",
  },
  {
    step: "03",
    title: "Proizvodnja",
    desc: "Palete, gajbice i rezana građa po standardima.",
    image: "/images/gajbice-branded.png",
  },
  {
    step: "04",
    title: "Isporuka",
    desc: "Sopstvena logistika kompanije – brza i pouzdana dostava.",
    image: "/images/transport-branded.png",
  },
] as const;
