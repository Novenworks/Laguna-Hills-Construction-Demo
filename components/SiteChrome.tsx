import Link from "next/link";

export function Header() {
  return (
    <header className="site">
      <div className="wrap nav">
        <Link href="/" className="sans" style={{ fontWeight: 600, letterSpacing: "0.04em", fontSize: 14 }}>
          LAGUNA HILLS CONSTRUCTION
        </Link>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#area">Orange County</a>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="btn sans" href="tel:+19495287015">
          (949) 528-7015
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot">
        <div>
          <strong>Laguna Hills Construction, Inc.</strong>
          <div>Laguna Hills, CA</div>
          <div>License #1049889 · General B</div>
        </div>
        <div>
          <div>
            <a href="tel:+19495287015">(949) 528-7015</a>
          </div>
          <div>Mon–Fri 7:00 am – 5:00 pm</div>
          <div>Sat–Sun by appointment</div>
        </div>
      </div>
      <div className="wrap note">
        Speculative redesign by Novenworks. Not an official LHC website. Marks and photography remain the property of their owners.
      </div>
    </footer>
  );
}
