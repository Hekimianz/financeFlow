import { useState } from "react";
import {
  ArrowDownLeftIcon, ArrowRightIcon, ArrowUpRightIcon, ChartBarIcon,
  CheckIcon, CreditCardIcon, SparklesIcon, WalletIcon,
} from "@heroicons/react/24/outline";
import "./Home.css";

const features = [
  { title: "Every transaction, in view.", label: "Track", description: "Income, expenses, and the little things in between. Give every transaction a place." },
  { title: "A plan for your month.", label: "Plan", description: "Set limits that work for your life. See what you’ve spent and what’s still available." },
  { title: "Insights you can use.", label: "Understand", description: "Turn everyday spending into a clearer picture. Spot patterns and make your next move." },
];
const transactions = [
  { name: "Monthly salary", category: "Income · Oct 01", amount: "+$32,000", income: true },
  { name: "A fridge full of possibilities", category: "Groceries · Oct 03", amount: "−$1,250", income: false },
  { name: "Your favorite coffee spot", category: "Dining · Oct 04", amount: "−$85", income: false },
];
const budgets = [
  { name: "Groceries", spent: "$3,200", limit: "$4,000", percent: 80 },
  { name: "Dining", spent: "$1,100", limit: "$2,000", percent: 55 },
  { name: "Transport", spent: "$900", limit: "$1,500", percent: 60 },
];
const spending = [
  { label: "Groceries", height: 100, amount: "$3,200" },
  { label: "Dining", height: 34, amount: "$1,100" },
  { label: "Transport", height: 28, amount: "$900" },
  { label: "Other", height: 25, amount: "$800" },
];
const steps = [
  { title: "Make it yours.", text: "Create your account and set up your personal workspace." },
  { title: "Start with today.", text: "Record your income and expenses. A coffee, a bill, a payday." },
  { title: "See the bigger picture.", text: "Review your spending and plan a month that works for you." },
];

