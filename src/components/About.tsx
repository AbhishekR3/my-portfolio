import type { AboutData } from '../types';
import './About.css';

interface AboutProps {
  data: AboutData;
}

const About = ({ data }: AboutProps) => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>{data.name}</h1>
            <h2 className="about-subtitle">{data.title}</h2>
            <p className="about-bio">{data.bio}</p>
            {data.location && (
              <p className="about-location">📍 {data.location}</p>
            )}
          </div>
          {data.imageUrl && (
            <div className="about-image">
              <img src={`${import.meta.env.BASE_URL}${data.imageUrl.replace(/^\//, '')}`} alt={data.name} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
