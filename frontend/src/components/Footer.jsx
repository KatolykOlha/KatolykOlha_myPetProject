function Footer() {
  return (
    <footer className="footer flex justify-between text-xs">
      <p>© 2025 My Pet Project. All rights reserved.</p>
      <div className="social-media flex flex-1 gap-3 justify-end">
        <p>Follow me on social media:</p>
        <ul className="social-links flex justify-end gap-2">
          <li>
            <a
              href="https://www.facebook.com/orusyaeva"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/olha-katolyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/orusyaeva11"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
