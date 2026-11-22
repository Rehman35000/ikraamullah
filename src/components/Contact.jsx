import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Icon from './Icon';
import { Reveal, Section, SectionHeading } from './Section';
import { profile, socials } from '../data/content';

// EmailJS config — set these in a .env file (see .env.example / README).
// If they are missing, the form gracefully falls back to opening the user's
// mail client with the message pre-filled.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isEmailJSConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setFeedback('');

    // Fallback: no EmailJS keys → open the default mail client.
    if (!isEmailJSConfigured) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      setFeedback('Opening your mail app so you can send the message…');
      setForm(initialForm);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          to_name: profile.name,
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus('success');
      setFeedback("Thanks! Your message has been sent — I'll get back to you soon.");
      setForm(initialForm);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setFeedback('Something went wrong. Please email me directly instead.');
    }
  };

  const inputClasses =
    'w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-500';

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        subtitle="Have a project in mind or just want to say hi? Drop me a message."
      />

      <div className="grid gap-8 md:grid-cols-5">
        {/* Info */}
        <Reveal className="md:col-span-2">
          <div className="glass h-full rounded-3xl p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Get in touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              I&apos;m currently open to freelance work and full-time opportunities. Fill in the
              form or reach me through any of the channels below.
            </p>

            <ul className="mt-7 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-slate-700 transition hover:text-blue-500 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-400/10 text-blue-400">
                    <Icon name="mail" size={18} />
                  </span>
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Icon name="mapPin" size={18} />
                </span>
                {profile.location}
              </li>
            </ul>

            <div className="mt-7 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-blue-400/50 hover:text-blue-500 dark:border-white/10 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project…"
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-400 px-7 py-3.5 font-semibold text-[#0a0a0f] glow-blue transition hover:bg-blue-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
              <Icon name="send" size={17} />
            </button>

            {feedback && (
              <p
                role="status"
                className={`mt-4 text-sm ${
                  status === 'error' ? 'text-red-400' : 'text-emerald-400'
                }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
