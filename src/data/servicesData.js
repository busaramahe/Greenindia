import { Bug, ShieldAlert, Target, Rat, Ghost, Wind, Flame, Skull, Zap } from 'lucide-react';
import deadCockroaches from '../assets/DeadCockroaches4K.png';
import termites4K from '../assets/Termites4K.png';
import bedbugs4K from '../assets/Bedbugs4K.png';
import birdingControl4K from '../assets/BirdingControl4K.png';
import mosquitoControl4K from '../assets/MosquitoControl4K.png';
import rodentControl4K from '../assets/RodentControl4K.png';
import antControl4K from '../assets/AntControl4K.png';
import spiderControl4K from '../assets/SpiderControl4K.png';
import flyControl4K from '../assets/FlyControl4K.png';
import lizardControl4K from '../assets/LizardControl4K.png';
import goldFumigation4K from '../assets/GoldFumigation4K.png';
import chemicalTreatment4K from '../assets/ChemicalTreatment4K.png';
import coldFogging4K from '../assets/ColdFogging4K.png';
import thermalFogging4K from '../assets/ThermalFogging4K.png';

export const servicesData = [
  {
    id: 'cockroach-control',
    name: 'Cockroach Control',
    icon: Bug,
    image: deadCockroaches.src,
    category: 'Residential',
    description: 'Eliminate cockroaches with our advanced gel baiting and spray treatments. 100% eradication guaranteed.',
    problems: [
      'Contamination of kitchen surfaces and food',
      'Spread of diseases like Salmonella',
      'Unpleasant odors and allergens',
      'Rapid breeding in dark crevices'
    ],
    solutions: [
      'Advanced German gel baiting technology',
      'Residual spray for long-term protection',
      'Deep cracks and crevices treatment',
      'Prevention and sanitation consulting'
    ]
  },
  {
    id: 'termite-control',
    name: 'Termite Control',
    icon: ShieldAlert,
    image: termites4K.src,
    category: 'Residential',
    description: 'Protect your wood and structural integrity with specialized anti-termite piping and barriers.',
    problems: [
      'Invisible destruction of wooden structures',
      'Hollow-sounding furniture and cabinets',
      'Weakened door frames and structural pillars',
      'Costly repairs if not detected early'
    ],
    solutions: [
      'Pre-construction soil treatment',
      'Drill-Fill-Seal post-construction method',
      'Termite baiting and monitoring stations',
      '5-year structural performance warranty'
    ]
  },
  {
    id: 'bedbug-control',
    name: 'Bedbug Control',
    icon: Target,
    image: bedbugs4K.src,
    category: 'Residential',
    description: 'Specialized chemical and steam treatments to eliminate bedbugs from mattresses and upholstery.',
    problems: [
      'Painful red bites and skin rashes',
      'Sleepless nights and psychological stress',
      'Rapid spread through luggage and furniture',
      'Hiding in seams where sprays don\'t reach'
    ],
    solutions: [
      'Intensive chemical spray treatment',
      'Steam treatment for mattresses',
      'Follow-up visit within 15 days',
      'Break the breeding cycle completely'
    ]
  },
  {
    id: 'bird-control',
    name: 'Birding Control',
    icon: Wind,
    image: birdingControl4K.src,
    category: 'Commercial',
    description: 'Ethical bird netting and spike installation to keep your premises clean and hygienic.',
    problems: [
      'Acidic droppings damaging building facade',
      'Risk of respiratory diseases from bird nests',
      'Blocked AC units and drainage pipes',
      'Unhygienic entrances and balconies'
    ],
    solutions: [
      'HDPE Bird netting (invisible and strong)',
      'Stainless steel bird spikes',
      'Eco-friendly bird repellant gels',
      'Annual maintenance and cleaning'
    ]
  },
  {
    id: 'mosquito-control',
    name: 'Mosquito Control',
    icon: Wind,
    image: mosquitoControl4K.src,
    category: 'Residential',
    description: 'Advanced thermal fogging and larvicidal treatments to control mosquito populations.',
    problems: [
      'High risk of Malaria, Dengue and Zika',
      'Breeding in stagnant water and gardens',
      'Constant buzzing and skin irritation',
      'Unusable outdoor spaces in the evenings'
    ],
    solutions: [
      'Larvicidal treatment of breeding sites',
      'Cold/Thermal fogging for open areas',
      'Indoor residual wall spray',
      'Mosquito-free zone management'
    ]
  },
  {
    id: 'rodent-control',
    name: 'Rodent Control',
    icon: Rat,
    image: rodentControl4K.src,
    category: 'Commercial',
    description: 'Strategic baiting and trapping systems to keep rats and mice out of your business.',
    problems: [
      'Gnawing of electrical cables (fire hazard)',
      'Contamination of inventory and food',
      'Damage to packaging and structures',
      'Scaring customers and harming reputation'
    ],
    solutions: [
      'Tamper-resistant bait stations',
      'Glue board and trap placement',
      'Proofing of entry and exit points',
      'Continuous monitoring reports'
    ]
  },
  {
    id: 'ant-control',
    name: 'Ant Control',
    icon: Bug,
    image: antControl4K.src,
    category: 'Residential',
    description: 'Targeted treatments for red and black ant colonies in kitchens and gardens.',
    problems: [
      'Invading sweet food and pantries',
      'Painful stings (for red ants)',
      'Nesting inside electrical appliances',
      'Unsightly trails across walls'
    ],
    solutions: [
      'Ant-specific gel baiting technology',
      'Perimeter liquid barrier treatment',
      'Nest identification and destruction',
      'Safe for pets and families'
    ]
  },
  {
    id: 'spider-control',
    name: 'Spider Control',
    icon: Skull,
    image: spiderControl4K.src,
    category: 'Residential',
    description: 'Removal of unsightly cobwebs and residual spray to prevent spider re-infestation.',
    problems: [
      'Dirty cobwebs in corners and high ceilings',
      'Phobia and fear of spider bites',
      'Indication of other underlying insect issues',
      'Dust accumulation on old webs'
    ],
    solutions: [
      'Mechanical web removal',
      'Residual spray in dark corners',
      'Treatment of attic and storage areas',
      'Elimination of spider prey (other pests)'
    ]
  },
  {
    id: 'fly-control',
    name: 'Fly Control',
    icon: Bug,
    image: flyControl4K.src,
    category: 'Commercial',
    description: 'Professional management of houseflies and fruit flies in commercial kitchens and food areas.',
    problems: [
      'Major carriers of food-borne pathogens',
      'Unprofessional image for F&B businesses',
      'Rapid breeding in waste/organic matter',
      'Contamination of exposed food items'
    ],
    solutions: [
      'Insect Light Traps (ILTs) installation',
      'Space spray treatments (ULV)',
      'Fly bait applications',
      'Sanitation and waste management advice'
    ]
  },
  {
    id: 'lizard-control',
    name: 'Lizard Control',
    icon: Zap,
    image: lizardControl4K.src,
    category: 'Residential',
    description: 'Safe and non-toxic herbal repellent spray to keep lizards away from walls and ceilings.',
    problems: [
      'Common phobia causing extreme distress',
      'Droppings on furniture and clothing',
      'Risk of falling into food or water',
      'Unhygienic environment'
    ],
    solutions: [
      'Herbal-based lizard repellent',
      'Reduction of insect prey population',
      'Sealing of entry gaps',
      'Contact spray for visible lizards'
    ]
  },
  {
    id: 'gold-fumigation',
    name: 'Gold Fumigation',
    icon: Ghost,
    image: goldFumigation4K.src,
    category: 'Industrial',
    description: 'Highly specialized gaseous fumigation for warehouses, food factories and gold processing.',
    problems: [
      'Hidden pests deep inside commodities',
      'Infestation in export-grade products',
      'Stringent industrial hygiene audits',
      'Micro-organism contamination'
    ],
    solutions: [
      'Phosphine gas fumigation (AL-P)',
      'Tarping and air-tight sealing',
      'Gas monitoring and safety audits',
      'Fumigation certificates provided'
    ]
  },
  {
    id: 'chemical-treatment',
    name: 'Chemical Treatment',
    icon: ShieldAlert,
    image: chemicalTreatment4K.src,
    category: 'Industrial',
    description: 'Heavy-duty industrial barrier sprays for large factories and manufacturing plants.',
    problems: [
      'Massive industrial area infestations',
      'Complex machinery becoming pest shelters',
      'Safety and hygiene compliance risk',
      'Pests damaging raw materials'
    ],
    solutions: [
      'Durable chemical spray barriers',
      'Perimeter building protection',
      'Corrosion-safe application methods',
      'Frequent audit reports'
    ]
  },
  {
    id: 'cold-fogging',
    name: 'Cold Fogging',
    icon: Wind,
    image: coldFogging4K.src,
    category: 'Industrial',
    description: 'Disinfection and pest elimination using ULV (Ultra Low Volume) cold foggers.',
    problems: [
      'Pests in high ceilings and large volumes',
      'Airborne pathogens and microbes',
      'Industrial scale space treatment needs',
      'Hard-to-reach machine parts'
    ],
    solutions: [
      'Advanced ULV cold fogging',
      'Disinfectant + Pesticide combination',
      'Uniform coverage of large spaces',
      'Minimal down-time for operations'
    ]
  },
  {
    id: 'thermal-fogging',
    name: 'Thermal Fogging',
    icon: Flame,
    image: thermalFogging4K.src,
    category: 'Industrial',
    description: 'Heavy smoke-based fogging for dense vegetation, housing estates and outdoor industrial areas.',
    problems: [
      'Outdoor mosquito and fly breeding',
      'Pests hiding in thick greenery/gardens',
      'Need for massive area coverage quickly',
      'Public health protection in large campuses'
    ],
    solutions: [
      'Diesel engine thermal foggers',
      'Dense smoke for maximum penetration',
      'Immediate knockdown for flying insects',
      'Scheduled community-wide treatments'
    ]
  }
];
