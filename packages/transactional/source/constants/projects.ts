export interface Project {
  name: string
  description: string
  url?: string
}

export const projects: Project[] = [
  {
    name: 'Trueskill Preference Research App',
    description: 'An research app using trueskill algorithm.',
    url: 'https://github.com/teteumachado/trueskill-preference-research',
  },
]
