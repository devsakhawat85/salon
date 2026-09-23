import { ColorPillar, EducationWorkshop, PortfolioItem, TechniqueItem } from '../types';

export const ARTIST_INFO = {
  name: 'Mark Lamas',
  handle: '@hairmark1',
  instagramUrl: 'https://www.instagram.com/hairmark1/',
  role: 'Master Colorist · Redken Artist · Educator',
  salon: 'Panache — A Mark Lamas Salon',
  location: 'Bakersfield, California',
  tagline: 'COLOR IS MY SIGNATURE.',
  heroSubtext:
    'Mastering dimension, movement and modern hair color through technique, artistry and education.',
  statement:
    'Where technical precision meets creative expression.',
  bioSummary:
    'Mark Lamas is a renowned professional hair colorist, Redken Artist, and educator recognized for redefining dimensional color and precision formulation. At his salon, Panache in Bakersfield, California, and in educational classrooms across the country, Mark translates color chemistry into effortless, wearable art with seamless transitions, luminous brunette contouring, and durable blended blondes.',
};

export const COLOR_PILLARS: ColorPillar[] = [
  {
    title: 'DIMENSION',
    subtitle: 'Depth Meets Light',
    description: 'Creating depth and light that moves naturally through the hair.',
    detail:
      'True dimension is never accidental. By mapping lowlights and multi-tonal ribbons according to head curvature and density, every turn of the head catches natural illumination.',
  },
  {
    title: 'BALANCE',
    subtitle: 'Symmetry & Frame',
    description: 'Harmonizing facial features with soft contrasting tones.',
    detail:
      'We balance warm and cool tones against the client’s unique skin undertones, crafting customized contouring that highlights jawline structure and cheekbones.',
  },
  {
    title: 'MOVEMENT',
    subtitle: 'Fluid Graduation',
    description: 'Color designed to look effortless in motion and at rest.',
    detail:
      'Stiff blocks of color belong to the past. Our multi-zone smudging ensures that whether worn sleek, waved, or pinned, the color cascade remains organic.',
  },
  {
    title: 'TONALITY',
    subtitle: 'Precise Chemistry',
    description: 'Building sophisticated color through exact level formulation.',
    detail:
      'Mastery of underlying pigment and the color wheel enables us to create complex iridescent beiges, smoky mochas, and luminous champagnes that resist brassiness.',
  },
  {
    title: 'PERSONALIZATION',
    subtitle: 'Couture Design',
    description: 'Color designed around the individual rather than a fleeting trend.',
    detail:
      'Every formula is customized to hair porosity, maintenance cadence, personal aesthetic, and lifestyle commitments for effortless, high-longevity grow-out.',
  },
  {
    title: 'TECHNIQUE',
    subtitle: 'Educator Precision',
    description: 'Executing with strict intention from sectioning to multi-zone gloss.',
    detail:
      'Drawing from decades behind the chair and on Redken mainstages, we apply calibrated brush angles, tension control, and diffusion techniques to eliminate hard lines.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'Luminous Champagne Balayage',
    category: 'BLONDE',
    categoryLabel: 'Dimensional Blonde',
    image: '/src/assets/images/portfolio_blonde_balayage_1790180918403.jpg',
    aspectRatio: 'landscape',
    description:
      'Ultra-fine micro-weaves and surface painted panels melted into a soft natural shadow root. Designed for high shine and seamless 4-month longevity.',
    technique: 'Micro-Foilayage & Root Melt',
    formulaNote: 'Redken Flash Lift with Bonder Inside + Shades EQ 09P / 09NB Gloss',
    featured: true,
  },
  {
    id: 'work-2',
    title: 'Brunette Halo Contouring',
    category: 'BRUNETTE',
    categoryLabel: 'Dimensional Brunette',
    image: '/src/assets/images/portfolio_brunette_halo_1790180930917.jpg',
    aspectRatio: 'portrait',
    description:
      'Signature brunette depth paired with delicate caramel and toffee face-framing ribbons to illuminate facial features without harsh contrast.',
    technique: 'Brunette Halo & Teasylight Placement',
    formulaNote: 'Shades EQ Zone 1: 04M / 05NW · Zone 2-3: 07NW / 08GI',
    featured: true,
  },
  {
    id: 'work-3',
    title: 'Seamless Sombré Transition',
    category: 'SOMBRÉ',
    categoryLabel: 'Soft Sombré',
    image: '/src/assets/images/portfolio_sombre_melt_1790180942128.jpg',
    aspectRatio: 'portrait',
    description:
      'A gradual, fluid graduation from deep rich espresso into warm sandy beige. Zero demarcation line with a glass-like liquid finish.',
    technique: 'Diagonal Back Gradient Smudge',
    formulaNote: 'Multi-Zone Demi-Permanent Glossing with Shades EQ',
    featured: true,
  },
  {
    id: 'work-4',
    title: 'Redken Artist Masterclass',
    category: 'EDUCATION',
    categoryLabel: 'Professional Education',
    image: '/src/assets/images/education_workshop_redken_1790180955055.jpg',
    aspectRatio: 'landscape',
    description:
      'Demonstrating advanced sectioning geometry, brush tension, and saturation control live for professional colorists during a Redken hands-on academy.',
    technique: 'Classroom Demonstration & Placement Science',
    formulaNote: 'Educational Theory · Color Wheel Formulations',
    featured: false,
  },
  {
    id: 'work-5',
    title: 'Full Dimensional Overhaul',
    category: 'TRANSFORMATIONS',
    categoryLabel: 'Color Correction',
    image: '/src/assets/images/transform_after_color_1790180981725.jpg',
    aspectRatio: 'portrait',
    description:
      'Transforming oxidized uneven brass tones into a pristine pearl-beige balayage with an intentional root shadow that extends grow-out intervals.',
    technique: 'Color Balancing, Root Smudge & Cool Glaze',
    formulaNote: 'Corrective Pre-Pigmentation & Shades EQ 09V / 09GI',
    featured: true,
  },
  {
    id: 'work-6',
    title: 'Editorial Master Color Portrait',
    category: 'COLOR',
    categoryLabel: 'Signature Color',
    image: '/src/assets/images/hero_master_colorist_1790180903489.jpg',
    aspectRatio: 'landscape',
    description:
      'A study in dimensional hair architecture, texture refinement, and customized tonal harmony captured under studio lighting.',
    technique: 'Master Palette Custom Formulation',
    formulaNote: 'Custom Redken Artist formulation',
    featured: false,
  },
];

