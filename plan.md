```markdown
# Detailed Implementation Plan for Landing Page SCULPTRA®

This plan describes all changes and additions needed to build the SCULPTRA landing page layout in a Next.js/React project using Tailwind CSS. The design follows the provided sections and style guidelines while ensuring error handling and modular, responsive design.

---

## 1. Update Global Styles

### File: src/app/globals.css
- **Action:**  
  - Import Google Fonts for Playfair Display (for titles) and Inter (for body text).  
  - Set the base background color to Beige Claro (`#F6F5F2`) and include utility classes (if necessary) for the primary colors.
- **Code Example:**
  ```css
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap");

  body {
    font-family: 'Inter', sans-serif;
    background-color: #F6F5F2;
    color: #2C2C2C;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
  }
  ```
- **Notes:**  
  Ensure responsiveness and verify that the fonts load correctly on all devices.

---

## 2. Create Landing Page Component

### File: src/app/sculptra/page.tsx
- **Action:**  
  - Create a new page component at the route `/sculptra`. This file will contain all six sections: Hero, Beneficios, ¿Eres candidata?, Proceso Renové, Testimonios, and Final CTA.
  - Import and (if needed) reuse existing UI components from `src/components/ui/` (for buttons, cards, etc.) or create inline sections with Tailwind CSS classes.
- **Steps by Section:**

  ### a. Hero Section (Portada Inicial)
  - **Content:**  
    - Use the real product photo of Sculptra from the public folder (e.g. `/sculptra-product.jpg`).  
    - Display an H1 with “Rejuvenece tu piel desde el interior con SCULPTRA®” and a subtitle.
    - Include a CTA button with text “Agenda tu valoración” that links to WhatsApp (`https://wa.me/528447804399`).
  - **Error Handling:**  
    - On the `<img>` tag, add an `onError` handler to set a fallback URL (e.g., a placeholder with descriptive text).

  ### b. Beneficios Section
  - **Content:**  
    - Heading: “¿Por qué elegir SCULPTRA® en Renové?”
    - Create three benefit cards in a responsive grid:
      1. "Estimula tu colágeno natural – Resultados progresivos y duraderos."
      2. "Mejora firmeza y flacidez – Recupera la estructura facial con naturalidad."
      3. "Resultados comprobados – Procedimiento médico seguro con seguimiento especializado."
  - **UI/UX:**  
    - Use rounded corners, soft shadows, and ample white space following Pomotasky’s style.

  ### c. ¿Eres Candidata? Section
  - **Content:**  
    - Heading: “¿Cómo saber si SCULPTRA® es para ti?”
    - Display a bullet list with the four candidate criteria.
    - Add an accompanying image using a placeholder:
      - **src:**  
        `https://placehold.co/800x600?text=Mujer+de+40+años+piel+luminosa+expresión+natural+y+segura+con+fondo+suave+beige+turquesa+estilo+fotografía+estética+clínica+luz+cálida+profesional`
      - **alt:** “Fotografía de una mujer de 40 años con piel luminosa, expresión natural y segura, en un ambiente clínico de fondo suave beige turquesa.”
    - **Error Handling:** Add an `onError` fallback for the image.

  ### d. Proceso Renové Section
  - **Content:**  
    - Heading: “El protocolo Renové para SCULPTRA®”
    - Present four cards in a grid (2×2) with steps:
      1. Valoración médica personalizada  
      2. Aplicación segura en consultorio  
      3. Masaje post-tratamiento guiado  
      4. Seguimiento y resultados progresivos  
    - For each card, create a styled circular element (using Tailwind’s rounded-full and background color `#2CC6C6`) with a step number to mimic an icon.
    - Include an illustrative image with a placeholder:
      - **src:**  
        `https://placehold.co/800x600?text=Doctora+en+uniforme+blanco+aplicando+tratamiento+facial+en+consultorio+elegante+branding+minimalista+turquesa+Renové+estilo+fotografía+clínica+realista`
      - **alt:** “Doctora en uniforme blanco aplicando tratamiento facial en consultorio elegante con branding minimalista turquesa Renové.”
    - **Error Handling:** Ensure image fallback handling is added.

  ### e. Testimonios Section
  - **Content:**  
    - Display a testimonial quote:  
      “Después de dos sesiones con Sculptra, siento mi piel más firme y natural. ¡Me veo rejuvenecida sin perder mi expresión!” – Mariana, 42 años.
    - Add an image using a placeholder:
      - **src:**  
        `https://placehold.co/800x600?text=Mujer+mexicana+de+40+años+sonriendo+con+confianza+piel+luminosa+fondo+minimalista+beige+suave+estilo+testimonial+estético`
      - **alt:** “Mujer mexicana de 40 años sonriendo con confianza, piel luminosa, en un fondo minimalista beige suave.”
    - **Layout:** Use a card or split layout for text and image.

  ### f. CTA Final Section
  - **Content:**  
    - Heading: “Da el primer paso hacia una piel firme y luminosa”
    - Prominently display a central CTA button with text “Quiero mi valoración con SCULPTRA®” linking to WhatsApp (`https://wa.me/528447804399`).
    - Include an image using a placeholder:
      - **src:**  
        `https://placehold.co/800x600?text=Vial+y+caja+de+Sculptra+sobre+superficie+elegante+con+luz+suave+branding+Renové+en+fondo+difuminado+estilo+premium`
      - **alt:** “Vial y caja de Sculptra sobre una superficie elegante con luz suave y branding Renové en fondo difuminado.”
    - **UI/UX:** Ensure the section is visually engaging with ample spacing.

