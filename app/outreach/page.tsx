import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outreach — Laguna Hills Construction demo",
  robots: { index: false, follow: false },
};

export default function OutreachPage() {
  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: "0 20px", fontFamily: "ui-sans-serif, system-ui" }}>
      <p style={{ letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12 }}>Novenworks / operator only</p>
      <h1>Laguna Hills Construction, Inc. — outreach brief</h1>
      <p>Unlinked. Not in prospect nav. noindex.</p>
      <ul>
        <li>Original: https://www.lagunahillsconstruction.com/ (Website Builder 404 as of 2026-09-08)</li>
        <li>Demo: https://laguna-hills-construction-demo.vercel.app</li>
        <li>GitHub: https://github.com/Novenworks/Laguna-Hills-Construction-Demo</li>
        <li>Phone: (949) 528-7015</li>
        <li>License published first-party: #1049889 Gen B</li>
      </ul>
      <h2>Outreach draft (not sent)</h2>
      <p>
        Subject idea: A mobile-ready preview of Laguna Hills Construction&apos;s site. Body: Hi, I looked at your
        current site and noticed the services and Orange County coverage are easy to miss on a phone, and there is no
        simple estimate path above the fold. I put together a preview that groups kitchens, bathrooms, remodels, custom
        homes and commercial work and puts a call and estimate request up front. The package is done for you: copy,
        build, mobile polish, connection to your existing estimate or phone path, technical setup and launch. I handle
        the work. You review and approve. Want me to send over the full breakdown of what you get and what it costs?
        Vincent / Novenworks
      </p>
      <h2>Contact status (2026-10-06)</h2>
      <p>
        lhconstruction77@gmail.com and (949) 528-7015 appear on a third-party listing (mylocalservices.com). The
        official site returned 404 to automated fetch today, so first-party email could not be re-confirmed. Confirm
        before sending.
      </p>
      <h2>Open items</h2>
      <p>No authentic project photos in the demo yet. Request photos from the owner or source from the original site before sending.</p>
      <h2>Agency</h2>
      <p>Duda / cdn-website.com. No named agency credit on archived pages. Do not claim no agency exists.</p>
      <h2>What not to say</h2>
      <ul>
        <li>Do not claim Novenworks was hired.</li>
        <li>Do not invent ROI, rankings, or star totals.</li>
        <li>Do not insult a presumed agency.</li>
        <li>Do not treat stock photos as LHC jobs.</li>
        <li>Do not invent a CSLB expiration date.</li>
      </ul>
    </main>
  );
}
