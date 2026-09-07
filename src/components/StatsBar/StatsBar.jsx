import { useEffect, useRef, useState } from 'react';
import { FaBoxOpen, FaLayerGroup, FaUsers, FaTrophy } from 'react-icons/fa';
import './StatsBar.css';

const stats = [
  { icon: <FaBoxOpen />, value: 321879, label: 'Orders Processed', suffix: '' },
  { icon: <FaLayerGroup />, value: 6245, label: 'Available Services', suffix: '' },
  { icon: <FaUsers />, value: 8552, label: 'Registered Users', suffix: '' },
  { icon: <FaTrophy />, value: 1, label: 'Regional Rank', suffix: '#', prefix: '#' },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ icon, value, label, prefix }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-card__icon">{icon}</div>
      <div className="stat-card__number">
        {prefix && <span className="stat-card__prefix">{prefix}</span>}
        {prefix ? '' : count.toLocaleString()}
        {prefix ? count : ''}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-bar__grid">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
