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
  pdfUrl: "/PDF/AM_20_2025.pdf"
};

const bimarket: Project = {
  id: "bimarket-2025",
  title: "Bimarket 2025",
  description: "Materiale PDF per Bimarket 2025.",
  thumbUrl: "/images/loghilavori/Logo_Bimarket.png",
  imageUrls: [],
  pdfUrl: "/PDF/Bimarket 2025_13.pdf"
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
  description: "Materiale promozionale integrato: CANVASS, NO FOOD, PET FOOD e MARKET accorpati per il brand Le delizie del sud.",
  thumbUrl: "/images/loghilavori/Logo_Delizie.png",
  imageUrls: [],
  pdfUrls: [
    "/PDF/DELIZIE_CANVASS_10_2025-compresso.pdf",
    "/PDF/DELIZIE_NO FOOD_10_2025.pdf",
    "/PDF/DELIZIE_PET FOOD_10_2025.pdf",
    "/PDF/DELIZIEMARKET_VOL_N20.pdf"
  ]
};

const diBlasio: Project = {
  id: "di-blasio",
  title: "Di Blasio",
  description: "Materiale PDF per Di Blasio.",
  thumbUrl: "/images/loghilavori/Logo_DiBlasio.png",
  imageUrls: [],
  pdfUrl: "/PDF/DI BLASIO_CANVASS_2025_10.pdf"
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
  pdfUrl: "/PDF/FRESCOHOUSE_IPERFRESCO_2025_20.pdf"
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
  pdfUrl: "/PDF/PAC_CASH_2025_13.pdf"
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
  imageUrls: [],
  pdfUrl: "/PDF/MadeInRome_Tours_Catalogue_Complete_DoublePage_Preview.pdf"
};

export const allProjects: Project[] = [
  am,
  bimarket,
  bitar,
  delizie,
  diBlasio,
  drowssap,
  frescohouse,
  litiberi,
  pac,
  resource,
  madeInRome
];
