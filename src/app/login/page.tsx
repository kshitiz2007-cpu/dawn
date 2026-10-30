import Link from "next/link";
import { signInWithPassword } from "./actions";

const messages: Record<string, string> = {
  credentials: "Check your email and password, then try again.",
  setup: "Sign-in is not configured yet. Ask your institution administrator for help.",
  callback: "We could not complete sign-in. Please try again.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="login-page">
      <Link className="brand login-brand" href="/">
        <span className="brand-mark" aria-hidden="true">d</span>
        <span className="brand-name">dawn</span>
      </Link>
      <section className="login-card" aria-labelledby="login-title">
        <div className="eyebrow">Student workspace</div>
        <h1 id="login-title">Welcome back.</h1>
        <p>Sign in to continue your learning.</p>
        {error && messages[error] && <p className="form-error" role="alert">{messages[error]}</p>}
        <form action={signInWithPassword} className="login-form">
          <label htmlFor="email">Email address</label>
          <input autoComplete="email" id="email" name="email" required type="email" />
          <label htmlFor="password">Password</label>
          <input autoComplete="current-password" id="password" minLength={8} maxLength={128} name="password" required type="password" />
          <button type="submit">Sign in <span aria-hidden="true">↗</span></button>
        </form>
        <Link className="back-link" href="/">Back to Dawn</Link>
      </section>
    </main>
  );
}
