import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import {
  FOOTBALL_ARTICLES,
  MK_FOCUS_ARTICLES,
  MK_INTERVIEW_ARTICLES,
  NAVER_JOURNALIST_URL,
  OTHER_SPORT_ARTICLES,
  PortfolioArticle,
  SUPERSTAR_K_ARTICLES,
  VOLLEYBALL_ARTICLES,
} from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface WorkArchiveSectionProps {
  onSelectArticle: (article: PortfolioArticle) => void;
}

function matchesQuery(article: PortfolioArticle, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    article.title.toLowerCase().includes(q) ||
    article.summary.toLowerCase().includes(q) ||
    article.beat.toLowerCase().includes(q) ||
    article.seriesTag.toLowerCase().includes(q) ||
    article.sport.toLowerCase().includes(q)
  );
}

interface SportSectionBlockProps {
  id: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  articles: PortfolioArticle[];
  onSelectArticle: (article: PortfolioArticle) => void;
}

function SportSectionBlock({
  id,
  indexLabel,
  title,
  subtitle,
  articles,
  onSelectArticle,
}: SportSectionBlockProps) {
  return (
    <div id={id} className="scroll-mt-24 border-t border-rule pt-10 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-2.5">
            <span className="font-mono text-xs font-medium text-accent tabular-nums">
              {indexLabel}
            </span>
            <h3 className="font-serif text-2xl font-bold tracking-tight text-ink">{title}</h3>
          </div>
          <p className="mt-1.5 text-sm text-ink-secondary">{subtitle}</p>
        </div>
        <span className="font-mono text-xs text-ink-muted tabular-nums">{articles.length}편</span>
      </div>

      {articles.length === 0 ? (
        <p className="mt-6 rounded-xl border border-rule bg-surface p-6 text-sm text-ink-muted">
          검색어와 일치하는 {title} 기사가 없습니다.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-rule bg-surface transition-colors duration-150 hover:border-ink/40"
            >
              <div className="overflow-hidden border-b border-rule">
                <EditorialImage
                  src={article.image}
                  alt={article.imageAlt}
                  aspectClassName="aspect-[16/10]"
                  className="group-hover:[&_img]:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
                    <span className="font-semibold text-accent">{article.seriesTag}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.beat}</span>
                    <span aria-hidden="true">·</span>
                    <time className="font-mono tabular-nums">{article.date}</time>
                  </div>
                  <h4 className="mt-2.5 font-serif text-base font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                    {article.title}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-secondary">
                    {article.summary}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-rule/70 pt-3 text-xs text-ink-muted">
                  <span>{article.location ?? article.sport}</span>
                  <span className="inline-flex items-center gap-1 font-medium text-ink group-hover:text-accent">
                    원문·요약
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export function WorkArchiveSection({ onSelectArticle }: WorkArchiveSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const trimmedQuery = searchQuery.trim();

  const superstarKList = useMemo(
    () => SUPERSTAR_K_ARTICLES.filter((a) => matchesQuery(a, trimmedQuery)),
    [trimmedQuery]
  );
  const mkFocusList = useMemo(
    () => MK_FOCUS_ARTICLES.filter((a) => matchesQuery(a, trimmedQuery)),
    [trimmedQuery]
  );
  const mkInterviewList = useMemo(
    () => MK_INTERVIEW_ARTICLES.filter((a) => matchesQuery(a, trimmedQuery)),
    [trimmedQuery]
  );
  const footballList = useMemo(
    () => FOOTBALL_ARTICLES.filter((a) => matchesQuery(a, trimmedQuery)),
    [trimmedQuery]
  );
  const volleyballList = useMemo(
    () => VOLLEYBALL_ARTICLES.filter((a) => matchesQuery(a, trimmedQuery)),
    [trimmedQuery]
  );
  const otherList = useMemo(
    () => OTHER_SPORT_ARTICLES.filter((a) => matchesQuery(a, trimmedQuery)),
    [trimmedQuery]
  );

  const leadSuperstarK = superstarKList[0];
  const restSuperstarK = superstarKList.slice(1);

  const leadInterviews = mkInterviewList.slice(0, 2);
  const restInterviews = mkInterviewList.slice(2);

  return (
    <div id="works">
      {/* Quick Archive Navigation & Search Strip */}
      <div className="border-b border-rule bg-surface">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 px-6 py-4 lg:flex-row lg:items-center lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-ink-secondary">
            <a
              href="#section-superstark"
              className="font-semibold text-accent whitespace-nowrap hover:underline"
            >
              [김영훈의 슈퍼스타K]
            </a>
            <span aria-hidden="true" className="text-rule">/</span>
            <a href="#section-mkfocus" className="whitespace-nowrap hover:text-ink">
              [MK초점]
            </a>
            <span aria-hidden="true" className="text-rule">/</span>
            <a href="#section-mkinterview" className="whitespace-nowrap hover:text-ink">
              [MK인터뷰]
            </a>
            <span aria-hidden="true" className="text-rule">/</span>
            <a href="#sport-football" className="whitespace-nowrap hover:text-ink">
              축구
            </a>
            <span aria-hidden="true" className="text-rule">/</span>
            <a href="#sport-volleyball" className="whitespace-nowrap hover:text-ink">
              배구
            </a>
            <span aria-hidden="true" className="text-rule">/</span>
            <a href="#sport-other" className="whitespace-nowrap hover:text-ink">
              기타
            </a>
          </div>

          <div className="relative w-full lg:w-72">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="기사 제목·선수·종목 검색"
              aria-label="대표 기사 아카이브 검색"
              className="h-9 w-full rounded-md border border-rule bg-paper pl-9 pr-8 text-xs text-ink placeholder:text-ink-muted focus:border-ink focus:bg-surface focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="검색어 지우기"
                className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-ink-muted hover:text-ink"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 1: [김영훈의 슈퍼스타K] — High-Contrast Signature Spotlight */}
      <section
        id="section-superstark"
        className="scroll-mt-16 border-b border-ink bg-ink py-16 text-white lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-wide text-[#F2743B]">
                SIGNATURE COLUMN · 대표 기명 연재
              </p>
              <h2 className="mt-2.5 font-serif text-3xl font-bold tracking-tight text-white lg:text-[2.65rem]">
                [김영훈의 슈퍼스타K]
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75 lg:text-base">
                경기장 안팎의 인물과 리그의 핵심 이슈를 기자의 이름을 걸고 깊이 있게 짚어내는
                대표 기명 칼럼 시리즈입니다.
              </p>
            </div>

            <a
              href={NAVER_JOURNALIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 self-start rounded-md bg-[#E05D24] px-4 py-2 text-xs font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#C64D19] lg:self-end"
            >
              <span>네이버 기자 홈에서 전체 연재 보기</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {superstarKList.length === 0 ? (
            <p className="mt-8 rounded-xl border border-white/15 bg-white/5 p-8 text-center text-sm text-white/70">
              검색어와 일치하는 [김영훈의 슈퍼스타K] 기사가 없습니다.
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
              {/* Featured Lead Column with Actual Article Photo */}
              {leadSuperstarK && (
                <article
                  onClick={() => onSelectArticle(leadSuperstarK)}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#1B1D22] transition-colors duration-200 hover:border-[#F2743B]/60 lg:col-span-6"
                >
                  <div className="overflow-hidden border-b border-white/10">
                    <EditorialImage
                      src={leadSuperstarK.image}
                      alt={leadSuperstarK.imageAlt}
                      aspectClassName="aspect-[16/10]"
                      className="group-hover:[&_img]:scale-[1.02]"
                      priority
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/65">
                        <span className="font-semibold text-[#F2743B]">대표 칼럼</span>
                        <span aria-hidden="true">·</span>
                        <span>{leadSuperstarK.beat}</span>
                        <span aria-hidden="true">·</span>
                        <time className="font-mono tabular-nums">{leadSuperstarK.date}</time>
                      </div>
                      <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#F89567] lg:text-2xl">
                        {leadSuperstarK.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/75">
                        {leadSuperstarK.summary}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
                      <span>{leadSuperstarK.seriesTag}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-white group-hover:text-[#F89567]">
                        원문 및 취재 노트
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* Numbered Editorial Column List with Original Article Thumbnails */}
              <div className="flex flex-col justify-between divide-y divide-white/12 lg:col-span-6">
                {restSuperstarK.map((article, idx) => (
                  <article
                    key={article.id}
                    onClick={() => onSelectArticle(article)}
                    className="group flex cursor-pointer items-center gap-4 py-4 first:pt-0 last:pb-0 sm:gap-5"
                  >
                    <div className="w-28 shrink-0 overflow-hidden rounded-lg border border-white/15 sm:w-36">
                      <EditorialImage
                        src={article.image}
                        alt={article.imageAlt}
                        aspectClassName="aspect-[4/3]"
                        className="group-hover:[&_img]:scale-[1.04]"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
                        <span className="font-mono font-medium text-[#F2743B] tabular-nums">
                          {String(idx + 2).padStart(2, '0')}.
                        </span>
                        <span>{article.beat}</span>
                        <span aria-hidden="true">·</span>
                        <time className="font-mono tabular-nums">{article.date}</time>
                      </div>
                      <h3 className="mt-1.5 font-serif text-base font-bold leading-snug text-white transition-colors group-hover:text-[#F89567] sm:text-[1.0625rem]">
                        {article.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/65">
                        {article.summary}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: [MK초점] — In-Depth Analysis & Policy Focus */}
      <section
        id="section-mkfocus"
        className="scroll-mt-16 border-b border-rule bg-paper py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 border-b border-rule pb-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-ink-muted">
                02. In-Depth Focus · 심층 기획 및 현안 분석
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink lg:text-4xl">
                [MK초점]
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary lg:text-base">
                경기 결과 너머의 제도·행정·전술·스포츠 인권 의제를 입체적으로 짚어낸 기획 리포트
                모음입니다.
              </p>
            </div>
            <span className="font-mono text-xs text-ink-muted tabular-nums">
              {mkFocusList.length}편
            </span>
          </div>

          {mkFocusList.length === 0 ? (
            <p className="mt-8 rounded-xl border border-rule bg-surface p-8 text-center text-sm text-ink-muted">
              검색어와 일치하는 [MK초점] 기사가 없습니다.
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {mkFocusList.map((article) => (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-rule bg-surface transition-colors duration-150 hover:border-ink/40"
                >
                  <div className="overflow-hidden border-b border-rule">
                    <EditorialImage
                      src={article.image}
                      alt={article.imageAlt}
                      aspectClassName="aspect-[16/10]"
                      className="group-hover:[&_img]:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 lg:p-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
                        <span className="font-semibold text-accent">{article.seriesTag}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.beat}</span>
                        <span aria-hidden="true">·</span>
                        <time className="font-mono tabular-nums">{article.date}</time>
                      </div>
                      <h3 className="mt-2.5 font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                        {article.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-secondary">
                        {article.summary}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-rule pt-3.5 text-xs text-ink-muted">
                      <span>{article.sport}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-ink group-hover:text-accent">
                        원문·요약
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: [MK인터뷰] — Voices from the Pitch & Mixed Zone */}
      <section
        id="section-mkinterview"
        className="scroll-mt-16 border-b border-rule bg-surface py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 border-b border-rule pb-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-ink-muted">
                03. Exclusive & Mixed Zone · 인물 인터뷰
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink lg:text-4xl">
                [MK인터뷰]
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary lg:text-base">
                대표팀과 리그 현장에서 만난 선수·감독의 진솔한 육성과 서사를 담아낸 대표 인터뷰
                아카이브입니다.
              </p>
            </div>
            <span className="font-mono text-xs text-ink-muted tabular-nums">
              {mkInterviewList.length}편
            </span>
          </div>

          {mkInterviewList.length === 0 ? (
            <p className="mt-8 rounded-xl border border-rule bg-paper p-8 text-center text-sm text-ink-muted">
              검색어와 일치하는 [MK인터뷰] 기사가 없습니다.
            </p>
          ) : (
            <div className="mt-10 space-y-8">
              {/* Top 2 Visual Feature Interviews */}
              {leadInterviews.length > 0 && (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {leadInterviews.map((article) => (
                    <article
                      key={article.id}
                      onClick={() => onSelectArticle(article)}
                      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-rule bg-paper transition-colors duration-200 hover:border-ink/40"
                    >
                      <div className="overflow-hidden border-b border-rule">
                        <EditorialImage
                          src={article.image}
                          alt={article.imageAlt}
                          aspectClassName="aspect-[16/10]"
                          className="group-hover:[&_img]:scale-[1.02]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
                            <span className="font-semibold text-accent">{article.seriesTag}</span>
                            <span aria-hidden="true">·</span>
                            <span>{article.beat}</span>
                            <span aria-hidden="true">·</span>
                            <time className="font-mono tabular-nums">{article.date}</time>
                          </div>
                          <h3 className="mt-2.5 font-serif text-xl font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                            {article.title}
                          </h3>
                          <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                            {article.summary}
                          </p>
                        </div>
                        <div className="mt-5 flex items-center justify-between border-t border-rule pt-3.5 text-xs text-ink-muted">
                          <span>{article.location ?? article.sport}</span>
                          <span className="inline-flex items-center gap-1 font-medium text-ink group-hover:text-accent">
                            인터뷰 원문·요약
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Remaining Interviews with Original Article Photos */}
              {restInterviews.length > 0 && (
                <div className="grid grid-cols-1 gap-6 border-t border-rule pt-8 md:grid-cols-2">
                  {restInterviews.map((article) => (
                    <article
                      key={article.id}
                      onClick={() => onSelectArticle(article)}
                      className="group flex cursor-pointer items-start gap-4 rounded-xl border border-rule bg-paper p-4 transition-colors hover:border-ink/40 sm:gap-5"
                    >
                      <div className="w-28 shrink-0 overflow-hidden rounded-lg border border-rule sm:w-36">
                        <EditorialImage
                          src={article.image}
                          alt={article.imageAlt}
                          aspectClassName="aspect-[4/3]"
                          className="group-hover:[&_img]:scale-[1.04]"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
                          <span className="font-semibold text-accent">{article.seriesTag}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.beat}</span>
                          <span aria-hidden="true">·</span>
                          <time className="font-mono tabular-nums">{article.date}</time>
                        </div>
                        <h3 className="mt-1.5 font-serif text-base font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                          {article.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-secondary">
                          {article.summary}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: 종목별 기사 아카이브 — 축구 / 배구 / 기타 각각 독립 섹션 */}
      <section className="border-b border-rule bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium text-ink-muted">
              04. By Sport · 종목별 기사 아카이브
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink lg:text-4xl">
              축구 · 배구 · 기타 종목별 취재 기록
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary lg:text-base">
              주력 취재 종목인 축구와 배구 현장 기사를 각각 구분하고, 아시안게임 및 체육계 정책 등
              축구·배구 외 기사를 기타 섹션으로 정리했습니다.
            </p>
          </div>

          <div className="space-y-14">
            <SportSectionBlock
              id="sport-football"
              indexLabel="4-1."
              title="축구"
              subtitle="K리그1·2, 수원삼성 우승·승격, 서울 이랜드, WK리그 챔피언결정전 현장 보도"
              articles={footballList}
              onSelectArticle={onSelectArticle}
            />

            <SportSectionBlock
              id="sport-volleyball"
              indexLabel="4-2."
              title="배구"
              subtitle="V리그 남자부 현장([MK장충]·[MK현장]), 현대캐피탈·우리카드·OK저축은행 보도"
              articles={volleyballList}
              onSelectArticle={onSelectArticle}
            />

            <SportSectionBlock
              id="sport-other"
              indexLabel="4-3."
              title="기타"
              subtitle="아시안게임(유도·양궁), 예술·체육 병역특례 정책 등 축구·배구 외 기사"
              articles={otherList}
              onSelectArticle={onSelectArticle}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
