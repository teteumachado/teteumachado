import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 className="text-2xl font-bold mt-10 mb-4 tracking-tight" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-xl font-semibold mt-8 mb-3 tracking-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-lg font-semibold mt-6 mb-2" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-relaxed text-sm" {...props}>
      {children}
    </p>
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="underline underline-offset-2 decoration-muted-foreground/30 hover:decoration-foreground transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc pl-6 mb-4 space-y-1 text-sm" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1 text-sm" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-2 border-muted-foreground/30 pl-4 italic text-muted-foreground mb-4"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }) => (
    <code
      className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="bg-muted p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono border"
      {...props}
    >
      {children}
    </pre>
  ),
  hr: (props) => (
    <hr className="my-8 border-muted" {...props} />
  ),
  img: ({ src, alt, ...props }) => (
    <img
      src={src}
      alt={alt || ''}
      className="rounded-lg my-6 w-full h-auto"
      {...props}
    />
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
