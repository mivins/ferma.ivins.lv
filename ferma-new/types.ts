export type Language = 'lv' | 'en';

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    badge: string;
  };
  features: {
    title: string;
    list: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  nostalgia: {
    title: string;
    subtitle: string;
    cards: {
      text: string;
      author: string;
      emoji: string;
    }[];
  };
  peek: {
    title: string;
    description: string;
    lockText: string;
  };
  waitlist: {
    title: string;
    description: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    checkboxes: {
      beta: string;
      help: string;
      sponsor: string;
    };
    submit: string;
    success: string;
  };
  footer: {
    madeBy: string;
    rights: string;
  };
}

export interface FormData {
  name: string;
  email: string;
  isBeta: boolean;
  isHelper: boolean;
  isSponsor: boolean;
}