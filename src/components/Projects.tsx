import type { ReactNode } from 'react';
import type { Project } from '../types';
import OceanChart from './OceanChart';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

// Tags that signal ML/AI technique or domain — the only tags that get a color highlight.
// Kept sparse on purpose: color should draw the eye to AI/ML work specifically, not
// categorize every tag.
const AI_HIGHLIGHT_TAGS = new Set([
  'Neural Networks',
  'Spatial Computing',
  'GPU-Acceleration',
  'NLP',
  'Prompt Engineering',
  'AI Safety',
  'Alignment Research',
]);

// Render `[text](url)` markdown-style inline links inside an otherwise plain-text line.
const renderLinks = (text: string, keyPrefix: string): ReactNode[] => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a key={`${keyPrefix}-${key++}`} href={match[2]} target="_blank" rel="noopener noreferrer">
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
};

// Split a description into blank-line-separated blocks, rendering `- ` blocks as bullet
// lists and everything else as paragraphs. Both still support inline `[text](url)` links.
const renderDescription = (text: string): ReactNode[] => {
  return text.split('\n\n').map((block, blockIndex) => {
    const lines = block.split('\n');
    const isList = lines.every((line) => line.startsWith('- '));
    if (isList) {
      return (
        <ul key={blockIndex}>
          {lines.map((line, lineIndex) => (
            <li key={lineIndex}>{renderLinks(line.slice(2), `${blockIndex}-${lineIndex}`)}</li>
          ))}
        </ul>
      );
    }
    return <p key={blockIndex}>{renderLinks(block, `${blockIndex}`)}</p>;
  });
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-featured">
          {projects.map((project) => (
            <article key={project.id} className="featured-project-card">
              {project.oceanData ? (
                <div className="featured-project-image ocean-chart-container">
                  <OceanChart data={project.oceanData} />
                </div>
              ) : project.imageUrl ? (
                <div className="featured-project-image">
                  <img
                    src={
                      /^https?:\/\//.test(project.imageUrl)
                        ? project.imageUrl
                        : `${import.meta.env.BASE_URL}${project.imageUrl.replace(/^\//, '')}`
                    }
                    alt={project.title}
                  />
                </div>
              ) : null}
              <div className="featured-project-content">
                <h3>{project.title}</h3>
                <div className="project-description">{renderDescription(project.description)}</div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={AI_HIGHLIGHT_TAGS.has(tag) ? 'tag tag-ai-highlight' : 'tag'}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub →
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
