export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center px-6 lg:px-8">
        <a
          href="#top"
          className="font-serif text-xl font-bold tracking-tight text-ink whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          김영훈 기자
        </a>
      </div>
    </header>
  );
}
