import "./App.css";

const assetUrl = (fileName: string) =>
  `${import.meta.env.BASE_URL}${encodeURIComponent(fileName)}`;

const qrPageUrl = `${import.meta.env.BASE_URL}qr/`;

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
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%E4%BA%AC%E6%82%9F-%E8%8A%B9%E5%8F%A3-4a54a13a4/",
      icon: <LinkedInIcon />,
    },
    {
      label: "Qiita",
      href: "https://qiita.com/keikeigo",
      icon: <img src={assetUrl("qiita-icon.png")} alt="" />,
    },
  ];

  const skills = ["Python", "TypeScript", "React", "Hono", "AWS"];
  const hobbies = ["サッカー", "サッカーゲーム", "Marvel", "YouTube"];
  const favoriteFoods = ["ナン（特にチーズナン）", "うどん", "寿司"];

  return (
    <main className="business-card-shell">
      <section className="business-card" aria-label="デジタル名刺">
        <a className="qr-button" href={qrPageUrl} aria-label="QRコードを表示">
          <QrIcon />
        </a>

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

        <div className="section-heading">趣味</div>

        <div className="skills" aria-label="趣味">
          {hobbies.map((hobby) => (
            <span key={hobby} className="skill-pill">
              {hobby}
            </span>
          ))}
        </div>

        <div className="section-heading">好きな食べ物</div>

        <div className="skills" aria-label="好きな食べ物">
          {favoriteFoods.map((food) => (
            <span key={food} className="skill-pill">
              {food}
            </span>
          ))}
        </div>

        <a
          className="portfolio-link"
          href="https://portfolio-one-navy-86.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Portfolioを見る <span aria-hidden="true">↗</span>
        </a>

        <div className="section-heading">Contact</div>
        <p className="email-address">
          <MailIcon />
          <span>2147keigo@gmail.com</span>
        </p>

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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

function QrIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 3h7v7H3V3Zm2 2v3h3V5H5Zm9-2h7v7h-7V3Zm2 2v3h3V5h-3ZM3 14h7v7H3v-7Zm2 2v3h3v-3H5Zm9-2h2v2h-2v-2Zm3 0h4v4h-2v-2h-2v-2Zm-3 3h2v4h-2v-4Zm3 2h2v2h-2v-2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3.75 5.25h16.5A1.5 1.5 0 0 1 21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5Zm.24 1.5L12 12.18l8.01-5.43H3.99ZM20.25 8.18l-7.83 5.3a.75.75 0 0 1-.84 0l-7.83-5.3v9.07h16.5V8.18Z" />
    </svg>
  );
}
