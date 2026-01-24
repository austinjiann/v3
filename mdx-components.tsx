import type { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'

function generateId(children: ReactNode): string {
  const text = typeof children === 'string' ? children : String(children)
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-3xl font-bold text-black mb-4">{children}</h1>,
    h2: ({ children }) => <h2 id={generateId(children)} className="text-2xl font-semibold text-black mt-4 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 id={generateId(children)} className="text-xl font-semibold text-black mt-6 mb-3">{children}</h3>,
    p: ({ children }) => <p className="text-black mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside text-black mb-4 space-y-1">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside text-black mb-4 space-y-1">{children}</ol>,
    li: ({ children }) => <li className="text-black">{children}</li>,
    a: ({ href, children }) => <a href={href} className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">{children}</a>,
    code: ({ children }) => <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
    pre: ({ children }) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto mb-4">{children}</pre>,
    ...components,
  }
}
