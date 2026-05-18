export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          AI-Powered Changelog<br />
          <span className="text-[#58a6ff]">From Your Git Commits</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub repo, let AI analyze your commits, and publish polished customer-friendly changelogs — categorized, summarized, and ready to ship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $18/mo
          </a>
          <a
            href="#how-it-works"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-5 text-sm text-[#6e7681]">No credit card required to explore · Cancel anytime</p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Connect GitHub", desc: "OAuth in one click. Select any repo you own or have access to." },
            { step: "02", title: "AI Analyzes Commits", desc: "OpenAI reads your commit history and groups changes by impact and type." },
            { step: "03", title: "Publish Changelog", desc: "Export as Markdown, HTML, or share a public link with your users." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-xs font-bold tracking-widest mb-3">{item.step}</div>
              <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] text-sm mb-8">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-4">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$18<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Billed monthly · Cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repositories",
              "AI changelog generation via OpenAI",
              "GitHub OAuth integration",
              "Markdown & HTML export",
              "Public shareable changelog links",
              "Commit categorization & impact scoring"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started — $18/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which Git providers are supported?",
              a: "Currently GitHub is supported via OAuth. GitLab and Bitbucket integrations are on the roadmap."
            },
            {
              q: "How does the AI generate changelogs?",
              a: "Your commit messages are sent to OpenAI's API, which categorizes them into features, fixes, and improvements, then writes human-readable summaries suitable for end users."
            },
            {
              q: "Is my code or commit data stored?",
              a: "Only commit metadata (messages, timestamps, authors) is processed. Your source code is never accessed or stored."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold text-sm mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-[#6e7681] text-xs">
        © {new Date().getFullYear()} GitChangelog AI · Built for product &amp; engineering teams
      </footer>
    </main>
  );
}
