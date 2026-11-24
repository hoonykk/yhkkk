import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { PortfolioArticle } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface ArticleModalProps {
  article: PortfolioArticle | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    if (!article) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-xs sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-rule bg-paper shadow-2xl"
      >
        {/* Modal Top Utility Row */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-rule bg-paper/95 px-6 py-4 backdrop-blur-xs sm:px-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
            <span className="font-semibold text-accent">{article.seriesTag}</span>
            <span aria-hidden="true">·</span>
            <span>{article.sport}</span>
            <span aria-hidden="true">·</span>
            <span>{article.beat}</span>
            <span aria-hidden="true">·</span>
            <time className="font-mono tabular-nums">{article.date}</time>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="기사 상세 창 닫기"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-rule bg-surface text-ink transition-colors hover:border-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <h2
            id="article-modal-title"
            className="font-serif text-2xl font-bold leading-snug text-ink sm:text-[1.75rem]"
          >
            {article.title}
          </h2>

          {article.image && (
            <div className="mt-6">
              <EditorialImage
                src={article.image}
                alt={article.imageAlt ?? article.title}
                aspectClassName="aspect-[16/9]"
                className="rounded-xl border border-rule"
              />
            </div>
          )}

          {/* Editorial Summary & Reporting Point */}
          <div className="mt-7 space-y-6">
            <div className="rounded-xl border border-rule bg-surface p-5 sm:p-6">
              <h3 className="text-xs font-semibold text-ink-muted">기사 핵심 요약</h3>
              <p className="mt-2.5 text-[15px] leading-[1.8] text-ink">{article.summary}</p>
            </div>

            <div className="border-t border-rule pt-6">
              <h3 className="text-xs font-semibold text-ink">취재 및 기획 포인트</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {article.reportingPoint}
              </p>
            </div>
          </div>

          {/* Footer Action Row */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
            <a
              href={article.naverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:bg-accent-hover"
            >
              <span>네이버 뉴스 원문 기사 보기</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="min-h-10 rounded-md border border-rule bg-surface px-4 py-2 text-sm font-medium text-ink whitespace-nowrap shrink-0 transition-colors hover:border-ink"
            >
              닫기 (ESC)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
