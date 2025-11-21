import "../styles/Footer.css";

function Footer({ config }) {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <p>©{currentYear} {config.name}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
