import './globals.css';
import settings from '../lib/color-rush/settings';

export const metadata = {
  title: 'Color Rush — Reflex Arena',
  description: 'A fast, focused colour-matching reflex challenge.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <style dangerouslySetInnerHTML={{ __html: `:root{--settings-bg-image:url(${settings.background.image});--settings-bg-position:${settings.background.position};--settings-bg-size:${settings.background.size};--settings-bg-filter:${settings.background.filter};--settings-bg-overlay:${settings.background.overlayOpacity};--settings-grid-opacity:${settings.background.gridOpacity};--settings-screen-blur:${settings.glass.screenBlur}px;--settings-game-blur:${settings.glass.gameBlur}px;--settings-panel-blur:${settings.glass.panelBlur}px;--settings-arena-blur:${settings.glass.arenaBlur}px;--settings-glass-saturation:${settings.glass.saturation}%;--settings-panel-saturation:${settings.glass.panelSaturation}%;--settings-screen-radius:${settings.mobile.screenRadius}px;}` }} />
        {children}
      </body>
    </html>
  );
}
