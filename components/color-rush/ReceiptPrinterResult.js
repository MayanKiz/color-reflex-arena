'use client';

import { CheckCircle2 } from 'lucide-react';

export default function ReceiptPrinterResult({ result }) {
  return (
    <section className="receipt-result" aria-label="Round result">
      <div className="receipt-machine">
        <div className="receipt-machine-top">
          <div className="receipt-brand">
            <span className="receipt-status-dot" />
            <strong>COLOR RUSH</strong>
          </div>
          <span className="receipt-arena">REFLEX ARENA</span>
        </div>

        <div className="receipt-screen">
          <div className="receipt-status">
            <CheckCircle2 size={17} />
            <span>RUN COMPLETE</span>
          </div>

          <article className="receipt-paper">
            <div className="receipt-paper-head">
              <span>COLOR RUSH</span>
              <strong>RESULT</strong>
            </div>

            <div className="receipt-divider" />

            <div className="receipt-score-label">FINAL SCORE</div>
            <div className="receipt-score">{result.score}</div>
            <div className="receipt-points">POINTS</div>

            <div className="receipt-divider" />

            <div className="receipt-stats">
              <div>
                <strong>{result.hits}</strong>
                <span>HITS</span>
              </div>
              <div>
                <strong>{result.accuracy}%</strong>
                <span>ACCURACY</span>
              </div>
              <div>
                <strong>{result.bestScore}</strong>
                <span>BEST</span>
              </div>
            </div>

            <div className={`receipt-badge ${result.isNewBest ? 'is-best' : ''}`}>
              <span>{result.isNewBest ? '★ NEW PERSONAL BEST' : '✓ NICE RUN'}</span>
            </div>

            <div className="receipt-divider" />

            <div className="receipt-footer">
              <span>THANKS FOR PLAYING</span>
              <span>COLOR RUSH / 2026</span>
            </div>
          </article>
        </div>

        <div className="receipt-slot" />
      </div>
    </section>
  );
}
