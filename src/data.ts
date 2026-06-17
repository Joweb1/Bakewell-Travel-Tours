import { ServiceItem, Destination, Testimonial, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'flights',
    title: 'Flight Ticket Booking',
    description: 'Bespoke flight procurement with priority routings, luxury cabins, and seamless connections.',
    longDescription: 'At Bakewell, flight booking is treated as an art. We do not simply search for fares; we curate the optimal journey. From charter access and private suites to first-class cabins and complex multi-destination itineraries, we negotiate directly with leading airlines to offer unparalleled convenience, priority boarding arrangements, and complete flight monitoring.',
    iconName: 'PlaneTakeoff',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    features: [
      'International & Domestic First & Business class priority bookings',
      'Corporate & Group air charter management',
      'Committed 24/7 flight concierge and monitoring',
      'Exclusive preferred airline rates and seating allocation'
    ]
  },
  {
    id: 'tours',
    title: 'Tour Booking & Experiences',
    description: 'Handcrafted itineraries, private excursions, and premium stays tailored to your passions.',
    longDescription: 'We believe travel should be deeply personal and rewarding. Our private tour planners work to understand your tastes, crafting custom experiences. Whether you seek a VIP glacier helicopter tour in Banff, high-fashion dining in Toronto, or customized luxury retreats across the continent, every detail is engineered to exceed your expectations.',
    iconName: 'Compass',
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800',
    features: [
      'Tailored custom itineraries for families, couples, and individuals',
      'Private guided historical, nature, and urban excursions',
      'Exemplary accommodation partnerships under high-end portfolios',
      'Unrivaled access to exclusive events and culinary milestones'
    ]
  },
  {
    id: 'visa',
    title: 'Visa Processing & Procurement',
    description: 'Expert documentation support, fast-track processing, and stress-free visa solutions.',
    longDescription: 'Navigating entry documents can be a meticulous barrier. Our premium visa processing service provides complete support. A dedicated visa specialist oversees your application dossier, providing rigorous reviews, interview coaching, fast-tracked submissions, and absolute transparency from filing to embassy approval.',
    iconName: 'FileCheck',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    features: [
      'Comprehensive tourist and temporary resident visa procurement',
      'Fast-track student visa submission and educational advice',
      'Highly professional executive and business travel visa support',
      'One-on-one document review and mock interview preparation'
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'banff',
    name: 'Banff National Park',
    province: 'Alberta',
    description: 'A breathtaking sanctuary of striking turquoise glacial lakes, majestic snow-clad peaks, and ultra-luxury alpine resorts.',
    imageUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800',
    highlights: ['Lake Louise private canoe experiences', 'Helicopter flightseeing over Mt. Assiniboine', 'Therapeutic thermal mineral pool sessions']
  },
  {
    id: 'vancouver',
    name: 'Vancouver City & Coast',
    province: 'British Columbia',
    description: 'An elevated fusion of majestic ocean shorelines, dynamic multi-cultural urban scale, and temperate rainforest valleys.',
    imageUrl: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&q=80&w=800',
    highlights: ['Sunset floatplane excursions to Vancouver Island', 'Private culinary tasting in historical Gastown', 'Capilano rainforest canopy tours']
  },
  {
    id: 'toronto',
    name: 'Toronto Metropolis',
    province: 'Ontario',
    description: 'The pulsating heart of Canadian culture, high fashion, financial enterprises, and refined world-class dining.',
    imageUrl: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=800',
    highlights: ['VIP skyline helicopter tour', 'Curated styling sessions in the Yorkville District', 'Private box seating at signature stage theatres']
  },
  {
    id: 'niagara',
    name: 'Niagara Falls & Wine Country',
    province: 'Ontario',
    description: 'Marvel at the earth’s raw power, combined seamlessly with the serene estate vineyards of Niagara-on-the-Lake.',
    imageUrl: 'https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?auto=format&fit=crop&q=80&w=800',
    highlights: ['Exclusive behind-the-falls tunnels and platforms', 'Vintage estate wine tastings and fine dining', 'Breathtaking luxury helicopter flight above the falls']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'Managing Director, Horizon Media',
    location: 'Geneva, Switzerland',
    quote: 'Bakewell Travel redefined our corporate retreat. The flight bookings, complex visas, and premium Banff excursions were executed with extreme professionalism and promptness.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    serviceUsed: 'Flight & Tour Procurement'
  },
  {
    id: 'test-2',
    name: 'David Jenkins',
    role: 'Technology Consultant',
    location: 'Toronto, Canada',
    quote: 'My student visa process for Canada was full of complex forms due to prior records. The Bakewell team audited my documents meticulously, ensuring a flawless approval timeline.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    serviceUsed: 'Visa Processing'
  },
  {
    id: 'test-3',
    name: 'Alistair & Margaret Thorne',
    role: 'Retired Philanthropists',
    location: 'London, UK',
    quote: 'The personalized Niagara wine tour was sensory heaven. We felt safe, perfectly pampered, and handled by true local experts who genuinely respect premium travel standards.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    serviceUsed: 'Bespoke Tour Package'
  },
  {
    id: 'test-4',
    name: 'Dr. Sarah Lin',
    role: 'Professor of Global Health',
    location: 'Singapore',
    quote: 'Whenever I have urgent international conferences, Bakewell handles my tickets and visas seamlessly overnight. Their fast response and attention to detail are invaluable.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    serviceUsed: 'Business Ticket Procurement'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does the visa processing and procurement service typically take?',
    answer: 'Processing timelines vary carefully depending on the target destination country and category of visa (student, tourist, or business). Generally, our comprehensive documentation audit is finished within 3-5 business days. Once submitted to the respective embassy, processing spans from 10 days to a few weeks. We recommend starting your visa procurement 45 to 60 days before your intended travel date.'
  },
  {
    id: 'faq-2',
    question: 'Do you handle complex group flight reservations and business bookings?',
    answer: 'Yes, we specialize in high-end corporate accounts and large group travel coordinating. Our flight department can access exclusive blocking software and group fare inventory, assuring aligned seats, custom layovers, luggage transport, and lounge coordinates for premium comfort.'
  },
  {
    id: 'faq-3',
    question: 'Can Bakewell assist other premium agencies or design tailored, end-to-end travel itineraries?',
    answer: 'Absolutely. We do not operate as a automated flight engine. Every client is assigned a dedicated senior consultant to design highly customized itineraries from arrival to departure. This covers luxury stays, private guides, luxury transportation, and restaurant permissions.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide fully guided international tour packages across Canada and key global hubs?',
    answer: 'Yes, we curate exclusive and private tour packages. Our local guides and destination partners are carefully vetted to ensure that you experience destinations with premium safety, profound historical knowledge, and personalized care.'
  }
];

