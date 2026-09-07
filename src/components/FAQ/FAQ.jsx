import { useState } from 'react';
import './FAQ.css';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: 'Is buying followers legal in Bangladesh?',
    a: "Yes, buying followers is not illegal in Bangladesh. It's considered a marketing strategy to improve social proof. Just make sure you don't violate any platform-specific terms of service while doing so.",
  },
  {
    q: 'What if service is not delivered?',
    a: "If your service is not delivered within the estimated time, our support team will investigate and either complete the order or issue a full refund. We guarantee delivery or your money back.",
  },
  {
    q: 'How long does delivery take?',
    a: "Delivery time varies by service. Most orders start within minutes and complete within 1-72 hours depending on the quantity and service type. Each service listing shows estimated delivery time.",
  },
  {
    q: 'Is Drip feed safe?',
    a: "Yes! Drip feed is actually the safest delivery method. Instead of delivering all followers/likes at once, it spreads delivery over days or weeks to mimic natural organic growth — which platforms prefer.",
  },
  {
    q: 'Can I order daily?',
    a: "Absolutely. You can place orders every day. There's no limit on how frequently you order. Many of our customers run daily campaigns for consistent growth across their social media profiles.",
  },
  {
    q: 'Can agencies resell services?',
    a: "Yes! We actively support agency resellers. Our API allows you to integrate our services into your own platform. Many digital marketing agencies in Bangladesh use us as their backend provider.",
  },
  {
    q: 'Will engagement drop?',
    a: "With our real-user services, minimal drop is expected. We offer a 30-day refill guarantee on most services. If you notice a significant drop within that period, simply contact support for a free refill.",
  },
  {
    q: 'Which platform is best for business in BD?',
    a: "Facebook is still the #1 platform for business in Bangladesh due to its massive user base. However, Instagram and TikTok are growing rapidly. We recommend starting with Facebook, then expanding to Instagram.",
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className={`faq__item ${open ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <FiChevronDown className="faq__chevron" />
      </button>
      <div className="faq__answer">
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const half = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__header">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-desc">
            Find clear and simple explanations to the most common questions about our services,
            payments, orders, and account management.
          </p>
        </div>

        <div className="faq__grid">
          <div className="faq__col">
            {left.map((f, i) => <FAQItem key={i} {...f} index={i} />)}
          </div>
          <div className="faq__col">
            {right.map((f, i) => <FAQItem key={i} {...f} index={i + 1} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
