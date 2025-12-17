import type { Metadata } from 'next';
import VestureContent from '@/components/VestureContent';

// SEO Metadata for the history page
export const metadata: Metadata = {
  title: "Ferma Vēsture: Latvijas Leģendārās Spēles Stāsts (2010-2013) | FERMA",
  description: "Uzzini par Fermu - sociālo spēli, kas apvienoja 800 tūkstošus latviešu. Fermas vēsture no palaišanas 2010. gadā līdz slēgšanai 2013. gadā. Latvijas populārākā online spēle Draugiem.lv platformā.",
  keywords: ["Ferma vēsture", "Latvijas spēles", "Draugiem.lv Ferma", "sociālā spēle", "farming game Latvija", "Flash spēle", "2010 spēle", "online spēle Latvijā", "lauku spēle"],
  openGraph: {
    title: "Ferma Vēsture: Kā 800 Tūkstoši Latviešu Audzēja Virtuālus Burkānus",
    description: "Leģendārās sociālās spēles stāsts - no fenomenālās popularitātes 2010. gadā līdz slēgšanai 2013. gadā.",
    type: "article",
    locale: "lv_LV",
    url: "https://ferma.ivins.lv/vesture",
    siteName: "FERMA - Leģendārā Spēle Atgriežas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferma Vēsture: Latvijas #1 Spēle",
    description: "617,899 spēlētāji pirmajās 6 dienās, vairāk nekā 800,000 kopā. Fenomens, kas apvienoja visu Latviju.",
  },
  alternates: {
    canonical: "https://ferma.ivins.lv/vesture",
  },
};

export default function VesturePage() {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Ferma",
    "alternateName": ["Draugiem.lv Ferma", "Ferma Online"],
    "genre": ["Social game", "Farming simulation"],
    "gamePlatform": "Web Browser",
    "datePublished": "2010",
    "dateModified": "2013-12-30",
    "inLanguage": "lv",
    "description": "Latvian social farming game that attracted 617,899 players in the first 6 days and over 800,000 total players",
    "numberOfPlayers": "800000+",
    "applicationCategory": "SocialGame",
    "operatingSystem": "Web (Flash)",
    "publisher": {
      "@type": "Organization",
      "name": "Draugiem.lv"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/Discontinued"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "800000",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Sākums",
        "item": "https://ferma.ivins.lv"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Vēsture",
        "item": "https://ferma.ivins.lv/vesture"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kad tika izveidota Ferma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ferma tika palaista 2010. gadā Draugiem.lv un iepazisimies.lv platformās kā sociālā lauku saimniecības spēle."
        }
      },
      {
        "@type": "Question",
        "name": "Cik cilvēki spēlēja Fermu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pirmajās sešās dienās Fermu sāka spēlēt 617,899 unikāli lietotāji. Kopumā spēli ir spēlējuši vairāk nekā 800,000 cilvēku. Vakaros spēli vienlaicīgi spēlēja līdz pat 100,000 cilvēku."
        }
      },
      {
        "@type": "Question",
        "name": "Kāpēc Fermu slēdza?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ferma tika slēgta 2013. gada 30. decembrī galvenokārt Flash tehnoloģijas novecošanās un spēlētāju skaita samazināšanās dēļ."
        }
      },
      {
        "@type": "Question",
        "name": "Vai Ferma atgriezīsies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jā! Strādājam pie Fermas atgriešanās modernā tehniskā izpildījumā, saglabājot to pašu nostalģisko garu un dizainu."
        }
      },
      {
        "@type": "Question",
        "name": "Kurā platformā darbojās Ferma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ferma darbojās Draugiem.lv un iepazisimies.lv sociālajos tīklos. Tā bija Flash spēle, kas strādāja tiešsaistē bez lejupielādes."
        }
      },
      {
        "@type": "Question",
        "name": "Vai Ferma bija bezmaksas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jā, Ferma bija bezmaksas online spēle ar iespējamiem premium pirkumiem (super nauda)."
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Main Content */}
      <VestureContent />
    </>
  );
}
