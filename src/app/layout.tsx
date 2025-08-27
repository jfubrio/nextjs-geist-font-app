import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCULPTRA® - Rejuvenece tu piel desde el interior | Renové",
  description: "Bioestimulador de colágeno que mejora la calidad y firmeza de tu piel hasta por 2 años. Agenda tu valoración en Renové.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
