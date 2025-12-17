import { Content, Language } from './types';

export const FERMA_HERO_IMAGE = "https://ferma.ivins.lv/fema%20logo%20with%20background.png";

export const CONTENT: Record<Language, Content> = {
  lv: {
    hero: {
      badge: "Leģenda atgriežas",
      title: "Tā pati vecā Ferma.\nTikai daudz labāka.",
      subtitle: "Tās pašas 2010. gada sajūtas un iemīļotais dizains, bet pilnīgi jaunā izpildījumā. Mēs saglabājam visu, kas Tev patika, padarot spēli ātrāku, ērtāku un pieejamu no jebkuras ierīces.",
      cta: "Piesakies jaunumiem",
    },
    features: {
      title: "Kā mēs to gribam izdarīt?",
      list: [
        {
          title: "Pilnīgi Bez Maksas",
          description: "Mūsu mērķis ir spēle, nevis peļņa. Projektu uzturēs sponsori un reklāmas, nevis Tavi maksājumi. Nekāda 'Pay-to-Win'.",
          icon: "heart"
        },
        {
          title: "Mobilajiem Pielāgota",
          description: "Spēlē autobusā, gultā vai pārtraukumā. Ferma tagad izskatīsies lieliski arī Tavā telefonā.",
          icon: "smartphone"
        },
        {
          title: "Īsa un Patīkama",
          description: "Nav jāsēž stundām. Ienāc, apkop lopiņus, parunājies ar kaimiņiem un turpini dienu. Relaksācija, nevis darbs.",
          icon: "clock"
        },
        {
          title: "Draudzība Pāri Visam",
          description: "Atjaunosim to kopības sajūtu. Palīdzi kaimiņiem, mainies ar ražu un veidojiet skaistāko lauku sētu.",
          icon: "users"
        }
      ]
    },
    nostalgia: {
      title: "Kurš te ir labākais fermeris?!",
      subtitle: "Lietas, ko mēs visi darījām (un darīsim atkal)",
      cards: [
        { text: "Modinātāju uzliki, lai novāktu ražu? 3:00 naktī?", author: "Tu, 2011. gadā", emoji: "⏰" },
        { text: "Burkānus jau nozagi?!", author: "Dusmīgais Kaimiņš", emoji: "🥕" },
        { text: "Ieiesi manā kontā, novāksi ražu? Es netieku pie kompja!", author: "Labākais Draugs", emoji: "🔑" }
      ]
    },
    peek: {
      title: "Neliels ieskats nākotnē",
      description: "Mēs cītīgi strādājam pie jaunā dizaina. Tas būs svaigs, krāsains un 'kraukšķīgs'.",
      lockText: "Pieejams drīzumā"
    },
    waitlist: {
      title: "Esi pirmais dārzā!",
      description: "Piesakies jaunumiem, lai nepalaistu garām starta šāvienu. Mēs meklējam arī palīgus!",
      namePlaceholder: "Tavs vārds",
      emailPlaceholder: "Tavs e-pasts",
      checkboxes: {
        beta: "Esmu gatavs beta testēšanai (gribu spēlēt pirmais!)",
        help: "Esmu gatavs palīdzēt projektam (ar prasmēm vai padomu)",
        sponsor: "Vēlos kļūt par sponsoru vai reklamēties",
      },
      submit: "Pieteikties rindā",
      success: "Paldies! Tiekamies vagās!"
    },
    footer: {
      madeBy: "Projektu veido",
      rights: "Visas tiesības aizsargātas."
    }
  },
  en: {
    hero: {
      badge: "The Legend Returns",
      title: "The same old Ferma.\nJust way better.",
      subtitle: "The same 2010 vibes and beloved design, but with a brand new engine. We are keeping everything you loved while making the game faster, smoother, and accessible on any device.",
      cta: "Join the Waitlist",
    },
    features: {
      title: "How we want to do it?",
      list: [
        {
          title: "Completely Free",
          description: "Our goal is fun, not profit. Supported by sponsors and ads, not your wallet. No 'Pay-to-Win'.",
          icon: "heart"
        },
        {
          title: "Mobile First",
          description: "Play on the bus, in bed, or on a break. Ferma is now optimized for your smartphone.",
          icon: "smartphone"
        },
        {
          title: "Short & Sweet",
          description: "No need to grind for hours. Login, feed animals, chat with neighbors, and carry on. Relaxation, not a second job.",
          icon: "clock"
        },
        {
          title: "Social Connection",
          description: "Reviving real community feelings. Help neighbors, trade crops, and build the most beautiful farmstead.",
          icon: "users"
        }
      ]
    },
    nostalgia: {
      title: "Who is the best farmer here?!",
      subtitle: "Things we all did (and will do again)",
      cards: [
        { text: "Did you set an alarm to harvest? At 3:00 AM?", author: "You, in 2011", emoji: "⏰" },
        { text: "Did you steal the carrots already?!", author: "Angry Neighbor", emoji: "🥕" },
        { text: "Can you log into my account and harvest? I can't get to a PC!", author: "Best Friend", emoji: "🔑" }
      ]
    },
    peek: {
      title: "Sneak Peek",
      description: "We are hard at work on the new visual style. Fresh, colorful, and crispy.",
      lockText: "Coming Soon"
    },
    waitlist: {
      title: "Get in the Garden First!",
      description: "Sign up to get notified when we launch. We are also looking for contributors!",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      checkboxes: {
        beta: "I'm in for Beta testing (I want to play first!)",
        help: "I'm ready to help with the project",
        sponsor: "I'd like to show up as a sponsor or advertise",
      },
      submit: "Join Waitlist",
      success: "Thanks! See you in the fields!"
    },
    footer: {
      madeBy: "Created by",
      rights: "All rights reserved."
    }
  }
};