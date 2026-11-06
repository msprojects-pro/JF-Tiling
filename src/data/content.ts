import { ServiceItem, GalleryProject, BenefitItem } from '../types';
import heroImg from '../assets/images/hero_luxury_bathroom_1793953061960.jpg';
import renovationsImg from '../assets/images/service_renovations_1793953063111.jpg';
import wallFloorTilingImg from '../assets/images/service_wall_floor_tiling_1793953062785.jpg';
import showerWetroomImg from '../assets/images/service_shower_wetroom_1793953063955.jpg';
import herringboneDetailImg from '../assets/images/gallery_herringbone_detail_1793953063725.jpg';
import aboutProjectImg from '../assets/images/about_completed_project_1793953065160.jpg';

export const BUSINESS_INFO = {
  name: 'J.F Tiling & Bathrooms',
  shortName: 'J.F',
  tagline: 'Quality Tiling & Bathroom Services',
  location: 'Sheffield, United Kingdom',
  areaServed: 'Sheffield, Rotherham, Chesterfield & surrounding areas',
  phone: '+44 7760 844557',
  phoneHref: 'tel:+447760844557',
  email: 'Joshford92@mail.com',
  emailHref: 'mailto:Joshford92@mail.com',
  whatsappNumber: '447760844557',
  whatsappHref: 'https://wa.me/447760844557',
  hours: 'Monday – Saturday: 8:00am – 6:00pm',
};

export const IMAGES = {
  hero: heroImg,
  renovations: renovationsImg,
  wallFloorTiling: wallFloorTilingImg,
  showerWetroom: showerWetroomImg,
  herringboneDetail: herringboneDetailImg,
  aboutProject: aboutProjectImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    description: 'Beautifully finished bathroom spaces designed around your needs, taking care of every surface from full rip-out to final styling.',
    image: IMAGES.renovations,
    alt: 'Luxury completed bathroom renovation with floating double vanity and arch mirror in Sheffield',
    features: ['Complete space transformation', 'Bespoke layout planning', 'High-end sanitaryware fitting', 'Full waterproofing & sealing'],
  },
  {
    id: 'wall-floor-tiling',
    title: 'Wall & Floor Tiling',
    description: 'Professional wall and floor tiling with clean, precise finishes, laser-straight alignment, and durable waterproof grouting.',
    image: IMAGES.wallFloorTiling,
    alt: 'Master wall and floor tiling with precision mitred corners and large format porcelain tiles',
    features: ['Large-format porcelain & ceramics', 'Sub-floor leveling & uncoupling', 'Seamless edge mitring', 'Moisture-resistant grouting'],
  },
  {
    id: 'shower-wetroom',
    title: 'Shower & Wet Room Tiling',
    description: 'Modern shower spaces with carefully finished tiled surfaces, integrated shower niches, and dedicated falls to floor drains.',
    image: IMAGES.showerWetroom,
    alt: 'Walk-in wet room shower with recessed illuminated niche and fluted glass panel',
    features: ['Tanking & waterproof membranes', 'Custom recessed shelf niches', 'Linear drain gradient setting', 'Frameless screen installation'],
  },
  {
    id: 'bathroom-tiling',
    title: 'Bathroom Tiling',
    description: 'Transform your bathroom with stylish tiles and quality installation that elevates standard suites into serene personal retreats.',
    image: IMAGES.hero,
    alt: 'Refined contemporary bathroom tiling around freestanding bath and vanity unit',
    features: ['Feature accent walls', 'Splashbacks & bath surrounds', 'Natural stone & marble effects', 'Clean silicone bead finishing'],
  },
  {
    id: 'floor-tiling',
    title: 'Floor Tiling',
    description: 'Durable and attractive tiled flooring for your space, crafted to withstand daily family life while looking effortlessly elegant.',
    image: IMAGES.herringboneDetail,
    alt: 'Precision herringbone pattern floor and wall tile installation with crisp grout lines',
    features: ['Herringbone, brick-bond & grid layouts', 'Underfloor heating compatibility', 'Heavy-traffic porcelain options', 'Perfect flat-level guarantees'],
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Attention to Detail',
    description: 'From millimeter-accurate tile cuts to flawless silicone lines, we treat every single tile as a permanent centerpiece.',
    iconName: 'Ruler',
  },
  {
    title: 'Quality Finishes',
    description: 'Premium adhesives, certified waterproof tanking systems, and proven materials ensure results that look pristine for years.',
    iconName: 'Sparkles',
  },
  {
    title: 'Professional Approach',
    description: 'Punctual, tidy, and respectful of your home. Clear communication, transparent quotations, and work conducted cleanly.',
    iconName: 'Briefcase',
  },
  {
    title: 'Customer Satisfaction',
    description: 'We take pride in turning your design vision into reality, delivering a finished bathroom space you will love stepping into every day.',
    iconName: 'Smile',
  },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'project-1',
    title: 'Full Ensuite Transformation',
    category: 'Renovation',
    categoryLabel: 'Bathroom Renovation',
    description: 'Complete master ensuite refurbishment featuring warm porcelain stone tiles, custom floating double vanity, and frameless wet room shower.',
    image: IMAGES.hero,
    alt: 'Contemporary master ensuite bathroom with walk-in shower and freestanding bath',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Arch Mirror Vanity & Walk-In Suite',
    category: 'Renovation',
    categoryLabel: 'Bathroom Renovation',
    description: 'Bright contemporary family bathroom with backlit arched mirror, brushed gold brassware, and flush-floor walk-in shower.',
    image: IMAGES.renovations,
    alt: 'Modern bathroom suite with illuminated arch mirror and warm wood vanity',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Textured Stone Wall & Floor Installation',
    category: 'Tiling',
    categoryLabel: 'Wall & Floor Tiling',
    description: 'Floor-to-ceiling large format warm greige porcelain tiles with precision corner junctions and integrated thermostatic shower.',
    image: IMAGES.wallFloorTiling,
    alt: 'Precision wall and floor tiling with stone textured porcelain tiles',
    featured: false,
  },
  {
    id: 'project-4',
    title: 'Luxury Wet Room with Illuminated Niche',
    category: 'Shower',
    categoryLabel: 'Wet Room & Shower',
    description: 'Custom-built wet room enclosure with warm LED recessed shelf niche, brushed brass showerhead, and fluted glass screen.',
    image: IMAGES.showerWetroom,
    alt: 'Wet room shower with warm LED illuminated tile niche and brass fittings',
    featured: true,
  },
  {
    id: 'project-5',
    title: 'Immaculate Herringbone Tile Detailing',
    category: 'Flooring',
    categoryLabel: 'Feature Tiling',
    description: 'Detailed Italian marble herringbone wall installation showcasing seamless alignment around concealed brass valves.',
    image: IMAGES.herringboneDetail,
    alt: 'Close-up of precise marble herringbone pattern wall tiling with brass tap',
    featured: false,
  },
  {
    id: 'project-6',
    title: 'Grand Sheffield Master Bathroom',
    category: 'Renovation',
    categoryLabel: 'Complete Bathroom',
    description: 'Spacious traditional-meets-modern bathroom featuring marble tile envelope, timber vanity suite, and floor-level wet area.',
    image: IMAGES.aboutProject,
    alt: 'Full luxury Sheffield bathroom project with timber vanity and marble walls',
    featured: false,
  },
];
