import { useState } from 'react';
import {
  FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaLinkedin,
  FaTelegram, FaDiscord, FaSpotify, FaSnapchatGhost, FaGlobe,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiSoundcloud } from 'react-icons/si';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import './Services.css';

const platforms = [
  { id: 'facebook', label: 'Facebook', icon: <FaFacebook />, color: '#1877F2' },
  { id: 'instagram', label: 'Instagram', icon: <FaInstagram />, color: '#E4405F' },
  { id: 'twitter', label: 'X (Twitter)', icon: <FaXTwitter />, color: '#000000' },
  { id: 'youtube', label: 'YouTube', icon: <FaYoutube />, color: '#FF0000' },
  { id: 'tiktok', label: 'TikTok', icon: <FaTiktok />, color: '#010101' },
  { id: 'linkedin', label: 'LinkedIn', icon: <FaLinkedin />, color: '#0A66C2' },
  { id: 'telegram', label: 'Telegram', icon: <FaTelegram />, color: '#26A5E4' },
  { id: 'discord', label: 'Discord', icon: <FaDiscord />, color: '#5865F2' },
  { id: 'spotify', label: 'Spotify', icon: <FaSpotify />, color: '#1DB954' },
  { id: 'soundcloud', label: 'SoundCloud', icon: <SiSoundcloud />, color: '#FF5500' },
  { id: 'snapchat', label: 'Snapchat', icon: <FaSnapchatGhost />, color: '#FFFC00', darkText: true },
  { id: 'website', label: 'Website Traffic', icon: <FaGlobe />, color: '#10B981' },
];

