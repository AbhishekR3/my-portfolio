import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import LinkedInPosts from './components/LinkedInPosts';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import aboutData from './data/about.json';
import projectsData from './data/projects.json';
import linkedInPostsData from './data/linkedin-posts.json';
import socialLinksData from './data/social-links.json';
import resumeData from './data/resume.json';

import type { AboutData, Project, LinkedInPost, SocialLink, ResumeData } from './types';

function App() {
  useTheme(); // Initialize theme system

  return (
    <>
      <Header />
      <main>
        <About data={aboutData as AboutData} />
        <Projects projects={projectsData as Project[]} />
        <LinkedInPosts posts={linkedInPostsData as LinkedInPost[]} />
        <Resume data={resumeData as ResumeData} />
        <Contact
          socialLinks={socialLinksData as SocialLink[]}
          email={(aboutData as AboutData).email}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
