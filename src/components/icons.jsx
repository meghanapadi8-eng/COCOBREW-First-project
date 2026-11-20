export function Mark({ size = 30 }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5.5 23.5C5.5 13.6 12.4 7.5 22.2 7.5h4.3" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round"/><path d="M26.5 8.5c0 9.9-6.9 16-16.7 16H5.5" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round"/></svg>
}

export function ChatIcon() {
  return <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.4 2.5h9.2c.83 0 1.4.62 1.4 1.4v5.6c0 .78-.57 1.4-1.4 1.4H7.1l-3.2 2.5v-2.5H3.4c-.83 0-1.4-.62-1.4-1.4V3.9c0-.78.57-1.4 1.4-1.4Z" fill="currentColor"/></svg>
}

export function SparkIcon() {
  return <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 1.6l1.42 4.2a3 3 0 0 0 1.88 1.88L16.5 9l-4.2 1.32a3 3 0 0 0-1.88 1.88L9 16.4l-1.42-4.2a3 3 0 0 0-1.88-1.88L1.5 9l4.2-1.32a3 3 0 0 0 1.88-1.88L9 1.6Z" fill="currentColor"/></svg>
}

export function MenuIcon({ open = false }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">{open ? <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/> : <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>}</svg>
}
