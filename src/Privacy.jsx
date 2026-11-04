import { useEffect, useMemo, useState } from "react";
import { useLanguage, SUPPORTED_LANGUAGES } from "./i18n";
import { getPolicy } from "./privacyContent";
import "./Privacy.css";

/* ── Ин қиматҳоро пеш аз нашр дуруст кунед ── */
const APP_NAME = "Messenger0";
const CONTACT_EMAIL = "simply@sanjar.com";
const MIN_AGE = 13; // ҳадди ақали синну сол
const RETENTION_DAYS = 0; // 0 = фавран пас аз ҳазфи аккаунт

function Block({ block, email }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "note":
      return (
        <aside className="pp-note" role="note">
          <strong>{block.title}</strong>
          <p>{block.text}</p>
        </aside>
      );
    case "contact":
      return (
        <p>
          <a className="pp-mail" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      );
    default:
      return null;
  }
}

export default function Privacy() {
  const { language, changeLang } = useLanguage();

  const policy = useMemo(
    () =>
      getPolicy(language, {
        app: APP_NAME,
        email: CONTACT_EMAIL,
        age: MIN_AGE,
        days: RETENTION_DAYS,
      }),
    [language]
  );

  const { ui, glance, sections } = policy;
  const dir = SUPPORTED_LANGUAGES[language]?.dir || "ltr";
  const numLocale = language === "fa" ? "fa-IR" : "en";

  const [active, setActive] = useState(sections[0].id);

  // Сарлавҳаи ҳуҷҷат мувофиқи забон
  useEffect(() => {
    document.title = `${ui.title} — ${APP_NAME}`;
  }, [ui.title]);

  // Scroll-spy: бахши фаъол дар мундариҷа
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="pp" dir={dir} lang={language}>
      <header className="pp-header">
        <div className="pp-topbar">
          <p className="pp-brand">{APP_NAME}</p>

          <div className="pp-lang" role="group" aria-label={ui.language}>
            {Object.values(SUPPORTED_LANGUAGES).map((l) => (
              <button
                key={l.code}
                type="button"
                className={language === l.code ? "is-active" : undefined}
                aria-pressed={language === l.code}
                lang={l.code}
                onClick={() => changeLang(l.code)}
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>

        <h1>{ui.title}</h1>
        <p className="pp-date">{ui.effective}</p>
      </header>

      <section className="pp-glance" aria-label={ui.glanceTitle}>
        <h2>{ui.glanceTitle}</h2>
        <div className="pp-glance-grid">
          {glance.map((g) => (
            <div key={g.title} className="pp-glance-item">
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pp-layout">
        <nav className="pp-toc" aria-label={ui.toc}>
          <p className="pp-toc-title">{ui.toc}</p>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={active === s.id ? "is-active" : undefined}
                  aria-current={active === s.id ? "true" : undefined}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <main className="pp-content">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="pp-section">
              <h2>
                <span className="pp-num">
                  {(i + 1).toLocaleString(numLocale)}.
                </span>{" "}
                {s.title}
              </h2>
              {s.blocks.map((b, j) => (
                <Block key={j} block={b} email={CONTACT_EMAIL} />
              ))}
            </section>
          ))}
        </main>
      </div>

      <footer className="pp-footer">
        © {new Date().getFullYear().toLocaleString(numLocale, { useGrouping: false })}{" "}
        {APP_NAME}
      </footer>
    </div>
  );
}