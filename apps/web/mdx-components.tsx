import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(): MDXComponents {
  return {
    pre: ({ children, ...props }) => (
      <pre className="not-prose" {...props}>{children}</pre>
    ),
  }
}
