"use client";

import { Footer, Header } from "@/components/SiteChrome";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "64px 0" }}>
        <div className="kicker">Contact</div>
        <h1 style={{ fontSize: 42, fontWeight: 500 }}>Request an estimate</h1>
        <p className="lede">
          Call us at{" "}
          <a href="tel:+19495287015">(949) 528-7015</a>. Hours: Mon–Fri 7:00 am–5:00 pm;
          weekends by appointment. Laguna Hills, CA. License #1049889.
        </p>
        {sent ? (
          <p className="card" style={{ marginTop: 24 }}>
            Concept preview: this form does not send anything yet, so nothing was delivered. Please call (949) 528-7015 to reach us.
          </p>
        ) : (
          <form onSubmit={onSubmit} style={{ marginTop: 28 }}>
            <label>
              Name
              <input name="name" required />
            </label>
            <label>
              Phone
              <input name="phone" required />
            </label>
            <label>
              Project notes
              <textarea name="notes" rows={5} />
            </label>
            <button className="btn sans" type="submit">
              Preview request
            </button>
            <p className="note">Concept preview. Nothing is sent or stored.</p>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
