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