const platformContent = {
  facebook: {
    title: 'Facebook Marketing Services',
    desc: 'Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.',
    features: [
      { label: 'Facebook Post Likes', desc: 'Boost post engagement and credibility with real likes.' },
      { label: 'Facebook Likes', desc: 'Grow your page popularity with high-quality likes.' },
      { label: 'Facebook Comments', desc: 'Increase interaction with engaging comments.' },
      { label: 'Facebook Shares', desc: 'Expand your reach with powerful shares.' },
      { label: 'Facebook Video Views', desc: 'Get more visibility with high-retention video views.' },
      { label: 'Facebook Reactions', desc: 'Make your posts more engaging with diverse reactions.' },
    ],
  },
  instagram: {
    title: 'Instagram Marketing Services',
    desc: 'Accelerate your Instagram growth with real followers, likes, and views that drive authentic engagement and brand awareness.',
    features: [
      { label: 'Instagram Followers', desc: 'Real and active followers for your profile.' },
      { label: 'Instagram Likes', desc: 'Boost post engagement with genuine likes.' },
      { label: 'Instagram Views', desc: 'Get more views on your reels and stories.' },
      { label: 'Instagram Comments', desc: 'Increase organic-looking comment activity.' },
      { label: 'Instagram Saves', desc: 'Drive content saves for better algorithm ranking.' },
      { label: 'Instagram Story Views', desc: 'Increase your story reach and visibility.' },
    ],
  },
  youtube: {
    title: 'YouTube Marketing Services',
    desc: 'Grow your YouTube channel with real subscribers, views, and engagement to rank higher and monetize faster.',
    features: [
      { label: 'YouTube Views', desc: 'High-retention views for your videos.' },
      { label: 'YouTube Subscribers', desc: 'Real subscribers who stay on your channel.' },
      { label: 'YouTube Likes', desc: 'Improve your like-to-view ratio.' },
      { label: 'YouTube Comments', desc: 'Custom comments to boost engagement.' },
      { label: 'YouTube Watch Hours', desc: 'Get monetization-ready watch hours.' },
      { label: 'YouTube Shares', desc: 'Spread your videos across platforms.' },
    ],
  },
  twitter: {
    title: 'X (Twitter) Marketing Services',
    desc: 'Build your presence on X with followers, likes, and retweets that establish your authority.',
    features: [
      { label: 'Twitter Followers', desc: 'Grow your follower count organically.' },
      { label: 'Twitter Likes', desc: 'Boost your tweet engagement.' },
      { label: 'Twitter Retweets', desc: 'Amplify your reach with retweets.' },
      { label: 'Twitter Views', desc: 'Get more eyes on your tweets.' },
      { label: 'Twitter Comments', desc: 'Increase conversation activity.' },
      { label: 'Twitter Bookmarks', desc: 'Get your tweets bookmarked by users.' },
    ],
  },
  tiktok: {
    title: 'TikTok Marketing Services',
    desc: 'Go viral on TikTok with real followers, views, and likes that boost your For You Page visibility.',
    features: [
      { label: 'TikTok Followers', desc: 'Real TikTok followers for your account.' },
      { label: 'TikTok Views', desc: 'High-quality video views.' },
      { label: 'TikTok Likes', desc: 'Genuine likes on your videos.' },
      { label: 'TikTok Comments', desc: 'Engage your audience with comments.' },
      { label: 'TikTok Shares', desc: 'Spread your videos further.' },
      { label: 'TikTok Live Views', desc: 'Boost your TikTok live streams.' },
    ],
  },
  linkedin: {
    title: 'LinkedIn Marketing Services',
    desc: 'Strengthen your professional network and brand authority on LinkedIn with targeted engagement.',
    features: [
      { label: 'LinkedIn Followers', desc: 'Grow your professional following.' },
      { label: 'LinkedIn Post Likes', desc: 'Increase post engagement.' },
      { label: 'LinkedIn Connections', desc: 'Expand your professional network.' },
      { label: 'LinkedIn Views', desc: 'More profile and post views.' },
      { label: 'LinkedIn Comments', desc: 'Professional comments on your posts.' },
      { label: 'LinkedIn Shares', desc: 'Amplify your professional content.' },
    ],
  },
  telegram: {
    title: 'Telegram Marketing Services',
    desc: 'Grow your Telegram channel or group with real members and views.',
    features: [
      { label: 'Telegram Members', desc: 'Real members for your channel.' },
      { label: 'Telegram Views', desc: 'Boost post views on your channel.' },
      { label: 'Telegram Reactions', desc: 'Add reactions to your messages.' },
      { label: 'Telegram Subscribers', desc: 'Grow your subscriber base.' },
      { label: 'Telegram Forwards', desc: 'Get your posts forwarded.' },
      { label: 'Telegram Votes', desc: 'Win polls with targeted votes.' },
    ],
  },
  discord: {
    title: 'Discord Marketing Services',
    desc: 'Build your Discord community with real members and grow your server fast.',
    features: [
      { label: 'Discord Members', desc: 'Real members for your server.' },
      { label: 'Discord Boosts', desc: 'Boost your server for premium perks.' },
      { label: 'Discord Online Members', desc: 'Appear active with online members.' },
      { label: 'Discord Followers', desc: 'Grow your Discord followers.' },
      { label: 'Discord Emoji Reactions', desc: 'Add reactions to your messages.' },
      { label: 'Discord Votes', desc: 'Win votes on top.gg.' },
    ],
  },
  spotify: {
    title: 'Spotify Marketing Services',
    desc: 'Grow your Spotify presence with real streams, followers, and playlist placements.',
    features: [
      { label: 'Spotify Streams', desc: 'Real streams for your music.' },
      { label: 'Spotify Followers', desc: 'Grow your artist followers.' },
      { label: 'Spotify Playlist Followers', desc: 'Followers for your playlists.' },
      { label: 'Spotify Monthly Listeners', desc: 'Boost your monthly listener count.' },
      { label: 'Spotify Saves', desc: 'Get your music saved to libraries.' },
      { label: 'Spotify Plays', desc: 'Increase your play count.' },
    ],
  },
  soundcloud: {
    title: 'SoundCloud Marketing Services',
    desc: 'Amplify your SoundCloud presence with plays, followers, and likes.',
    features: [
      { label: 'SoundCloud Plays', desc: 'Real plays for your tracks.' },
      { label: 'SoundCloud Followers', desc: 'Genuine followers for your account.' },
      { label: 'SoundCloud Likes', desc: 'Likes on your tracks.' },
      { label: 'SoundCloud Reposts', desc: 'Reposts to expand your reach.' },
      { label: 'SoundCloud Comments', desc: 'Comments on your tracks.' },
      { label: 'SoundCloud Downloads', desc: 'Boost your download count.' },
    ],
  },
  snapchat: {
    title: 'Snapchat Marketing Services',
    desc: 'Grow your Snapchat account and reach more users on the platform.',
    features: [
      { label: 'Snapchat Followers', desc: 'Real Snapchat followers.' },
      { label: 'Snapchat Story Views', desc: 'Views on your Snapchat stories.' },
      { label: 'Snapchat Subscribers', desc: 'Subscribers to your public account.' },
      { label: 'Snapchat Views', desc: 'Spotlight views for your snaps.' },
      { label: 'Snapchat Shares', desc: 'Shares on your public content.' },
      { label: 'Snapchat Saves', desc: 'Get your snaps saved.' },
    ],
  },
  website: {
    title: 'Website Traffic Services',
    desc: 'Drive real, targeted traffic to your website and boost your online presence.',
    features: [
      { label: 'Direct Traffic', desc: 'Real visitors directly to your site.' },
      { label: 'Organic Traffic', desc: 'Search engine sourced traffic.' },
      { label: 'Social Traffic', desc: 'Traffic from social platforms.' },
      { label: 'Referral Traffic', desc: 'Traffic from referral sites.' },
      { label: 'Targeted Traffic', desc: 'Country-specific targeted visitors.' },
      { label: 'Bounce Rate Reduction', desc: 'Improve time-on-site metrics.' },
    ],
  },
};

