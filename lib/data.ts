export interface Room {
  id: string;
  name: string;
  slug: string;
  price: number;
  capacity: string;
  size: string;
  bed: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  amenities: string[];
  featured?: boolean;
}

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe Room',
    slug: 'deluxe-room',
    price: 320,
    capacity: '2 Guests',
    size: '45 m²',
    bed: 'King Bed',
    description:
      'Refined comfort with panoramic city views and curated furnishings.',
    longDescription:
      'Our Deluxe Rooms blend contemporary elegance with warm tones, offering a serene retreat above the city. Floor-to-ceiling windows frame sweeping views, while Italian linens and a marble en-suite ensure restful indulgence.',
    image:
      'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    amenities: ['Free WiFi', 'Smart TV', 'Mini Bar', 'Air Conditioning', 'Room Service', 'City View'],
    featured: true,
  },
  {
    id: '2',
    name: 'Executive Room',
    slug: 'executive-room',
    price: 480,
    capacity: '2 Guests',
    size: '60 m²',
    bed: 'King Bed',
    description:
      'Elevated living with lounge access and a private workspace.',
    longDescription:
      'Designed for the discerning traveler, the Executive Room features a private lounge, dedicated workspace, and exclusive access to the Executive Club. Enjoy complimentary breakfast and evening canapés.',
    image:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    amenities: ['Free WiFi', 'Smart TV', 'Mini Bar', 'Lounge Access', 'Workspace', 'Espresso Machine', 'Bathrobe'],
    featured: true,
  },
  {
    id: '3',
    name: 'Family Suite',
    slug: 'family-suite',
    price: 650,
    capacity: '4 Guests',
    size: '90 m²',
    bed: '2 Bedrooms',
    description:
      'Spacious two-bedroom suite for families who travel in style.',
    longDescription:
      'The Family Suite offers two beautifully appointed bedrooms, a shared living area, and a dining nook. Thoughtful touches like a kids welcome pack and connecting bathrooms make family stays effortless.',
    image:
      'https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    amenities: ['Free WiFi', '2 Bedrooms', 'Living Area', 'Mini Bar', 'Smart TV', 'Room Service', 'Kids Welcome Pack'],
    featured: true,
  },
  {
    id: '4',
    name: 'Presidential Suite',
    slug: 'presidential-suite',
    price: 1500,
    capacity: '4 Guests',
    size: '180 m²',
    bed: 'Master Bedroom + Living',
    description:
      'The pinnacle of luxury with private terrace and butler service.',
    longDescription:
      'Occupying the top floor, the Presidential Suite is a sanctuary of sophistication. A wraparound terrace, grand piano, private butler, and dining for eight define this signature residence.',
    image:
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    amenities: ['Private Butler', 'Wraparound Terrace', 'Grand Piano', 'Dining for 8', 'Free WiFi', 'Jacuzzi', 'Mini Bar', 'Smart TV'],
    featured: true,
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Fine Dining Restaurant',
    description: 'Michelin-inspired cuisine crafted by award-winning chefs in an elegant setting.',
    icon: 'UtensilsCrossed',
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    title: 'Luxury Spa',
    description: 'Rejuvenate with signature treatments, thermal pools, and holistic therapies.',
    icon: 'Flower2',
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    title: 'Infinity Pool',
    description: 'A heated rooftop infinity pool with breathtaking skyline and ocean views.',
    icon: 'Waves',
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    title: 'Fitness Center',
    description: 'State-of-the-art equipment and personal trainers available around the clock.',
    icon: 'Dumbbell',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    title: 'Airport Pickup',
    description: 'Chauffeured luxury transfers in our fleet of premium vehicles.',
    icon: 'Car',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '6',
    title: 'High-Speed WiFi',
    description: 'Complimentary fiber internet throughout the hotel and guest rooms.',
    icon: 'Wifi',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '7',
    title: 'Conference Hall',
    description: 'Versatile event spaces with cutting-edge AV for up to 300 guests.',
    icon: 'Presentation',
    image: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '8',
    title: 'Rooftop Dining',
    description: 'Al fresco dining under the stars with panoramic city vistas.',
    icon: 'Moon',
    image: 'https://images.pexels.com/photos/261046/pexels-photo-261046.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '9',
    title: '24/7 Room Service',
    description: 'Gourmet in-room dining curated by our executive culinary team.',
    icon: 'ConciergeBell',
    image: 'https://images.pexels.com/photos/3033036/pexels-photo-3033036.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Isabella Laurent',
    role: 'Fashion Designer, Paris',
    rating: 5,
    text: 'An exquisite stay from start to finish. The Presidential Suite exceeded every expectation — the butler service was impeccable and the views were simply breathtaking.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '2',
    name: 'James Whitmore',
    role: 'CEO, Whitmore Group',
    rating: 5,
    text: 'The attention to detail is extraordinary. From the airport pickup to the rooftop dining, every moment felt thoughtfully curated. This is what true luxury means.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '3',
    name: 'Aiko Tanaka',
    role: 'Travel Writer, Tokyo',
    rating: 5,
    text: 'I have stayed in the finest hotels across the world. Royal Palace stands among the very best. The spa alone is worth the journey.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '4',
    name: 'Olivia Bennett',
    role: 'Art Curator, London',
    rating: 5,
    text: 'A masterpiece of hospitality. The interiors are stunning, the staff anticipates every need, and the dining is world-class. I will return without hesitation.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hotel exterior at dusk',
    span: 'row-span-2',
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Fine dining restaurant',
    span: '',
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Luxury spa treatment room',
    span: '',
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Elegant suite bedroom',
    span: 'row-span-2',
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Modern hotel room interior',
    span: '',
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/261046/pexels-photo-261046.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Rooftop dining terrace',
    span: '',
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Fitness center',
    span: '',
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hotel lobby lounge',
    span: 'row-span-2',
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hotel reception desk',
    span: '',
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Luxury bathroom',
    span: '',
  },
  {
    id: '11',
    src: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Conference hall',
    span: '',
  },
  {
    id: '12',
    src: 'https://images.pexels.com/photos/3033036/pexels-photo-3033036.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Room service dining',
    span: '',
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Alexander Sterling',
    role: 'General Manager',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'With over 25 years in luxury hospitality, Alexander leads Royal Palace with a passion for excellence.',
  },
  {
    id: '2',
    name: 'Sophia Marchetti',
    role: 'Executive Chef',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'A Michelin-trained chef, Sophia brings Italian heritage and global inspiration to every plate.',
  },
  {
    id: '3',
    name: 'Marcus Chen',
    role: 'Director of Spa & Wellness',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Marcus curates transformative wellness journeys blending Eastern and Western traditions.',
  },
  {
    id: '4',
    name: 'Amelia Rodriguez',
    role: 'Head of Guest Relations',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Amelia ensures every guest feels at home, anticipating needs before they arise.',
  },
];