export const TECHNIQUES: TechniqueItem[] = [
  {
    id: 'tech-1',
    name: 'Root Smudge & Shadow Root',
    subtitle: 'Eliminating Demarcation',
    category: 'Foundation',
    description:
      'A precision application technique that blurs the transition between the natural base and lifted highlights, creating a soft shadow that elongates the wearability of any highlight service.',
    keyBenefits: [
      'Grows out without a harsh line of demarcation',
      'Provides natural depth at the crown and roots',
      'Extends salon visit intervals to 12–16 weeks',
      'Customizable from subtle tap to deep dramatic shadow',
    ],
    formulaInsight:
      'Typically formulated 1 to 1.5 levels lighter than the natural regrowth using acidic demi-permanent color to prevent lifting the natural melanin.',
    image: '/src/assets/images/portfolio_blonde_balayage_1790180918403.jpg',
  },
  {
    id: 'tech-2',
    name: 'Brunette Halo Contouring',
    subtitle: 'Sculpting Facial Architecture',
    category: 'Dimensional Brunette',
    description:
      'Strategic placement of soft illuminated ribbons around the hairline, temples, and nape while preserving rich interior depth. Creates an instant lift and radiant glow.',
    keyBenefits: [
      'Accentuates eyes and cheekbones',
      'Maintains rich brunette richness without looking washed out',
      'Low maintenance with soft re-growth',
      'Multi-tonal depth that glows under natural daylight',
    ],
    formulaInsight:
      'Formulating with warm golds, mochas, and iridescent pearls to prevent the color from looking muddy or flat.',
    image: '/src/assets/images/portfolio_brunette_halo_1790180930917.jpg',
  },
  {
    id: 'tech-3',
    name: 'Dimensional Balayage & Foilayage',
    subtitle: 'Surface Light with Interior Depth',
    category: 'Freehand & Hybrid',
    description:
      'Combining the soft, painted gradient of freehand balayage with the maximum lift of foils. Allows for ultra-clean lift on darker bases while maintaining soft, diffuse origins.',
    keyBenefits: [
      'Achieves up to 7–8 levels of clean lift without compromising hair health',
      'Custom placement tailored to natural head shape',
      'Zero striping or blunt foil streaks',
      'Seamless multi-dimensional shimmer',
    ],
    formulaInsight:
      'Lightener with integrated bonding agents paired with low-volume developer to preserve cuticle integrity.',
    image: '/src/assets/images/portfolio_sombre_melt_1790180942128.jpg',
  },
  {
    id: 'tech-4',
    name: 'Sombré (Soft Ombré) Melt',
    subtitle: 'The Art of Gradient Flow',
    category: 'Graduation',
    description:
      'A refined, subtle evolution of traditional ombré. The transition begins higher up the shaft and diffuses with whisper-soft graduation into luminous ends.',
    keyBenefits: [
      'Fluid transition without any visual shelf or banding',
      'Subtle, understated luxury aesthetic',
      'Effortless grow-out requires minimal root maintenance',
      'Looks exceptional in both sleek and textured styling',
    ],
    formulaInsight:
      'Zone 1 (Root), Zone 2 (Mid-shaft melt), and Zone 3 (Ends) using harmonized tonal families.',
    image: '/src/assets/images/transform_after_color_1790180981725.jpg',
  },
  {
    id: 'tech-5',
    name: 'Face-Framing Money Piece Refinement',
    subtitle: 'Controlled Frontal Illumination',
    category: 'Detail Artistry',
    description:
      'Moving away from heavy stripes toward ultra-diffused, micro-woven brightness at the hairline that seamlessly melts into the surrounding silhouette.',
    keyBenefits: [
      'Instant complexion brightening',
      'Creates photographic pop in selfies and portraits',
      'Blended root shadow prevents stark regrowth',
      'Quick refresh service between full blonding appointments',
    ],
    formulaInsight:
      'Babylight weave on a diagonal forward angle with a 1/4-inch root smudge at the immediate hairline.',
    image: '/src/assets/images/portfolio_blonde_balayage_1790180918403.jpg',
  },
  {
    id: 'tech-6',
    name: 'Multi-Zone Glossing & Tonal Correction',
    subtitle: 'Color Chemistry & Mirror Shine',
    category: 'Chemistry',
    description:
      'Acidic color conditioning that seals the cuticle, neutralizes unwanted brass, and deposits multi-faceted pigment for mirror-like light reflection.',
    keyBenefits: [
      'Balances post-lightened hair pH to 4.5–5.5',
      'Provides intense high-gloss conditioning',
      'Refines yellow/orange undertones without overtone darkening',
      'Gentle on compromised hair fiber with zero ammonia',
    ],
    formulaInsight:
      'Redken Shades EQ liquid acidic technology applied for full 20-minute processing for maximum longevity.',
    image: '/src/assets/images/education_workshop_redken_1790180955055.jpg',
  },
];

