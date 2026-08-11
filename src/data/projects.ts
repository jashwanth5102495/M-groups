export interface Project {
  id: string;
  name: string;
  division: string;
  location: string;
  status: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'p1',
    name: '[Project Name Placeholder]',
    division: 'M Real Estate',
    location: '[Location Placeholder]',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'p2',
    name: '[Project Name Placeholder]',
    division: 'MS Builders',
    location: '[Location Placeholder]',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'p3',
    name: '[Project Name Placeholder]',
    division: 'M Interiors',
    location: '[Location Placeholder]',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
  }
];