export interface Award {
  id: string;
  title: string;
  year: string;
  organization: string;
}

export const awards: Award[] = [
  { id: '1', title: 'World\'s Best Luxury Hotel', year: '2024', organization: 'World Travel Awards' },
  { id: '2', title: 'Best Spa Hotel', year: '2023', organization: 'Condé Nast Traveller' },
  { id: '3', title: 'Excellence in Fine Dining', year: '2023', organization: 'Michelin Guide' },
  { id: '4', title: 'Best Hotel Architecture', year: '2022', organization: 'International Design Awards' },
  { id: '5', title: 'Sustainable Luxury Hotel', year: '2022', organization: 'Green Globe' },
  { id: '6', title: 'Best Customer Service', year: '2021', organization: 'Forbes Travel Guide' },
];

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const facilities: Facility[] = [
  { id: '1', title: 'Infinity Pool', description: 'Heated rooftop pool with skyline views', icon: 'Waves' },
  { id: '2', title: 'Luxury Spa', description: '12 treatment rooms and thermal suites', icon: 'Flower2' },
  { id: '3', title: 'Fine Dining', description: 'Three signature restaurants', icon: 'UtensilsCrossed' },
  { id: '4', title: 'Fitness Center', description: '24/7 gym with personal trainers', icon: 'Dumbbell' },
  { id: '5', title: 'Business Center', description: 'Meeting rooms and event halls', icon: 'Briefcase' },
  { id: '6', title: 'Concierge', description: '24-hour personalized concierge', icon: 'ConciergeBell' },
];

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  tag: string;
}

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Romantic Escape',
    description: 'Two nights in a Deluxe Room with champagne, spa credit, and candlelit dinner for two.',
    discount: '25% OFF',
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Couples',
  },
  {
    id: '2',
    title: 'Family Getaway',
    description: 'Three nights in a Family Suite with daily breakfast and complimentary kids activities.',
    discount: '30% OFF',
    image: 'https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Family',
  },
  {
    id: '3',
    title: 'Spa & Wellness Retreat',
    description: 'A rejuvenating stay with daily spa treatments, wellness meals, and yoga sessions.',
    discount: '20% OFF',
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Wellness',
  },
];

export const hotelInfo = {
  name: 'Royal Palace Hotel',
  phone: '+1 (212) 555-0199',
  whatsapp: '12125550199',
  email: 'reservations@royalpalacehotel.com',
  address: '1 Royal Palace Drive, Manhattan, New York, NY 10001, USA',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.123456!2d-73.985428!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU1LjciTiA3M8KwNTknMDcuNSJX!5e0!3m2!1sen!2sus!4v1234567890',
  mapLink: 'https://maps.google.com/?q=Manhattan+New+York',
  social: {
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkedin: '#',
  },
};
