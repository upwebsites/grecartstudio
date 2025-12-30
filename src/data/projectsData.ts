export interface Project {
  id: string;
  title: string;
  description: string;
  thumbUrl: string;
  imageUrls: string[];
  pdfUrls?: string[];
  pdfUrl?: string;
}

export const projects: Project[] = [];

const am: Project = {
  id: "am",
  title: "AM",
  description: "Materiale PDF per il cliente AM.",
  thumbUrl: "/images/loghilavori/Logo_AM.png",
  imageUrls: [],
  pdfUrl: "/PDF/AM_01_2026.pdf"
};

const bimarket: Project = {
  id: "bimarket-2025",
  title: "Bimarket 2025",
  description: "Materiale PDF per Bimarket 2025.",
  thumbUrl: "/images/loghilavori/Logo_Bimarket.png",
  imageUrls: [],
  pdfUrl: "/PDF/Bimarket 2025_17.pdf"
};

const bitar: Project = {
  id: "bitar",
  title: "Bitar",
  description: "Materiale PDF per Bitar.",
  thumbUrl: "/images/loghilavori/Logo_Bitar.png",
  imageUrls: [],
  pdfUrl: "/PDF/BITAR_COMPLETO.pdf"
};

const delizie: Project = {
  id: "le-delizie-del-sud",
  title: "Le Delizie Del Sud",
  description: "Materiale promozionale integrato: CANVASS, Progetto Pulito, PET FOOD e Supermercati accorpati per il brand Le delizie del sud.",
  thumbUrl: "/images/loghilavori/Logo_Delizie.png",
  imageUrls: [],
  pdfUrls: [
    "/PDF/CANVASS_2026_01_BASSA.pdf",
    "/PDF/NO FOOD_2026_01.pdf",
    "/PDF/PET FOOD_01_2026.pdf",
    "/PDF/ledelizie_Supermercati_27_2025.pdf"
  ]
};

const merini: Project = {
  id: "merini-overline",
  title: "Merini Overline",
  description: "Catalogo completo Merini Overline: Linea Consumer, Linea Professional Altri Prodotti, Linea Professional Shampoo e Mockup Overline Academy.",
  thumbUrl: "/LoghiLavori/Logo_Merini.png",
  imageUrls: [],
  pdfUrls: [
    "/PDF/MERINI_LINEA_CONSUMER.pdf",
    "/PDF/MERINI_LINEA_PROFESSIONAL_ALTRI_PRODOTTI.pdf",
    "/PDF/MERINI_LINEA_PROFESSIONAL_SHAMPOO.pdf",
    "/PDF/MERINI_MOCKUP_OVERLINE_ACADEMY.pdf"
  ]
};

const carrefour: Project = {
  id: "carrefour",
  title: "Carrefour",
  description: "Materiale promozionale per il cliente Carrefour.",
  thumbUrl: "/LoghiLavori/Logo_Carrefour.png",
  imageUrls: [],
  pdfUrl: "/PDF/A4_CARREFOUR EXPRESS_2025_08.pdf"
};

const diBlasio: Project = {
  id: "di-blasio",
  title: "Di Blasio",
  description: "Materiale PDF per Di Blasio.",
  thumbUrl: "/images/loghilavori/Logo_DiBlasio.png",
  imageUrls: [],
  pdfUrl: "/PDF/DI_BLASIO_2026_01.pdf"
};

const drowssap: Project = {
  id: "drowssap",
  title: "Drowssap",
  description: "Materiale PDF per Drowssap.",
  thumbUrl: "/images/loghilavori/Logo_Drowssap.png",
  imageUrls: [],
  pdfUrl: "/PDF/DROWSSAP_Brochure60x20_REV03_bozza.pdf"
};

const frescohouse: Project = {
  id: "frescohouse",
  title: "FrescoHouse",
  description: "Materiale PDF per FrescoHouse.",
  thumbUrl: "/images/loghilavori/Logo_Frescohouse.png",
  imageUrls: [],
  pdfUrl: "/PDF/IPERFRESCO_2026_01.pdf"
};

const litiberi: Project = {
  id: "litiberi",
  title: "Litiberi",
  description: "Entrambi i lavori per Litiberi.",
  thumbUrl: "/images/loghilavori/Logo_Litiberi.png",
  imageUrls: [],
  pdfUrls: [
    "/PDF/LITIBERI_6x3 litiberi.pdf",
    "/PDF/LITIBERI_Manifesto 70x100.pdf"
  ]
};

const pac: Project = {
  id: "pac",
  title: "PAC",
  description: "Materiale PDF per PAC.",
  thumbUrl: "/images/loghilavori/Logo_Pac.png",
  imageUrls: [],
  pdfUrl: "/PDF/PAC CASH_2026_01_.pdf"
};

const resource: Project = {
  id: "resourceconsulting",
  title: "ResourceConsulting",
  description: "Materiale PDF per ResourceConsulting.",
  thumbUrl: "/images/loghilavori/Logo_Resource.png",
  imageUrls: [],
  pdfUrl: "/PDF/ResourceConsulting_Catalogo.pdf"
};

const madeInRome: Project = {
  id: "made-in-rome",
  title: "Made In Rome",
  description: "Catalogo PDF per il cliente Made In Rome.",
  thumbUrl: "/images/loghilavori/Logo_MadeInRome.png",
  imageUrls: [
    "/images/portfolio/madeinrome1.jpeg",
    "/images/portfolio/madeinrome2.jpeg",
    "/images/portfolio/madeinrome3.jpeg",
    "/images/portfolio/madeinrome4.jpeg",
    "/images/portfolio/madeinrome5.jpeg"
  ],
  pdfUrl: "/PDF/MadeInRome_Tours_Catalogue_Complete_DoublePage_Preview.pdf"
};

const villaBelvedere: Project = {
  id: "villa-belvedere",
  title: "Villa Belvedere",
  description: "Rappresentazione fotografica e grafica del progetto Villa Belvedere.",
  thumbUrl: "/images/villabelvedere01.png",
  imageUrls: [
    "/images/villabelvedere01.png",
    "/images/villabelvedere02.png",
    "/images/villabelvedere03.png",
    "/images/villabelvedere04.png",
    "/images/villabelvedere05.png",
    "/images/villabelvedere06.png"
  ]
};

const stelleOttimo: Project = {
  id: "3-stelle-ottimo",
  title: "3 Stelle Ottimo",
  description: "Materiale PDF per il cliente 3 Stelle Ottimo.",
  thumbUrl: "/LoghiLavori/Logo_3StelleOttimo.png",
  imageUrls: [],
  pdfUrl: "/PDF/3STELLE_27_Dicembre_2025-11_Gennaio_2026.pdf"
};

export const allProjects: Project[] = [
  am,
  bimarket,
  bitar,
  delizie,
  merini,
  carrefour,
  diBlasio,
  drowssap,
  frescohouse,
  litiberi,
  pac,
  resource,
  madeInRome,
  villaBelvedere,
  stelleOttimo
];
