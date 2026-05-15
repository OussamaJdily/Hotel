export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      about: 'About',
      rooms: 'Suites',
      dining: 'Dining',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact',
      reserve: 'Book Now'
    },
    hero: {
      label: 'Ultra-Luxury Experience',
      title: 'MAISON ANFA IVORY',
      subtitle: 'Where Heritage Meets Neo-Futurism in Casablanca',
      cta: 'Begin Your Journey'
    },
    about: {
      label: 'Elite Legacy',
      title_line1: 'An Infinite',
      title_line2: 'Heritage',
      desc: 'Since 1924, Maison Anfa Ivory has stood as a beacon of architectural transcendence. We blend the rhythmic soul of Moroccan craftsmanship with the sharp precision of neo-futurist design.',
      heritage: {
        title: 'Centennial Soul',
        desc: 'Over 100 years of hosting the world\'s most distinguished pioneers.'
      },
      excellence: {
        title: 'Master Craft',
        desc: 'Every detail is hand-carved by master artisans, preserving the Ivory legacy.'
      },
      vision: {
        title: '2050 Protocol',
        desc: 'Integrating neural-smart technologies with traditional Moroccan hospitality.'
      }
    },
    quote: {
      text: 'True luxury is the ability to transcend time while remaining rooted in the soul of your heritage.',
      author: '— THE IVORY ARCHITECT'
    },
    rooms: {
      label: 'Sanctuaries',
      title_line1: 'Elite',
      title_line2: 'Retreats',
      imperial: {
        name: 'Imperial Suite',
        desc: 'Panoramic views with private infinity garden and smart-glass tech.'
      },
      royal: {
        name: 'Royal Palm Suite',
        desc: 'Art Deco elegance meets modern high-tech comfort and soul.'
      },
      nomad: {
        name: 'Nomad Chic Studio',
        desc: 'Minimalist luxury designed for the modern global explorer.'
      }
    },
    services: {
      label: 'Excellence',
      title: 'Curated Services',
      subtitle: 'Every moment is a masterclass in personalized hospitality.',
      spa: { title: 'Ivory Spa', desc: 'Cellular rejuvenation and traditional hammam protocols.' },
      dining: { title: 'Fine Dining', desc: 'A sensory voyage through Moroccan and Mediterranean fusion.' },
      concierge: { title: 'Neural Concierge', desc: '24/7 hyper-personalized assistance for every legacy need.' },
      golf: { title: 'Elite Golf', desc: 'Pristine greens designed by world-renowned masters.' },
      fitness: { title: 'Bio-Gym', desc: 'High-performance training with AI-driven health monitoring.' },
      valet: { title: 'Cyber Valet', desc: 'Seamless transportation and encrypted logistics.' }
    },
    dining: {
      label: 'Gastronomy',
      title: 'Culinary Excellence',
      subtitle: 'Savor the fusion of tradition and innovation',
      reservation: 'Make a Reservation'
    },
    gallery: {
      label: 'Visuals',
      title: 'The Gallery'
    },
    testimonials: {
      label: 'Reflections',
      title: 'Guest Reviews'
    },
    blog: {
      label: 'Stories',
      title: 'From Our World',
      cta: 'View Archives'
    },
    booking: {
      label: 'Reserve',
      title: 'The Future of Elegance',
      desc: 'Step into a world where time stands still. Your bespoke sanctuary at Maison Anfa Ivory awaits.',
      cta: 'Secure Your Suite'
    },
    footer: {
      explore: 'Explore',
      nexus: 'Nexus',
      intelligence: 'Intelligence',
      newsletter_placeholder: 'TRANSMISSION@EMAIL.COM',
      copyright: '© 2026 MAISON ANFA IVORY. ALL RIGHTS RESERVED.',
      connect: 'Connect'
    }
  },
  fr: {
    nav: {
      about: 'À Propos',
      rooms: 'Suites',
      dining: 'Gastronomie',
      services: 'Services',
      gallery: 'Galerie',
      contact: 'Contact',
      reserve: 'Réserver'
    },
    hero: {
      label: 'Expérience Ultra-Luxe',
      title: 'MAISON ANFA IVORY',
      subtitle: 'Où l\'Héritage rencontre le Néo-Futurisme à Casablanca',
      cta: 'Commencer le Voyage'
    },
    about: {
      label: 'Héritage d\'Élite',
      title_line1: 'Un Héritage',
      title_line2: 'Infini',
      desc: 'Depuis 1924, Maison Anfa Ivory est un phare de transcendance architecturale. Nous fusionnons l\'âme rythmique de l\'artisanat marocain avec la précision du design néo-futuriste.',
      heritage: {
        title: 'Âme Centenaire',
        desc: 'Plus de 100 ans d\'accueil des pionniers les plus distingués du monde.'
      },
      excellence: {
        title: 'Maître Artisan',
        desc: 'Chaque détail est sculpté à la main, préservant l\'héritage Ivory.'
      },
      vision: {
        title: 'Protocole 2050',
        desc: 'Intégration de technologies neurales-intelligentes avec l\'hospitalité marocaine.'
      }
    },
    quote: {
      text: 'Le vrai luxe est la capacité de transcender le temps tout en restant enraciné dans l\'âme de son héritage.',
      author: '— L\'ARCHITECTE IVORY'
    },
    rooms: {
      label: 'Sanctuaires',
      title_line1: 'Retraites',
      title_line2: 'd\'Élite',
      imperial: {
        name: 'Suite Impériale',
        desc: 'Vues panoramiques avec jardin infini privé et technologie smart-glass.'
      },
      royal: {
        name: 'Suite Royal Palm',
        desc: 'L\'élégance Art Déco alliée au confort high-tech moderne.'
      },
      nomad: {
        name: 'Studio Nomad Chic',
        desc: 'Luxe minimaliste conçu pour l\'explorateur moderne.'
      }
    },
    services: {
      label: 'Excellence',
      title: 'Services Curatés',
      subtitle: 'Chaque instant est un chef-d\'œuvre d\'hospitalité personnalisée.',
      spa: { title: 'Spa Ivory', desc: 'Rajeunissement cellulaire et protocoles de hammam traditionnels.' },
      dining: { title: 'Gastronomie', desc: 'Un voyage sensoriel à travers la fusion marocaine et méditerranéenne.' },
      concierge: { title: 'Concierge Neural', desc: 'Assistance hyper-personnalisée 24/7 pour chaque besoin.' },
      golf: { title: 'Golf d\'Élite', desc: 'Greens immaculés conçus par des maîtres de renommée mondiale.' },
      fitness: { title: 'Bio-Gym', desc: 'Entraînement haute performance avec suivi de santé IA.' },
      valet: { title: 'Cyber Valet', desc: 'Transport fluide et logistique cryptée.' }
    },
    dining: {
      label: 'Gastronomie',
      title: 'Excellence Culinaire',
      subtitle: 'Savourer la fusion de la tradition et de l\'innovation',
      reservation: 'Faire une Réservation'
    },
    gallery: {
      label: 'Visuels',
      title: 'La Galerie'
    },
    testimonials: {
      label: 'Réflexions',
      title: 'Avis des Clients'
    },
    blog: {
      label: 'Histoires',
      title: 'De Notre Monde',
      cta: 'Voir les Archives'
    },
    booking: {
      label: 'Réserver',
      title: 'Le Futur de l\'Élégance',
      desc: 'Entrez dans un monde où le temps s\'arrête. Votre sanctuaire sur mesure à Maison Anfa Ivory vous attend.',
      cta: 'Réserver Votre Suite'
    },
    footer: {
      explore: 'Explorer',
      nexus: 'Nexus',
      intelligence: 'Intelligence',
      newsletter_placeholder: 'TRANSMISSION@EMAIL.COM',
      copyright: '© 2026 MAISON ANFA IVORY. TOUS DROITS RÉSERVÉS.',
      connect: 'Connecter'
    }
  }
};
