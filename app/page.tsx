import Link from "next/link";
import { Footer, Header } from "@/components/SiteChrome";

const cities = [
  "Laguna Hills",
  "Irvine",
  "Mission Viejo",
  "Lake Forest",
  "Laguna Niguel",
  "Newport Beach",
  "Tustin",
  "Costa Mesa",
  "San Clemente",
  "San Juan Capistrano",
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap hero">
          <div>
            <div className="kicker">Laguna Hills · Orange County</div>
            <h1>Build a home that feels considered from every angle.</h1>
            <p>
              Laguna Hills Construction handles custom residential and commercial
              projects across Orange County, from kitchens and bathrooms to larger
              remodels and custom builds.
            </p>
            <div className="cta-row">
              <Link className="btn sans" href="/contact">Request an Estimate</Link>
              <a className="btn-ghost sans" href="#work">View Our Work</a>
            </div>
          </div>
          <div className="card">
            <div className="kicker">License</div>
            <h3>#1049889 · General B</h3>
            <p>Family-owned. Laguna Hills. Direct line (949) 528-7015.</p>
          </div>
        </div>
        <div className="wrap">
          <div className="proof">
            <div><strong>Family owned</strong>Locally operated</div>
            <div><strong>License #1049889</strong>California General B</div>
            <div><strong>20+ years experience</strong>First-party claim</div>
            <div><strong>(949) 528-7015</strong>Direct line</div>
          </div>
        </div>
        <section id="services">
          <div className="wrap">
            <div className="kicker">What we take on</div>
            <h2>Work grouped the way owners actually decide.</h2>
            <div className="grid-3">
              <article className="card"><h3>Kitchens</h3><p>Layouts and finishes that have to work every morning.</p></article>
              <article className="card"><h3>Bathrooms</h3><p>Wet-area details that decide whether a space lasts.</p></article>
              <article className="card"><h3>Residential remodeling</h3><p>Whole-home updates and custom residential work.</p></article>
              <article className="card"><h3>Custom luxury homes</h3><p>When the job is larger than a single room.</p></article>
              <article className="card"><h3>Commercial remodeling</h3><p>Tenant and business interiors.</p></article>
              <article className="card"><h3>Start with a conversation</h3><p>Mon–Fri 7–5; weekends by appointment.</p></article>
            </div>
          </div>
        </section>
        <section id="work">
          <div className="wrap">
            <div className="kicker">Project work</div>
            <h2>Every project deserves clear documentation.</h2>
            <p className="lede">Organize completed work by scope, room, and finish so homeowners can quickly understand the kind of projects Laguna Hills Construction takes on.</p>
          </div>
        </section>
        <section id="process">
          <div className="wrap">
            <div className="kicker">How a job starts</div>
            <h2>A simple, truthful process.</h2>
            <div className="steps">
              <div className="step"><h3>Call or write</h3><p>Share the address, rooms, and timing.</p></div>
              <div className="step"><h3>Walk the work</h3><p>Estimate from actual conditions.</p></div>
              <div className="step"><h3>Scope clearly</h3><p>Materials and sequencing before demolition.</p></div>
              <div className="step"><h3>Build</h3><p>Licensed General B execution through finish.</p></div>
            </div>
          </div>
        </section>
        <section id="area">
          <div className="wrap">
            <div className="kicker">Service area</div>
            <h2>Laguna Hills and the Orange County cities they name.</h2>
            <div className="cities">{cities.map((c) => (<span key={c}>{c}</span>))}</div>
          </div>
        </section>
        <section className="final">
          <div className="wrap">
            <h2>Request an estimate.</h2>
            <p>Call (949) 528-7015 to discuss your project.</p>
            <div className="cta-row">
              <a className="btn sans" href="tel:+19495287015">Call (949) 528-7015</a>
              <Link className="btn-ghost sans" href="/contact">Open contact</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
