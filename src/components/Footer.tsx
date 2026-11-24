import { ArrowUpRight } from 'lucide-react';
import { JOURNALIST_PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-rule bg-paper py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
        <div>
          <p className="font-serif text-base font-bold text-ink">
            김영훈 기자 · <span className="font-mono text-sm font-medium tabular-nums">{JOURNALIST_PROFILE.careerStart}</span>
          </p>
          <p className="mt-1 text-xs text-ink-muted">
            © 2026 {JOURNALIST_PROFILE.englishName}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-ink-secondary">
          <a href="#section-superstark" className="transition-colors hover:text-ink">
            [김영훈의 슈퍼스타K]
          </a>
          <a href="#section-mkfocus" className="transition-colors hover:text-ink">
            [MK초점]
          </a>
          <a href="#section-mkinterview" className="transition-colors hover:text-ink">
            [MK인터뷰]
          </a>
          <a href="#sport-football" className="transition-colors hover:text-ink">
            축구
          </a>
          <a href="#sport-volleyball" className="transition-colors hover:text-ink">
            배구
          </a>
          <a href="#sport-other" className="transition-colors hover:text-ink">
            기타
          </a>
          <a href="#self-intro" className="transition-colors hover:text-ink">
            자기소개서
          </a>
          <a
            href={JOURNALIST_PROFILE.naverJournalistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-ink transition-colors hover:text-accent"
          >
            <span>네이버 기자 홈 (410/80831)</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
