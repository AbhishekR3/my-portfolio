import type { LinkedInPost } from '../types';
import './LinkedInPosts.css';

interface LinkedInPostsProps {
  posts: LinkedInPost[];
}

const LinkedInPosts = ({ posts }: LinkedInPostsProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPlatformClass = (platform?: string) => {
    if (platform === 'LinkedIn') return 'platform-linkedin';
    if (platform === 'Medium') return 'platform-medium';
    if (platform === 'GitHub') return 'platform-github-pages';
    if (platform === 'StrataScratch') return 'platform-stratascratch';
    if (platform === 'X') return 'platform-x';
    return '';
  };

  return (
    <section id="posts" className="section">
      <div className="container">
        <h2>Technical Writing & Publications</h2>
        <div className="posts-grid">
          {posts.map((post) => (
            <article key={post.id} className="card post-card">
              {post.imageUrl && (
                <div className="post-image">
                  <img src={post.imageUrl} alt="Post" />
                </div>
              )}
              <div className="post-content">
                {post.platform && (
                  <span className={`post-platform-badge ${getPlatformClass(post.platform)}`}>
                    {post.platform}
                  </span>
                )}
                {post.title && <h3 className="post-title">{post.title}</h3>}
                <p className="post-text">{post.content}</p>
                <div className="post-meta">
                  <span className="post-date">{formatDate(post.date)}</span>
                  {(post.likes || post.comments) && (
                    <div className="post-engagement">
                      {post.likes && <span>❤️ {post.likes}</span>}
                      {post.comments && <span>💬 {post.comments}</span>}
                    </div>
                  )}
                </div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-link"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInPosts;
