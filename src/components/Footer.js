import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  const name = "Your Name"; // Replace with your name or company name

  return (
    <footer className="footer">
      <p>© {currentYear} {name}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
