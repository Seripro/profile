import "./App.css";

const assetUrl = (fileName: string) =>
  `${import.meta.env.BASE_URL}${encodeURIComponent(fileName)}`;

function App() {
  const links = [
    {
      label: "X",
      href: "https://x.com/keikeigokeigo",
      icon: <XIcon />,
    },
    {
      label: "GitHub",
      href: "https://github.com/Seripro/",
      icon: <GitHubIcon />,
    },
    {
      label: "Qiita",
      href: "https://qiita.com/keikeigo",
      icon: <img src={assetUrl("qiita-icon.png")} alt="" />,
    },
  ];

  const skills = ["Python", "TypeScript", "React", "Hono", "AWS"];

  return (
    <main className="business-card-shell">
      <section className="business-card" aria-label="デジタル名刺">
        <div className="profile">
          <img
            className="avatar"
            src={assetUrl("アイコン.jpg")}
            alt="芹口京悟のアイコン"
          />

          <div className="identity">
            <h1>芹口 京悟</h1>
            <p className="roman-name">Seriguchi Keigo</p>
          </div>
        </div>

        <div className="section-heading">興味ある技術</div>

        <div className="skills" aria-label="興味がある技術">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>

        <div className="links" aria-label="リンク一覧">
          {links.map((link) => (
            <a
              key={link.label}
              className="link-card"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <span className="link-icon" aria-hidden="true">
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.338-6.996-6.114 6.996H1.75l7.73-8.835L1.818 2.25H7.82l4.882 6.479L18.244 2.25zM17.2 20.445h1.833L5.888 4.15H4.009l13.191 16.295z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.6 2.9 8.5 6.8 9.9.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.8.7.7 1.1 1.6 1.1 2.7 0 3.9-2.4 4.7-4.7 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5 3.9-1.4 6.8-5.3 6.8-9.9C22 6.6 17.5 2 12 2z" />
    </svg>
  );
}
