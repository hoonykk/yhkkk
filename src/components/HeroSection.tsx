import { ArrowUpRight } from 'lucide-react';
import { JOURNALIST_PROFILE, PROOF_METRICS } from '../data/portfolioData';

export function HeroSection() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-[1200px] px-6 pb-12 pt-10 lg:px-8 lg:pb-16 lg:pt-16">
        {/* Centered Editorial Profile Hero */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h1 className="sr-only">김영훈 기자 포트폴리오</h1>

          <div className="w-48 sm:w-56">
            <figure className="overflow-hidden rounded-2xl border border-rule bg-surface-muted aspect-[4/5]">
              <img
                src={JOURNALIST_PROFILE.portraitImage}
                alt="김영훈 기자 프로필 사진"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </div>

          <p className="mt-7 max-w-xl text-center text-base leading-[1.85] text-ink-secondary">
            경향신문 스포츠경향 온라인뉴스팀 해외축구 담당 기자, 스포츠투데이 스포츠부, MK스포츠
            스포츠부를 거치고 있습니다. 축구·배구를 중심으로 국내 스포츠 현장을 누빕니다.
            스포츠만이 담을 수 있는 서사를 좋아합니다. 그 서사를 좇아갑니다.
          </p>

          <div className="mt-7 flex flex-col items-center gap-4 pt-1">
            <a
              href={JOURNALIST_PROFILE.naverJournalistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span>기자 홈 바로가기</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="flex flex-col items-center gap-1.5 text-sm text-ink-secondary">
              <a
                href={`mailto:${JOURNALIST_PROFILE.contactEmail}`}
                className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-accent"
              >
                <span className="font-mono text-xs text-ink-muted">e-mail</span>
                <span aria-hidden="true" className="text-rule">|</span>
                <span className="font-mono text-sm text-ink">
                  {JOURNALIST_PROFILE.contactEmail}
                </span>
              </a>
              <a
                href={`tel:${JOURNALIST_PROFILE.contactPhone}`}
                className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-accent"
              >
                <span className="font-mono text-xs text-ink-muted">phone</span>
                <span aria-hidden="true" className="text-rule">|</span>
                <span className="font-mono text-sm tabular-nums text-ink">
                  {JOURNALIST_PROFILE.contactPhone}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Full-Width 3-Column Quantitative Proof Strip Below Hero */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-rule pt-8 text-center sm:grid-cols-3 lg:mt-14 lg:gap-8">
          {PROOF_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="font-mono text-2xl font-medium tracking-tight text-ink tabular-nums lg:text-[1.75rem]">
                {metric.value}
              </p>
              <p className="text-sm font-semibold text-ink">{metric.label}</p>
              <p className="text-xs leading-relaxed text-ink-muted">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
