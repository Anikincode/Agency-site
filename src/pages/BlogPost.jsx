import { useParams, Link, Navigate } from 'react-router-dom'
import { getPost, getRecentPosts } from '../data/posts'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  const related = getRecentPosts(3).filter(p => p.slug !== slug).slice(0, 2)

  if (!post) return <Navigate to="/knowledge" replace />

  return (
    <main>
      <article className="blog-post">
        <header className="blog-post__hero">
          <div className="container container--sm">
            <div className="blog-post__meta">
              <Link to="/knowledge" className="blog-post__back">← Knowledge</Link>
              <span className="badge badge--blue">{post.category}</span>
              <span className="blog-post__read">{post.readTime}</span>
            </div>
            <h1 className="blog-post__title">{post.title}</h1>
            <p className="blog-post__excerpt">{post.excerpt}</p>
            <time className="blog-post__date" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </header>

        <div className="container container--sm">
          <div
            className="prose blog-post__body"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }}
          />
        </div>

        <footer className="blog-post__footer">
          <div className="container container--sm">
            <div className="blog-post__cta">
              <h3>Want results like this for your business?</h3>
              <p>Book a free 30-minute demo. We'll audit your online presence and show you exactly what it would take to rank.</p>
              <Link to="/contacts" className="btn btn--primary btn--lg">Book a Free Demo</Link>
            </div>
          </div>
        </footer>
      </article>

      {related.length > 0 && (
        <section className="section section--soft">
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: 'var(--space-10)' }}>More from Knowledge</h2>
            <div className="related-posts">
              {related.map(p => (
                <Link key={p.slug} to={`/post/${p.slug}`} className="related-card">
                  <span className="badge badge--blue">{p.category}</span>
                  <h3 className="related-card__title">{p.title}</h3>
                  <p className="related-card__excerpt">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

// Minimal markdown → HTML converter (no external deps)
function markdownToHtml(md) {
  return md
    .trim()
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`
      if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`
      if (line.startsWith('- ')) return `<li>${inline(line.slice(2))}</li>`
      if (line === '') return '<br>'
      return `<p>${inline(line)}</p>`
    })
    .join('\n')
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    .replace(/<br>\n?<br>/g, '')
}

function inline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
}
