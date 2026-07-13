export interface Project {
  name: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    name: 'Trueskill Preference Research App',
    description:
      'Sistema de pesquisa de preferências baseado no algoritmo TrueSkill, que gera rankings inteligentes por meio de comparações entre opções.',
    url: 'https://github.com/teteumachado/trueskill-preference-research',
  },
  {
    name: 'Teteu Machado',
    description:
      'Site pessoal com blog, portfólio e experimentos. Construído com Next.js, Tailwind v4 e shadcn/ui.',
    url: 'https://teteumachado.com',
  },
  {
    name: 'Another Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'https://github.com/teteumachado1',
  },
  {
    name: 'Yet Another Project',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://github.com/teteumachado2',
  },
  {
    name: 'Another Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'https://github.com/teteumachado3',
  },
  {
    name: 'Yet Another Project',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://github.com/teteumachado4',
  },
]