export default function Services() {
  const [active, setActive] = useState('facebook');
  const content = platformContent[active];
  const activePlatform = platforms.find(p => p.id === active);

  return (
    <section className="services" id="services">
      <div className="container">
        {/* Header */}
        <div className="services__header">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">
            Powerful <span>SMM Services</span> for Fast Growth
          </h2>
          <p className="section-desc">
            Explore our comprehensive range of social media marketing services designed to help you
            grow your presence across all major platforms. From Facebook to TikTok, we've got you covered.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="services__tabs">
          {platforms.map(p => (
            <button
              key={p.id}
              className={`services__tab ${active === p.id ? 'services__tab--active' : ''}`}
              onClick={() => setActive(p.id)}
            >
              <span className="services__tab-icon" style={{ color: active === p.id ? 'white' : p.color }}>
                {p.icon}
              </span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="services__panel" key={active}>
          <div className="services__panel-info">
            <div className="services__panel-badge">
              <span style={{ fontSize: 20, color: activePlatform?.color }}>{activePlatform?.icon}</span>
              {activePlatform?.label} Services
            </div>
            <h3 className="services__panel-title">{content.title}</h3>
            <p className="services__panel-desc">{content.desc}</p>
            <a href="#signup" className="services__panel-cta">
              View {activePlatform?.label} Services <FiArrowRight />
            </a>
            <div className="services__panel-stats">
              <div className="services__stat">
                <span className="services__stat-value">6+</span>
                <span className="services__stat-label">Services</span>
              </div>
              <div className="services__stat">
                <span className="services__stat-value">Fast</span>
                <span className="services__stat-label">Delivery</span>
              </div>
              <div className="services__stat">
                <span className="services__stat-value">24/7</span>
                <span className="services__stat-label">Support</span>
              </div>
            </div>
          </div>

          <div className="services__panel-features">
            {content.features.map((f, i) => (
              <div className="services__feature" key={i}>
                <div className="services__feature-check">
                  <FiCheck />
                </div>
                <div>
                  <div className="services__feature-label">{f.label}</div>
                  <div className="services__feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