- **Code Structure Example (Simplified):**
  ```tsx
  // src/app/sculptra/page.tsx
  import React from "react";

  const whatsappLink = "https://wa.me/528447804399";

  const SculptraLandingPage = () => {
    return (
      <main className="container mx-auto p-4">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center py-12">
          <img
            src="/sculptra-product.jpg"
            alt="Producto Sculptra con caja y vial en primer plano sobre fondo neutro con logotipo Renové difuminado"
            onError={(e) => (e.currentTarget.src = "https://placehold.co/1920x1080?text=Producto+Sculptra+imagen+no+disponible")}
            className="w-full h-auto object-cover"
          />
          <h1 className="mt-6 text-4xl font-bold text-[#2C2C2C]">
            Rejuvenece tu piel desde el interior con SCULPTRA®
          </h1>
          <p className="mt-2 text-lg text-[#2C2C2C]">
            Bioestimulador de colágeno que mejora la calidad y firmeza de tu piel hasta por 2 años.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 bg-[#2CC6C6] text-white rounded shadow hover:bg-opacity-90 transition"
          >
            Agenda tu valoración
          </a>
        </section>

        {/* BENEFICIOS SECTION */}
        <section className="py-12">
          <h2 className="text-3xl text-center font-bold mb-8">¿Por qué elegir SCULPTRA® en Renové?</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {[
              "Estimula tu colágeno natural – Resultados progresivos y duraderos.",
              "Mejora firmeza y flacidez – Recupera la estructura facial con naturalidad.",
              "Resultados comprobados – Procedimiento médico seguro con seguimiento especializado.",
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow">
                <p className="text-center">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ¿ERES CANDIDATA? SECTION */}
        <section className="py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">¿Cómo saber si SCULPTRA® es para ti?</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Notas flacidez ligera o moderada en el rostro.</li>
              <li>Buscas mejorar la calidad de tu piel y prevenir envejecimiento.</li>
              <li>Deseas un resultado natural y progresivo, no un cambio brusco.</li>
              <li>Tienes entre 30–60 años y buena salud general.</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://placehold.co/800x600?text=Mujer+de+40+años+piel+luminosa+expresión+natural+y+segura+con+fondo+suave+beige+turquesa+estilo+fotografía+estética+clínica+luz+cálida+profesional"
              alt="Mujer de 40 años con piel luminosa, mirada natural y ambiente clínico con fondo beige turquesa"
              onError={(e) => (e.currentTarget.src = "https://placehold.co/800x600?text=Imagen+no+disponible")}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </section>

        {/* PROCESO RENOVÉ SECTION */}
        <section className="py-12">
          <h2 className="text-3xl text-center font-bold mb-8">El protocolo Renové para SCULPTRA®</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {/* Steps Cards */}
            {[
              "Valoración médica personalizada",
              "Aplicación segura en consultorio",
              "Masaje post-tratamiento guiado",
              "Seguimiento y resultados progresivos"
            ].map((step, i) => (
              <div key={i} className="flex items-center p-6 bg-white rounded-lg shadow space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2CC6C6] flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <img
              src="https://placehold.co/800x600?text=Doctora+en+uniforme+blanco+aplicando+tratamiento+facial+en+consultorio+elegante+branding+minimalista+turquesa+Renové+estilo+fotografía+clínica+realista"
              alt="Doctora en uniforme blanco aplicando tratamiento facial en consultorio elegante con branding minimalista turquesa Renové"
              onError={(e) => (e.currentTarget.src = "https://placehold.co/800x600?text=Imagen+no+disponible")}
              className="w-full max-w-md h-auto object-cover rounded"
            />
          </div>
        </section>

        {/* TESTIMONIOS SECTION */}
        <section className="py-12 bg-white rounded-lg shadow p-6 mx-4 md:mx-auto max-w-3xl">
          <blockquote className="text-xl italic text-center mb-4">
            “Después de dos sesiones con Sculptra, siento mi piel más firme y natural. ¡Me veo rejuvenecida sin perder mi expresión!”
          </blockquote>
          <p className="text-center font-bold">– Mariana, 42 años.</p>
          <div className="mt-6 flex justify-center">
            <img
              src="https://placehold.co/800x600?text=Mujer+mexicana+de+40+años+sonriendo+con+confianza+piel+luminosa+fondo+minimalista+beige+suave+estilo+testimonial+estético"
              alt="Mujer mexicana de 40 años sonriendo con confianza en fondo minimalista beige suave"
              onError={(e) => (e.currentTarget.src = "https://placehold.co/800x600?text=Imagen+no+disponible")}
              className="w-full max-w-md h-auto object-cover rounded"
            />
          </div>
        </section>

        {/* CTA FINAL SECTION */}
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Da el primer paso hacia una piel firme y luminosa
          </h2>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#2CC6C6] text-white rounded shadow hover:bg-opacity-90 transition"
          >
            Quiero mi valoración con SCULPTRA®
          </a>
          <div className="mt-8 flex justify-center">
            <img
