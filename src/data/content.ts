import { ServiceOffer, ConfidenceStep, Testimonial } from '../types';

export const BUSINESS_INFO = {
  name: '12 Drive',
  phone: '+44 7440 260063',
  phoneDisplay: '07440 260063',
  address: '9 Havers Rd, Manchester M18 8UN, UK',
  mapQuery: '9+Havers+Rd,+Manchester+M18+8UN,+UK',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.3218541258!2d-2.1812836!3d53.4623121!2m2!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb184e9ebf001%3A0xf137dfbeee5c3f26!2s9%20Havers%20Rd%2C%20Manchester%20M18%208UN%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk',
  googleMapsUrl: 'https://maps.google.com/?q=9+Havers+Rd,+Manchester+M18+8UN,+UK',
  whatsappNumber: '447440260063',
  postcode: 'M18 8UN',
  area: 'Manchester M18 (Gorton, Abbey Hey, Openshaw, Levenshulme)',
};

export const HIGHLIGHT_BADGES = [
  'Nervous Learners Welcome',
  'Automatic Only',
  'Local to M18',
];

export const PROOF_POINTS = [
  'Specialists in nervous learners',
  'Automatic transmission only',
  'Based in Manchester M18',
];

export const SERVICES: ServiceOffer[] = [
  {
    id: 'automatic-lessons',
    name: 'Automatic Lessons',
    shortDesc: 'Patient instruction, dual-control car designed for calm, step-by-step progress.',
    fullDesc: 'Learning in an automatic car removes gear-stick stress completely, letting you focus 100% on road positioning, observation, and steering. Taught with exceptional patience in a modern dual-control vehicle.',
    tags: ['Patient instruction', 'Dual-control car'],
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Automatic car gear selector and steering wheel in a modern dual-control vehicle',
    features: [
      'No gears to stall or rollback on Manchester hills',
      'Dual-control modern automatic car for total safety',
      'Patience-first teaching style - no shouting or rushing',
      'Flexible pick-up in M18 and surrounding areas',
    ],
  },
  {
    id: 'test-preparation',
    name: 'Test Preparation',
    shortDesc: 'Mock tests and local Manchester M18 route familiarization to eliminate exam anxiety.',
    fullDesc: 'We practice on actual Manchester test routes (such as West Didsbury & Cheetham Hill test areas). We cover tricky junctions, roundabouts, and independent driving until you feel completely ready.',
    tags: ['Mock tests', 'Route familiarization'],
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Driving on quiet Manchester residential street during test preparation',
    features: [
      'Realistic mock tests using official DVSA scoring sheets',
      'In-depth practice on complex M18 junctions and roundabouts',
      'Maneuver mastery: parallel parking, bay parking, and stopping',
      'Mental preparation techniques to handle test day nerves',
    ],
  },
  {
    id: 'refresher-courses',
    name: 'Refresher Courses',
    shortDesc: 'Confidence building and highway code review for licensed drivers returning to the road.',
    fullDesc: 'Haven\'t driven in years, suffered a knock to your confidence, or adjusting to UK roads? Our tailored refresher sessions focus entirely on the specific roads, parking scenarios, or motorways you fear.',
    tags: ['Confidence building', 'Highway code review'],
    imageUrl: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Driver building confidence on peaceful UK road',
    features: [
      'Zero judgment - start from wherever your confidence is at',
      'Motorway & busy Manchester city center driving practice',
      'Night-time or heavy weather driving support',
      'Customized lessons tailored to your specific travel routes',
    ],
  },
];

export const CONFIDENCE_STEPS: ConfidenceStep[] = [
  {
    stepNumber: 1,
    title: 'Nervous & Anxious',
    subtitle: 'Step 1: First Conversation',
    description: 'You might feel apprehensive or worry about making mistakes. We start with a calm chat about your goals and past experience, ensuring zero pressure.',
    stage: 'nervous',
    badgeColor: 'bg-gray-100 text-gray-700 border-gray-300',
  },
  {
    stepNumber: 2,
    title: 'Building Control',
    subtitle: 'Step 2: Dual-Control Automatic Practice',
    description: 'We practice steering, stopping, and smooth acceleration in quiet M18 residential streets where you have space and time to get comfortable.',
    stage: 'learning',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  {
    stepNumber: 3,
    title: 'Route Mastery',
    subtitle: 'Step 3: M18 & Junction Confidence',
    description: 'Tackle roundabouts, busy junctions, and test routes with calm, step-by-step guidance. Mistakes are treated as gentle learning moments.',
    stage: 'learning',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  {
    stepNumber: 4,
    title: 'Test Ready & Independent',
    subtitle: 'Step 4: Passing With Ease',
    description: 'Complete mock tests until driving feels natural and calm. You walk into your driving test feeling confident, relaxed, and fully prepared.',
    stage: 'ready',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'I had failed twice with manual instructors and was terrified of driving. The instructor at 12 Drive was so patient, calm and reassuring. Switching to automatic in M18 changed everything. Passed on my first try with them!',
    author: 'Sarah M.',
    area: 'Gorton, Manchester M18',
    tag: 'Passed 1st Try with Automatic',
    stars: 5,
    outcome: 'Overcame Severe Driving Anxiety',
  },
  {
    id: 't2',
    quote: 'As a mature learner starting late in my 30s, I was extremely anxious about making mistakes. Every lesson was structured, calm, and friendly. Never raised a voice once. I actually looked forward to lessons!',
    author: 'David K.',
    area: 'Levenshulme, M18',
    tag: 'Mature Learner',
    stars: 5,
    outcome: 'Built True Road Confidence',
  },
  {
    id: 't3',
    quote: 'Knowing every corner of the M18 test routes made such a difference. The mock tests were realistic and helped calm my panic on test day. Highly recommend to anyone who feels nervous!',
    author: 'Amina B.',
    area: 'Abbey Hey, M18',
    tag: 'Test Preparation',
    stars: 5,
    outcome: 'Passed DVSA Driving Test',
  },
];

export const MATCHER_OPTIONS = {
  experienceLevels: [
    { value: 'Complete Beginner', label: 'Complete Beginner', desc: 'Never driven before or just starting' },
    { value: 'Had Lessons Before', label: 'Had Lessons Before', desc: 'Taken some lessons in the past' },
    { value: 'Failed Test Previously', label: 'Failed Test Previously', desc: 'Need help passing after a failed attempt' },
    { value: 'Refresher / Licensed', label: 'Refresher Learner', desc: 'Have a license but need confidence back' },
  ],
  preferredTimes: [
    { value: 'Weekday Mornings', label: 'Weekday Mornings', desc: '8:00 AM - 12:00 PM' },
    { value: 'Weekday Afternoons', label: 'Weekday Afternoons', desc: '12:00 PM - 5:00 PM' },
    { value: 'Evenings & Weekends', label: 'Evenings & Weekends', desc: 'Flexible outside work/study hours' },
    { value: 'Flexible / Any Time', label: 'Flexible / Any Time', desc: 'Can fit in whenever slots open' },
  ],
  primaryGoals: [
    { value: 'Pass Test First Time', label: 'Pass Test First Time', desc: 'Structured preparation for upcoming test' },
    { value: 'Overcome Nerves & Anxiety', label: 'Overcome Nerves & Anxiety', desc: 'Patient, zero-pressure driving environment' },
    { value: 'Fast-Track Practical Test', label: 'Fast-Track Practice', desc: 'Frequent lessons to prepare quickly' },
    { value: 'Local Route Familiarity', label: 'M18 Area Mastery', desc: 'Master local junctions, parking & roundabouts' },
  ],
};
