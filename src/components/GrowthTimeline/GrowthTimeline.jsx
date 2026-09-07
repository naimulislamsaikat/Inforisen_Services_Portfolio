import './GrowthTimeline.css';
import { FiCheckCircle, FiZap, FiDollarSign } from 'react-icons/fi';

const phases = [
  {
    period: 'Weeks 1-2',
    items: [
      {
        icon: <FiCheckCircle />,
        title: 'What You Do',
        body: 'Use SMM services to kick-start followers and basic engagement.',
      },
      {
        icon: <FiZap />,
        title: 'Why It Works',
        body: 'Creates baseline credibility and improves first impression.',
      },
      {
        icon: <FiDollarSign />,
        title: 'Estimated Cost/Time',
        body: '৳2,000-5,000',
      },
    ],
  },
  {
    period: 'Weeks 3-4',
    items: [
      {
        icon: <FiCheckCircle />,
        title: 'What You Do',
        body: "Don't stop creating content that actually looks good.",
      },
      {
        icon: <FiZap />,
        title: 'Why It Works',
        body: 'Larger follower base increases organic engagement.',
      },
      {
        icon: <FiDollarSign />,
        title: 'Estimated Cost/Time',
        body: 'Mostly content effort',
      },
    ],
  },
  {
    period: 'Months 2-3',
    items: [
      {
        icon: <FiCheckCircle />,
        title: 'What You Do',
        body: 'Continue content + light support if needed.',
      },
      {
        icon: <FiZap />,
        title: 'Why It Works',
        body: 'Focus more, better algorithm rewards.',
      },
      {
        icon: <FiDollarSign />,
        title: 'Estimated Cost/Time',
        body: 'Reduced SMM usage',
      },
    ],
  },
  {
    period: 'Months 3-6',
    items: [
      {
        icon: <FiCheckCircle />,
        title: 'What You Do',
        body: 'Focus mainly on organic growth.',
      },
      {
        icon: <FiZap />,
        title: 'Why It Works',
        body: 'Strong engagement builds profile authority naturally.',
      },
      {
        icon: <FiDollarSign />,
        title: 'Estimated Cost/Time',
        body: 'Minimal or no SMM needed',
      },
    ],
  },
];

export default function GrowthTimeline() {
  return (
    <section className="growth" id="growth">
      <div className="container">
        <div className="growth__header">
          <span className="section-badge">Growth</span>
          <h2 className="section-title">
            Growing on Social Media in <span>Bangladesh</span>
          </h2>
          <p className="section-desc">
            The smartest way to grow is by combining SMM support with real content. You use SMM as
            the beginning for momentum, then let organic growth take over.
          </p>
        </div>

        <div className="growth__grid">
          {phases.map((phase, pi) => (
            <div className="growth__col" key={pi}>
              <div className="growth__col-header">
                <span>{phase.period}</span>
              </div>
              <div className="growth__col-body">
                {phase.items.map((item, ii) => (
                  <div className="growth__item" key={ii}>
                    <div className="growth__item-icon">{item.icon}</div>
                    <div>
                      <div className="growth__item-title">{item.title}</div>
                      <div className="growth__item-body">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
