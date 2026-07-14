export interface Project {
  name: string
  description: string
  shortDescription: string
  url: string
}

export const projects: Project[] = [
  {
    name: 'Trueskill Preference Research App',
    description:
      'Sistema de pesquisa de preferências baseado no algoritmo TrueSkill, que gera rankings inteligentes por meio de comparações entre opções.',
    shortDescription: 'Sistema de pesquisas de prefereência baseado em TrueSkill',
    url: 'https://github.com/teteumachado/trueskill-preference-research',
  },
]
