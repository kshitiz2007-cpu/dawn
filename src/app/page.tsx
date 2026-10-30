import Link from "next/link";

const navigation = [
  { label: "Dashboard", icon: "◫", href: "/", active: true },
  { label: "Library", icon: "▤", href: "#library" },
  { label: "Mock tests", icon: "◷", href: "#tests" },
  { label: "Classes", icon: "▷", href: "#classes" },
  { label: "Performance", icon: "⌁", href: "#performance" },
];

const modules = [
  { id: "library", icon: "▤", title: "Syllabus-led library", detail: "Find learning material in its exam and topic context." },
  { id: "tests", icon: "◷", title: "Mock tests", detail: "Practice and review when your question bank is ready." },
  { id: "classes", icon: "▷", title: "Live learning", detail: "Classes and recordings appear after your account is enrolled." },
  { id: "performance", icon: "⌁", title: "Performance", detail: "Progress and recommendations use your saved learning history." },
];

function hasSupabaseConfig() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
}

export default function HomePage() {
  const configured = hasSupabaseConfig();

  return (
    <div className="app-frame">
      <aside className="sidebar" aria-label="Student navigation">
        <Link className="brand" href="/" aria-label="Dawn home">
          <span className="brand-mark" aria-hidden="true">d</span>
          <span className="brand-name">dawn</span>
        </Link>
        <p className="nav-label">Learning</p>
        <nav className="nav-list">
          {navigation.map((item) => (
            <Link
              key={item.label}
              className="nav-link"
              href={item.href}
              aria-current={item.active ? "page" : undefined}
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-footer">A calmer way to prepare.<br />Built around the syllabus.</div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="topbar-left"><span className="eyebrow">Student workspace</span><span aria-hidden="true">/</span><span>Overview</span></div>
          <div className="topbar-right">{configured && <Link className="topbar-link" href="/login">Sign in</Link>}<span>Personal learning space</span><span className="avatar" aria-label="Profile not connected">—</span></div>
        </div>

        <div className="content">
          <header className="hero">
            <div>
              <div className="eyebrow">Your preparation, in context</div>
              <h1>Make today<br />count.</h1>
              <p>Your syllabus, practice, and revision will come together here. Connect the institution data source to begin with your own learning plan.</p>
            </div>
            <div className="date-chip">Learning workspace · Setup</div>
          </header>

          <section className="grid" aria-label="Learning workspace overview">
            <article className="panel setup-panel">
              <div>
                <div className="panel-kicker">Workspace setup</div>
                <h2>{configured ? "Data source connected." : "Your learning space is taking shape."}</h2>
                <p>{configured
                  ? "Supabase configuration is present. Authentication and institution data policies are the next foundation step."
                  : "Learning data is not connected yet. Dawn won’t invent progress or show sample scores as if they were yours."}</p>
              </div>
              <div className="setup-status"><span className="status-dot" />{configured ? "Connection settings found" : "Waiting for Supabase configuration"}</div>
            </article>

            <article className="panel note-panel">
              <div>
                <div className="panel-kicker">A note on your data</div>
                <h2>Built around what you actually learn.</h2>
                <p>Practice counts, revision dates, and recommendations will be calculated from saved activity—not placeholder dashboard numbers.</p>
              </div>
              <div className="steps" aria-label="Next setup steps">
                <div className="step"><span className="step-number">1</span>Configure secure sign-in</div>
                <div className="step"><span className="step-number">2</span>Apply database access policies</div>
                <div className="step"><span className="step-number">3</span>Load your syllabus and learning plan</div>
              </div>
            </article>

            {modules.map((module) => (
              <article className="panel lower-panel" id={module.id} key={module.id}>
                <span className="panel-icon" aria-hidden="true">{module.icon}</span>
                <div><h2>{module.title}</h2><p>{module.detail}</p></div>
              </article>
            ))}
          </section>
          <p className="footer-note">Dawn workspace foundation · Student data will remain unavailable until authentication and row-level database access are configured.</p>
        </div>
      </main>

      <nav className="mobile-nav" aria-label="Mobile learning navigation">
        {navigation.slice(0, 5).map((item) => (
          <Link key={item.label} href={item.href} aria-current={item.active ? "page" : undefined}>
            <span aria-hidden="true">{item.icon}</span><span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
