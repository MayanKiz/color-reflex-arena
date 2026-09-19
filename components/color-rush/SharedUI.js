'use client';

import { Instagram } from 'lucide-react';
import settings from '../../lib/color-rush/settings';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button className={`button button-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function TactileButton({ children, className = '', depth = 'deep', ...props }) {
  return (
    <button className={`tactile-button tactile-button-${depth} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Eyebrow({ children, number }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-line" />
      {children}
      {number ? <span className="eyebrow-number">{number}</span> : null}
    </div>
  );
}

export function BrandBar() {
  return (
    <header className="brand-bar">
      <div className="brand-lockup">
        <span className="brand-orb"><span /></span>
        <span>{settings.branding.appName.split(' ')[0]} <strong>{settings.branding.appName.split(' ').slice(1).join(' ')}</strong></span>
      </div>
      <div className="brand-meta"><span className="live-dot" /> {settings.branding.showArenaName ? settings.branding.arenaName : null} {settings.branding.showVersion ? <span className="version-chip">{settings.branding.version}</span> : null}</div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <span>{settings.branding.footerLabel}</span>
      <a href={settings.branding.instagramUrl} target="_blank" rel="noreferrer" aria-label="Open Instagram">
        <Instagram size={17} strokeWidth={1.8} />
      </a>
    </footer>
  );
}

export function StatusPill({ synced = false }) {
  return <span className={`status-pill ${synced ? 'is-synced' : ''}`}><span /> {synced ? 'SYNCED' : 'LOCAL CACHE'}</span>;
}