function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  return (
    <main className="ff-home" id="home">
      <section className="ff-hero ff-container" aria-labelledby="hero-heading">
        <div className="ff-hero-copy">
          <p className="ff-eyebrow"><span className="ff-status-dot" /> PERSONAL FINANCE, MADE CLEAR</p>
          <h1 id="hero-heading">Track Today.<br /><span>Build<br className="ff-desktop-break" /> Tomorrow.</span></h1>
          <p className="ff-hero-description">See where your money goes.<br />Make room for where you want to go.</p>
          <div className="ff-actions">
            <a className="ff-button" href="#features">Find your flow <ArrowUpRightIcon /></a>
            <a className="ff-text-link" href="#how-it-works">How it works <ArrowRightIcon /></a>
          </div>
          <p className="ff-hero-note">Your money, organized at your pace.</p>
        </div>
        <div className="ff-flow-scene" role="img" aria-label="Flowing mint ribbons connect income, spending, and room for tomorrow. Illustrative monthly figures in MXN.">
          <div className="ff-scene-grid" />
          <div className="ff-orbit ff-orbit-one" /><div className="ff-orbit ff-orbit-two" />
          <svg className="ff-ribbons" viewBox="0 0 600 620" fill="none" aria-hidden="true">
            <defs><linearGradient id="home-flow-gradient" x1="80" y1="600" x2="470" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#077D68" stopOpacity="0" /><stop offset=".38" stopColor="#077D68" /><stop offset=".72" stopColor="#5EEAD4" /><stop offset="1" stopColor="#5EEAD4" stopOpacity="0" />
            </linearGradient></defs>
            {[0, 1, 2, 3].map(line => <path key={line} className="ff-flow-line" transform={`translate(${line * 29 - 42}, ${line * 12})`} d="M125 660 V450 C125 355 175 320 280 320 H315 C410 320 438 263 438 180 V-60" stroke="url(#home-flow-gradient)" strokeWidth="18" />)}
            <path className="ff-moving-line" d="M125 660 V450 C125 355 175 320 280 320 H315 C410 320 438 263 438 180 V-60" stroke="#EDF5F6" strokeWidth="2" strokeDasharray="5 1000" />
          </svg>
          <div className="ff-flow-label">LESS GUESSWORK. MORE POSSIBILITY.</div>
          <div className="ff-floating-card ff-income-card">
            <span className="ff-icon-tile"><ArrowDownLeftIcon /></span>
            <div><span className="ff-card-caption">Money coming in</span><strong>+$32,000<span> MXN</span></strong></div>
            <span className="ff-small-check"><CheckIcon /></span>
          </div>
          <div className="ff-logo-orb"><img src="/Logo_Icon.png" alt="" /></div>
          <div className="ff-floating-card ff-balance-card">
            <div className="ff-card-topline"><span>Room for tomorrow</span><SparklesIcon /></div>
            <strong>$13,600<span> MXN</span></strong>
            <div className="ff-balance-track"><span /></div>
            <div className="ff-card-bottomline"><span>Income − expenses</span><span>A little more clarity.</span></div>
          </div>
          <div className="ff-spending-tag"><span className="ff-tag-dot" /> Spending in focus <ArrowUpRightIcon /></div>
          <span className="ff-scene-caption">AN ILLUSTRATION OF A CLEARER MONTH</span>
        </div>
      </section>
      <div className="ff-value-strip"><div className="ff-container ff-value-inner">
        <span><CreditCardIcon /> Track income & expenses</span><i aria-hidden="true" />
        <span><WalletIcon /> Plan monthly budgets</span><i aria-hidden="true" />
        <span><ChartBarIcon /> Understand your spending</span>
      </div></div>

      <section className="ff-container ff-features" id="features" aria-labelledby="features-heading">
        <div className="ff-section-heading">
          <div><p className="ff-eyebrow">01 / A CLEARER PICTURE</p><h2 id="features-heading">Make sense of your money.<br /><span>Make space for your life.</span></h2></div>
          <p>A few simple habits.<br />A clearer financial picture.</p>
        </div>
        <div className="ff-feature-layout">
          <div className="ff-feature-choices" aria-label="Explore FinanceFlow features">
            {features.map((feature, index) => <button key={feature.label} className={`ff-feature-choice ${activeFeature === index ? "is-active" : ""}`} onClick={() => setActiveFeature(index)} aria-pressed={activeFeature === index} aria-controls="feature-example">
              <span className="ff-feature-number">0{index + 1}</span>
              <span><strong>{feature.title}</strong><span className="ff-feature-description">{feature.description}</span></span><ArrowUpRightIcon />
            </button>)}
            <p className="ff-interaction-hint">Choose a feature. Get a little clarity. <ArrowRightIcon /></p>
          </div>
          <div className="ff-example" id="feature-example" aria-live="polite" aria-atomic="true">
            <div className="ff-example-heading"><span><span className="ff-status-dot" /> {features[activeFeature].label} your money</span><span>ILLUSTRATIVE · MXN</span></div>
            {activeFeature === 0 && <div className="ff-example-content" key="track">
              <p className="ff-card-caption">Your month, at a glance</p><h3>Small moments.<br />The whole picture.</h3>
              <div className="ff-transactions">{transactions.map(transaction => <div className="ff-transaction" key={transaction.name}>
                <span className={`ff-icon-tile ${transaction.income ? "" : "ff-blue-tile"}`}>{transaction.income ? <ArrowDownLeftIcon /> : <CreditCardIcon />}</span>
                <div><strong>{transaction.name}</strong><span>{transaction.category}</span></div>
                <b className={transaction.income ? "ff-positive" : "ff-negative"}>{transaction.amount}</b>
              </div>)}</div>
              <div className="ff-example-footnote"><CheckIcon /> Everything has its place.</div>
            </div>}
            {activeFeature === 1 && <div className="ff-example-content" key="plan">
              <p className="ff-card-caption">Your monthly budget</p><h3>More intention.<br />Less end-of-month surprise.</h3>
              <div className="ff-budget-list">{budgets.map(budget => <div key={budget.name}>
                <div className="ff-budget-label"><strong>{budget.name}</strong><span>{budget.spent} <small>/ {budget.limit}</small></span></div>
                <div className="ff-budget-track"><span style={{ width: `${budget.percent}%` }} /></div><p>{budget.percent}% of monthly budget used</p>
              </div>)}</div>
            </div>}
            {activeFeature === 2 && <div className="ff-example-content" key="understand">
              <p className="ff-card-caption">Where your money went</p><h3>Your spending.<br />A new perspective.</h3>
              <div className="ff-chart" role="img" aria-label="Example spending: groceries 3,200 MXN, dining 1,100, transport 900, and other 800.">{spending.map(bar => <div className="ff-chart-column" key={bar.label}>
                <div className="ff-chart-bar" style={{ height: `${bar.height}%` }}><span>{bar.amount}</span></div><span className="ff-chart-label">{bar.label}</span>
              </div>)}</div>
              <div className="ff-example-footnote"><ChartBarIcon /> Notice the patterns. Decide what matters.</div>
            </div>}
          </div>
        </div>
      </section>

      <section className="ff-how-section" id="how-it-works" aria-labelledby="how-heading"><div className="ff-container">
        <div className="ff-section-heading"><div><p className="ff-eyebrow">02 / SMALL STEPS. REAL CLARITY.</p><h2 id="how-heading">Find your rhythm.</h2></div><p>No accounting degree required.<br />Just a place to start.</p></div>
        <ol className="ff-steps">{steps.map((step, index) => <li key={step.title}><div className="ff-step-top"><span>0{index + 1}</span><ArrowRightIcon /></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </div></section>

      <section className="ff-container ff-closing" aria-labelledby="closing-heading">
        <div className="ff-closing-art" aria-hidden="true"><span /><span /><span /></div>
        <div><p className="ff-eyebrow">YOUR NEXT CHAPTER STARTS WITH TODAY.</p><h2 id="closing-heading">A little clarity.<br /><span>A lot of possibility.</span></h2><p>Get organized, gain clarity, and make room for what matters.</p><a className="ff-button" href="#features">Explore your possibilities <ArrowUpRightIcon /></a></div>
      </section>
      <footer className="ff-footer ff-container"><div><img src="/Logo_Icon_Name.png" alt="FinanceFlow" width="160" /><span>Track Today. Build Tomorrow.</span></div><a className="ff-text-link" href="#home">Back to top <ArrowUpRightIcon /></a><p>© {new Date().getFullYear()} FinanceFlow</p></footer>
    </main>
  );
}
export default Home;
