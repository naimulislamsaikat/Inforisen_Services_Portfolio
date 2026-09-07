import './Advantages.css';
import { FiLock, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';

const advantages = [
  {
    icon: <FiLock />,
    title: 'We Never Ask for Your Password',
    desc: 'You give us your username or profile link. That\'s it. We can\'t access your account. When you buy followers from us, we\'re accessing your public profile. The same profile millions of people can already see. Zero security risk.',
  },
  {
    icon: <FiUsers />,
    title: 'We Use Real Users, Not Bots',
    desc: 'This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect them instantly. That\'s when bans happen.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'We Deliver Gradually',
    desc: 'Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms flag you. We spread out delivery. We gained different users. When you buy from us, we deliver over time. 3,000 followers at a rate of 2-4 days, not 2 hours. This keeps growth looking natural. Social media algorithms see steady growth, not sudden spikes.',
  },
  {
    icon: <FiAward />,
    title: 'Our Track Record',
    desc: '321,879 completed orders. Not a single customer has reported an account ban from our services. That\'s not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect bad activity. We stay within those boundaries.',
  },
];

export default function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="advantages__header">
          <span className="section-badge">Advantages</span>
          <h2 className="section-title">
            Advantages of using <span>our panel services</span>
          </h2>
          <p className="section-desc">
            Find clear and simple explanations to the most common questions about our services,
            payments, orders, and account management.
          </p>
        </div>

        <div className="advantages__grid">
          {advantages.map((a, i) => (
            <div className="advantages__card" key={i}>
              <div className="advantages__card-icon">
                {a.icon}
              </div>
              <div>
                <h3 className="advantages__card-title">{a.title}</h3>
                <p className="advantages__card-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
