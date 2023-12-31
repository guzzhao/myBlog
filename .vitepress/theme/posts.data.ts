import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
  tag: string
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {
  excerpt: false,
  transform(raw): Post[] {
    return raw.filter(e => e.frontmatter.public)
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date),
        frontmatter,
        tag: frontmatter.tag || '😃',
        description: frontmatter.description || '',
        year: formatYear(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  return {
    time: +date,
    string: date.toLocaleDateString(),
  }
}
function formatYear(raw: string): number {
  const date = new Date(raw)
  return date.getFullYear()
}