export const TRUST_BADGES = [
  { title: 'Reliable Service', desc: 'Secure processes backed by decades of luxury travel consulting.' },
  { title: 'Visa Assistance', desc: 'Step-by-step documentation audit and embassy submission.' },
  { title: 'Flight Reservations', desc: 'Flexible ticket blocks with live 24/7 destination support.' },
  { title: 'Personalized Support', desc: 'Dedicated destination specialists at your disposal.' },
  { title: 'Global Travel Guidance', desc: 'Access to high-net-worth partner networks worldwide.' }
];

export const WHY_CHOOSE_REASONS = [
  {
    title: 'Personalized Consultation',
    description: 'We spend time understanding your travel values, health, and styles to curate a perfect experience.'
  },
  {
    title: 'Professional Support',
    description: 'Real travel advisors are always at hand, monitoring flight paths, gate changes, and customs transitions.'
  },
  {
    title: 'Fast Response Team',
    description: 'Average consultation replies under 2 hours, ensuring rapid planning when opportunity arises.'
  },
  {
    title: 'Transparent Processes',
    description: 'Clear pricing breakdown, direct billing channels, and honest advice about visas and regulations.'
  },
  {
    title: 'Reliable Assistance',
    description: 'In the event of disruptions, our team handles manual rebooking immediately so you don’t have to wait.'
  },
  {
    title: 'Expert Global Network',
    description: 'Direct relationships with world leaders, high-end hospitality portfolios, and VIP reception teams.'
  }
];
