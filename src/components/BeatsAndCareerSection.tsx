import { Printer } from 'lucide-react';
import {
  CAREER_TIMELINE,
  JOURNALIST_PROFILE,
  RECRUITER_QUICK_FACTS,
  REPORTING_BEATS,
} from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

export function BeatsAndCareerSection() {
  const handlePrintResume = () => {
    window.print();
  };

  return (
    <>
      {/* Section 2: Beats & Reporting Capabilities */}
      <section id="beats" className="border-b border-rule py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Intro & Documentary Press Desk Photo */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-xs font-medium text-ink-muted">
                  Beats & Methodology · 취재 영역과 강점
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink lg:text-4xl">
                  현장의 속도와 서사의 깊이를 함께 담는 취재 방식
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary lg:text-base">
                  스포츠 현장은 신속한 사실 확인과 깊이 있는 스토리텔링이 동시에 요구됩니다.
                  2021년 5월부터 축구·배구 등 국내외 스포츠 현장을 누비며 다져온 취재 역량을
                  네 가지 영역으로 정리했습니다.
                </p>
              </div>

              <div className="mt-8">
                <EditorialImage
                  src={JOURNALIST_PROFILE.pressDeskImage}
                  alt={JOURNALIST_PROFILE.pressDeskImageAlt}
                  caption="경기 중 전술 흐름 메모와 믹스트존 녹취를 기반으로 기사 완성도를 높입니다."
                  aspectClassName="aspect-[4/3]"
                  className="rounded-xl border border-rule"
                />
              </div>
            </div>

            {/* Right 2x2 Numbered Editorial Beats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {REPORTING_BEATS.map((beat) => (
                <div
                  key={beat.number}
                  className="flex flex-col justify-between rounded-xl border border-rule bg-surface p-6"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-mono text-sm font-medium text-accent tabular-nums">
                        {beat.number}
                      </span>
                      <span className="text-xs text-ink-muted">{beat.subtitle}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-xl font-bold text-ink">{beat.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                      {beat.description}
                    </p>
                  </div>
                  <p className="mt-5 border-t border-rule pt-3.5 text-xs leading-relaxed text-ink-muted">
                    {beat.deliverables}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Career & Recruiter Quick Facts */}
      <section id="career" className="border-b border-rule py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium text-ink-muted">
                Career & Credentials · 경력 및 채용 요약
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink lg:text-4xl">
                경력 사항과 채용 담당자 핵심 요약
              </h2>
            </div>

            <button
              type="button"
              onClick={handlePrintResume}
              className="no-print inline-flex min-h-10 items-center gap-2 self-start rounded-md border border-rule bg-surface px-4 py-2 text-sm font-medium text-ink whitespace-nowrap shrink-0 transition-colors hover:border-ink sm:self-end"
            >
              <Printer className="h-4 w-4 text-ink-muted" aria-hidden="true" />
              <span>포트폴리오 인쇄 / PDF 저장</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Chronological Experience */}
            <div className="space-y-8 lg:col-span-7">
              {CAREER_TIMELINE.map((entry) => (
                <div key={entry.period} className="border-t border-rule pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-bold text-ink">{entry.organization}</h3>
                    <span className="font-mono text-xs text-ink-muted tabular-nums">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">{entry.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{entry.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink">
                    {entry.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right: Recruiter Quick Facts Box */}
            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-rule bg-surface p-6 lg:p-8">
                <h3 className="font-serif text-xl font-bold text-ink">채용 담당자 요약 시트</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                  언론사 경력직 채용, 디지털 미디어 에디터, 스포츠 콘텐츠 팀 검토용 핵심 정보
                </p>

                <dl className="mt-6 divide-y divide-rule text-sm">
                  {RECRUITER_QUICK_FACTS.map((fact) => (
                    <div key={fact.label} className="grid grid-cols-12 gap-3 py-3.5">
                      <dt className="col-span-4 text-xs font-semibold text-ink-muted">
                        {fact.label}
                      </dt>
                      <dd className="col-span-8 text-sm text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="no-print mt-6 border-t border-rule pt-5">
                  <a
                    href="#self-intro"
                    className="inline-flex w-full items-center justify-center rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
                  >
                    자기소개서 읽기
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
