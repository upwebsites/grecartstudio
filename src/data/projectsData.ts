export interface Project {
  id: string;
  title: string;
  description: string;
  thumbUrl: string;
  imageUrls: string[];
}

export const projects: Project[] = [
  {
    id: "pac-cash-and-carry",
    title: "Pac Cash And Carry",
    description: "Progetto di comunicazione visiva e branding per Pac Cash And Carry.",
    thumbUrl: "/images/pac_cash_and_carry.png",
    imageUrls: [
      "/images/pac_cash_and_carry.png",
      "/images/portfolio/pac1.jpg",
      "/images/portfolio/pac2.jpg",
      "/images/portfolio/pac3.jpg"
    ]
  },
  {
    id: "io-e-mio-fratello-supermercati",
    title: "Io & Mio Fratello Supermercati",
    description: "Progetto di identità visiva e materiali promozionali per Io & Mio Fratello Supermercati.",
    thumbUrl: "/images/io_e_mio_fratello_supermercato.jpg",
    imageUrls: [
      "/images/io_e_mio_fratello_supermercato.jpg",
      "/images/portfolio/ioemiofratello1.jpg",
      "/images/portfolio/ioemiofratello2.jpg",
      "/images/portfolio/ioemiofratello3.jpg"
    ]
  },
  {
    id: "carrefour",
    title: "Carrefour",
    description: "Progetto grafico e comunicazione per Carrefour.",
    thumbUrl: "/images/carrefour.jpg",
    imageUrls: [
      "/images/carrefour.jpg",
      "/images/portfolio/carrefour1.jpg",
      "/images/portfolio/carrefour2.jpg"
    ]
  },
  {
    id: "logo-villa-belvedere",
    title: "Logo Villa Belvedere",
    description: "Progetto di design del logo e immagine coordinata per Villa Belvedere.",
    thumbUrl: "/images/villabelvedere01.png",
    imageUrls: [
      "/images/villabelvedere01.png",
      "/images/villabelvedere02.png",
      "/images/villabelvedere03.png",
      "/images/villabelvedere04.png",
      "/images/villabelvedere05.png",
      "/images/villabelvedere06.png"
    ]
  }
];