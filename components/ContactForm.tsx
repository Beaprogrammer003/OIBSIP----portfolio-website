"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

// Static site, so the form opens the visitor's mail app with the message filled in.
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none transition placeholder:text-neutral-600 focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-neutral-950 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-neutral-400">
          Name
          <input required className={`${field} mt-2`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
        </label>
        <label className="block text-sm text-neutral-400">
          Email
          <input required type="email" className={`${field} mt-2`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
        </label>
      </div>
      <label className="block text-sm text-neutral-400">
        Message
        <textarea required rows={5} className={`${field} mt-2 resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project or role…" />
      </label>
      <button type="submit" className="w-full rounded-full bg-white py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
        Send message
      </button>
    </form>
  );
}
