// Lightweight inline SVG icons (no external dependency).
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export function Plane({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M10.2 2.6c.5-.5 1.4-.5 1.8.2l3 5.1 5.9 1.7c.9.3 1.2 1.4.5 2l-1.6 1.4-3.6-1-1.9 4 .9 1.4c.3.5 0 1.2-.6 1.3l-1 .2-1.7-3.2-3.2-1.7.2-1c.1-.6.8-.9 1.3-.6l1.4.9 4-1.9-1-3.6 1.4-1.6Z" />
    </svg>
  );
}
export function Phone({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 5c0-.6.4-1 1-1h2.3c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.3 1.1L7.3 10a13 13 0 0 0 6.7 6.7l1.1-1.5c.3-.3.7-.4 1.1-.3l3 .8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1A15 15 0 0 1 4 5Z" />
    </svg>
  );
}
export function Chevron({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
export function Swap({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 4 4 7l3 3M4 7h16M17 20l3-3-3-3M20 17H4" />
    </svg>
  );
}
export function Star({ className = "h-4 w-4", filled = true }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
      <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9Z" />
    </svg>
  );
}
export function Check({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}
export function Shield({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
export function Headset({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2ZM20 13a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2Z" />
      <path d="M20 17v1a4 4 0 0 1-4 4h-2" />
    </svg>
  );
}
export function Tag({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-7 7-9-9Z" />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function Globe({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  );
}
export function Users({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5M16 6a3 3 0 0 1 0 6M22 20c0-2.3-1.4-4-3.5-4.6" />
    </svg>
  );
}
export function Award({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13-1.5 8 5-3 5 3-1.5-8" />
    </svg>
  );
}
export function Calendar({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}
export function Menu({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
export function ConciergeBell({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 18h18" />
      <path d="M5 18a7 7 0 0 1 14 0" />
      <path d="M12 8v3" />
      <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function Close({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