export const EDUCATION_WORKSHOPS: EducationWorkshop[] = [
  {
    id: 'ws-1',
    title: 'The Architecture of Root Smudging',
    type: 'Redken Artist Workshop',
    format: 'Hands-On Masterclass & Theory',
    description:
      'Deep dive into the science of root shadows, taps, and melts. Learn how to eliminate demarcation lines, control background pigment, and extend highlight longevity for clients.',
    focus: 'Demarcation Elimination · Acidic Demi Formulations · Zone Toning',
    keyTakeaways: [
      'Brush tension and angled diffusion techniques',
      'Formulating Zone 1 vs. Zone 2 for seamless blends',
      'Formulation math using the color wheel to cancel brass',
    ],
  },
  {
    id: 'ws-2',
    title: 'Brunette Halo Contouring',
    type: 'Advanced Technique Session',
    format: 'Live Demonstration & Hands-On',
    description:
      'Master the art of creating multidimensional brunette color that sparkles under every light. Learn facial mapping, teasylight saturation, and caramel formulation.',
    focus: 'Brunette Dimensionality · Facial Contouring · Soft Placement',
    keyTakeaways: [
      'Sectioning strategies to keep rich interior depth',
      'Avoiding murky tones and brassy undertones in level 4–7 hair',
      'Curating bespoke formulations for warm vs. cool skin undertones',
    ],
  },
  {
    id: 'ws-3',
    title: 'From Chair to Classroom: Educator Mindset',
    type: 'Professional Development',
    format: 'Intensive Seminar & Platform Skills',
    description:
      'For salon professionals seeking to elevate their communication, share technique with clarity, and inspire fellow stylists through Redken methodologies.',
    focus: 'Platform Presentation · Technique Breakdown · Mentorship',
    keyTakeaways: [
      'How to articulate color theory into actionable steps',
      'Effective live model demonstration strategies',
      'Cultivating artist brand presence on Instagram (@hairmark1)',
    ],
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: '/src/assets/images/portfolio_blonde_balayage_1790180918403.jpg',
    caption: 'Luminous champagne melt. Root smudge creates that effortless 3-month grow-out. Formulated with Redken Shades EQ.',
    likes: '1.4k',
    comments: '88',
    category: 'Balayage Blonde',
  },
  {
    id: 'ig-2',
    image: '/src/assets/images/portfolio_brunette_halo_1790180930917.jpg',
    caption: 'Brunette halo contouring in action. Soft caramel ribbons framing the face while keeping that rich espresso base.',
    likes: '2.1k',
    comments: '132',
    category: 'Dimensional Brunette',
  },
  {
    id: 'ig-3',
    image: '/src/assets/images/education_workshop_redken_1790180955055.jpg',
    caption: 'Sharing technique with this incredible group of artists. When we understand the science of hair, the art becomes limitless.',
    likes: '960',
    comments: '64',
    category: 'Redken Education',
  },
  {
    id: 'ig-4',
    image: '/src/assets/images/transform_after_color_1790180981725.jpg',
    caption: 'Full corrective transformation. Out with the brass, in with creamy neutral beige and maximum mirror gloss.',
    likes: '3.2k',
    comments: '210',
    category: 'Transformation',
  },
  {
    id: 'ig-5',
    image: '/src/assets/images/portfolio_sombre_melt_1790180942128.jpg',
    caption: 'Soft sombré graduation. The key is in the diagonal back sectioning and feathering with the side of the brush.',
    likes: '1.8k',
    comments: '94',
    category: 'Sombré',
  },
  {
    id: 'ig-6',
    image: '/src/assets/images/mark_lamas_portrait_1790180994406.jpg',
    caption: 'Behind the chair at Panache Salon. Ready for another week of color architecture and education.',
    likes: '1.1k',
    comments: '73',
    category: 'Studio Moments',
  },
];
