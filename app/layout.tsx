import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Vaishnavi Gupta | Frontend Developer – React.js · Next.js · TypeScript· JavaScript",
  description:
    "Frontend Developer with 2+ years of experience building scalable, responsive, and high-performance web applications using React.js, Next.js, TypeScript. M.Tech at IIT Patna.",
  keywords:
    "Frontend Developer, React Developer, Next.js Developer, TypeScript Developer, JavaScript Developer ,Ahmedabad Frontend Developer, IIT Patna Student",
  openGraph: {
    title: "Vaishnavi Gupta | Frontend Developer",
    description:
      "Crafting scalable, high-performance, and visually stunning web experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishnavi Gupta | Frontend Developer",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vaishnavi Gupta",
  jobTitle: "Frontend Developer",
  email: "vaishurgupta2010@gmail.com",
  telephone: "+919601185406",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology Patna",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                  if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
