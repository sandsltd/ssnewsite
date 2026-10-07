export const paperRouteProducts = [
  {
    id: 'paperroute',
    theme: 'blue',
    logo: '/brands/paperroute.svg',
    headline: 'The whole operation. Connected.',
    features: ['Collection planning & driver tools', 'Digital waste records & receiving sites', 'Customer accounts & invoicing'],
    number: '01',
    name: 'PaperRoute',
    audience: 'Waste & recycling operators',
    description: 'The full operations platform. Bring collection planning, drivers, waste records, receiving sites and invoicing together.',
    url: 'https://www.paperroute.co.uk',
    domain: 'paperroute.co.uk',
  },
  {
    id: 'skips',
    theme: 'orange',
    logo: '/brands/paperroute-skips.svg',
    headline: 'Keep your skip hire day moving.',
    features: ['Bookings & day scheduling', 'Skip movements & yard receipts', 'Customer updates & accounts'],
    number: '02',
    name: 'PaperRoute Skips',
    audience: 'Skip hire businesses',
    description: 'Keep bookings, driver runs, skip movements, yard receipts and customer accounts working from one record.',
    url: 'https://www.skiproute.co.uk',
    domain: 'skiproute.co.uk',
  },
  {
    id: 'lite',
    theme: 'blue',
    logo: '/brands/paperroute-lite.svg',
    headline: 'Your paperwork. In your pocket.',
    features: ['Digital Waste Transfer Notes', 'Customer signatures & PDF records', 'Built for work on the road'],
    number: '03',
    name: 'PaperRoute Lite',
    audience: 'Small carriers & sole traders',
    description: 'Practical paperwork, wherever the work takes you. Create and sign digital Waste Transfer Notes from your phone.',
    url: 'https://www.paperroutelite.co.uk',
    domain: 'paperroutelite.co.uk',
  },
  {
    id: 'broker',
    theme: 'purple',
    logo: '/brands/paperroute-broker.svg',
    headline: 'Less chasing. Clearer margins.',
    features: ['Customer & supplier coordination', 'Job offers & completion evidence', 'Costs & margins in one workspace'],
    number: '04',
    name: 'PaperRoute Broker',
    audience: 'Waste brokerage teams',
    description: 'Connect customers and suppliers. Keep job offers, completion evidence, costs and margins in one organised workspace.',
    url: 'https://www.paperroutebroker.co.uk',
    domain: 'paperroutebroker.co.uk',
  },
] as const;

export type PaperRouteProduct = (typeof paperRouteProducts)[number];

// The company portfolio can grow without changing its public identity.
export const companyBrands = [
  {
    name: 'The PaperRoute family',
    heading: 'The PaperRoute',
    accent: 'family.',
    description: 'Specialist software for the people who keep the waste industry moving.',
    category: 'Our flagship software brand',
    sector: 'Waste & recycling',
    products: paperRouteProducts,
  },
] as const;
