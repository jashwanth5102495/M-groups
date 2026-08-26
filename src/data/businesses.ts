export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'Existing' | 'Upcoming';
  route: string;
  image: string;
  featured: boolean;
}

export const businesses: Business[] = [
  {
    id: 'ms-builders',
    name: 'MS Builders & Developers',
    category: 'Construction',
    description: 'Building spaces designed for lasting value.',
    status: 'Existing',
    route: 'https://www.msbuilderanddevelopers.com/',
    image: '/landing/MS Builders & Developers.webp',
    featured: true
  },
  {
    id: 'mistory-roster-cafe',
    name: 'Mistory Roster Café',
    category: 'Hospitality',
    description: 'Creating spaces where food, design and experience come together.',
    status: 'Existing',
    route: '/businesses/mistory-roster-cafe',
    image: '/landing/Mistory Roster Café.webp',
    featured: true
  },
  {
    id: 'm-farms',
    name: 'M Farms',
    category: 'Agriculture',
    description: 'Growing fruits and flowers with purpose.',
    status: 'Existing',
    route: '/businesses/m-farms',
    image: '/landing/M Farms.webp',
    featured: true
  },
  {
    id: 'm-real-estate',
    name: 'M Real Estate',
    category: 'Real Estate',
    description: 'Premium properties and modern commercial spaces.',
    status: 'Existing',
    route: '/businesses/m-real-estate',
    image: '/landing/M Real Estate.webp',
    featured: true
  },
  {
    id: 'mistory-family-restaurant',
    name: 'Mistory Family Restaurant',
    category: 'Hospitality',
    description: 'A new dining experience is taking shape.',
    status: 'Existing',
    route: '/businesses/mistory-family-restaurant',
    image: '/landing/Mistory Family Restaurant.webp',
    featured: false
  },
  {
    id: 'mg-block',
    name: 'M Block & Interiors',
    category: 'Manufacturing & Design',
    description: 'Hollow block manufacturing and sophisticated interior spaces.',
    status: 'Existing',
    route: '/businesses/mg-block',
    image: '/landing/MG Block.webp',
    featured: false
  }
];
