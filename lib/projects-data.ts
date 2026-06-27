export interface Project {
  id: string;
  name: string;
  year: string;
  link: string | null;
  /** Path under /public, or null to show the placeholder visual */
  image: string | null;
  status: 'live' | 'in-progress' | 'placeholder';
}

// TODO: replace each entry with a real project once available.
// To add a new project, just push a new object here — the grid layout
// is already wired to handle any number of items.
export const projects: Project[] = [
  {
    id: 'project-01',
    name: 'Project 01',
    year: '2026',
    link: null,
    image: null,
    status: 'placeholder',
  },
  {
    id: 'project-02',
    name: 'Project 02',
    year: '2026',
    link: null,
    image: null,
    status: 'placeholder',
  },
  {
    id: 'project-03',
    name: 'Project 03',
    year: '2026',
    link: null,
    image: null,
    status: 'placeholder',
  },
  {
    id: 'project-04',
    name: 'Project 04',
    year: '2026',
    link: null,
    image: null,
    status: 'placeholder',
  },
];
