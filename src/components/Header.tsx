import './Header.css';

const Header = () => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(id);
    const header = document.querySelector('.header');
    if (element) {
      const headerHeight = header ? header.getBoundingClientRect().height : 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight + 35;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Abhishek Ramesh
            </a>
          </div>

          <ul className="nav-menu">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Project</a></li>
            <li><a href="#posts" onClick={(e) => { e.preventDefault(); scrollToSection('posts'); }}>Articles</a></li>
            <li><a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>Resume</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
