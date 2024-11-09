function Header() {
  return (
    <header>
      <a href="#" className="logo">
        Adithia<span>Christian</span>
      </a>
      <div className="bx bx-menu" id="menu-icon" />
      <ul className="navlist">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="top-btnn">
        <a href="#" className="h-btn">
          Contact me
        </a>
      </div>
    </header>
  );
}

export default Header;
