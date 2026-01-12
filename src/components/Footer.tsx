import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Abhishek Ramesh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
