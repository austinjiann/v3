'use client';

export function ThemeToggle() {
  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains('dark');

    document.documentElement.classList.toggle('dark', nextIsDark);
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="-mr-2 grid size-9 cursor-pointer place-items-center text-[var(--text-muted)]"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="hidden size-5 dark:block"
        fill="currentColor"
      >
        <path d="M20.6 15.45A8.5 8.5 0 0 1 8.55 3.4 9 9 0 1 0 20.6 15.45Z" />
        <path d="m18.25 3 .55 1.45L20.25 5l-1.45.55L18.25 7l-.55-1.45L16.25 5l1.45-.55L18.25 3Z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-5 dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    </button>
  );
}
