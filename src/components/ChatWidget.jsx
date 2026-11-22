import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';
import { chatFallback, chatKnowledge, profile } from '../data/content';

const WELCOME =
  "Hi! 👋 I'm Ikram's portfolio assistant. Ask me about his skills, projects, experience or how to get in touch.";

/** Pick the best canned answer from the knowledge base. */
function getAnswer(input) {
  const text = input.toLowerCase();
  const match = chatKnowledge.find((entry) =>
    entry.keywords.some((kw) => text.includes(kw)),
  );
  return match ? match.answer : chatFallback;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: WELCOME }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  // Keep the latest message in view.
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setTyping(true);

    // Simulate a short "thinking" delay before replying.
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: getAnswer(text) }]);
      setTyping(false);
    }, 650);
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Chat about Ikram'}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 text-[#0a0a0f] shadow-xl shadow-blue-500/40 transition hover:scale-105"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'chat'}
            initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            <Icon name={open ? 'close' : 'bot'} size={24} />
          </motion.span>
        </AnimatePresence>
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="glass fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl shadow-2xl shadow-black/40"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-200 bg-white/60 px-4 py-3 dark:border-white/10 dark:bg-white/5">
              <span className="rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-[2px]">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-9 w-9 rounded-full object-cover"
                />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {profile.firstName}&apos;s Assistant
                </p>
                <p className="flex items-center gap-1.5 text-xs text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ml-auto grid h-8 w-8 place-items-center rounded-lg text-slate-500 transition hover:bg-white/10 dark:text-slate-400"
              >
                <Icon name="close" size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'rounded-br-sm bg-blue-400 text-[#0a0a0f]'
                        : 'rounded-bl-sm border border-slate-200 bg-white/80 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200'
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <span className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-slate-200 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </span>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white/60 p-3 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything…"
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white/80 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-400 to-emerald-400 text-[#0a0a0f] transition hover:opacity-90"
                >
                  <Icon name="send" size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
