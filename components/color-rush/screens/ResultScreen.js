'use client';

import { ArrowLeft, RotateCcw, Share2, Trophy } from 'lucide-react';
import LeaderboardPreview from '../LeaderboardPreview';
import ReceiptPrinterResult from '../ReceiptPrinterResult';
import { Button, Eyebrow } from '../SharedUI';

export default function ResultScreen({ result, profiles, onViewLeaderboard, onSelectProfile, onPlayAgain, onBack, onShare, shareFeedback }) {
  return (
    <section className="screen-card result-screen receipt-result-screen">
      <Eyebrow number="04">ROUND COMPLETE</Eyebrow>

      <ReceiptPrinterResult result={result} />

      <LeaderboardPreview profiles={profiles} onViewAll={onViewLeaderboard} onSelect={onSelectProfile} />

      <div className="result-actions">
        <Button onClick={onPlayAgain}>Play again <RotateCcw size={16} /></Button>
        <Button variant="secondary" onClick={onViewLeaderboard}><Trophy size={15} /> Leaderboard</Button>
      </div>

      <div className="result-share-row">
        <Button variant="secondary" onClick={onShare}><Share2 size={15} /> Share result</Button>
      </div>

      {shareFeedback ? <p className="share-feedback">{shareFeedback}</p> : null}

      <button className="quiet-button" type="button" onClick={onBack}>
        <ArrowLeft size={14} /> Back to setup
      </button>
    </section>
  );
}
