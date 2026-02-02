import type { ResumeData } from '../types';
import './Resume.css';

interface ResumeProps {
  data: ResumeData;
}

const Resume = ({ data }: ResumeProps) => {
  const getTagClass = (): string => {
    return 'tag';
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-header">
          <h2>Resume</h2>
          <a
            href={`${import.meta.env.BASE_URL}${data.pdfUrl.replace(/^\//, '')}`}
            download="Abhishek Ramesh Resume"
            className="download-button"
          >
            Download PDF
          </a>
        </div>

        <div className="resume-content">
          {data.sections.map((section, index) => (
            <div key={index} className="resume-section-block">
              <h3 className="resume-section-title">{section.title}</h3>
              <div className="resume-items">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="resume-item card">
                    <div className="resume-item-header">
                      <div>
                        <h4 className="resume-item-title">{item.title}</h4>
                        {item.subtitle && (
                          <p className="resume-item-subtitle">{item.subtitle}</p>
                        )}
                      </div>
                      {item.date && (
                        <span className="resume-item-date">{item.date}</span>
                      )}
                    </div>

                    {item.description && (
                      <div className="resume-item-description">
                        {item.description.map((desc, descIndex) => (
                          <p key={descIndex}>{desc}</p>
                        ))}
                      </div>
                    )}

                    {item.links && (
                      <div className="resume-item-links">
                        {item.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-link-button"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {item.tags && (
                      <div className="resume-item-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className={getTagClass()}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
