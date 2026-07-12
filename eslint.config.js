import { config } from '@workspace/eslint-config/base'

export default [
  ...config,
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/.turbo/**',
      '**/coverage/**',
    ],
  },
]
