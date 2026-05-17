import React from "react";

function Icon({ children, className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Icon>
  );
}

function CheckCircleIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </Icon>
  );
}

function GlobeIcon({ className }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Icon>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  );
}

function WrenchIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4z" />
    </Icon>
  );
}

function RocketIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M4.5 16.5c-1.5 1.2-2 3.5-2 3.5s2.3-.5 3.5-2c.7-.8.6-2.1-.1-2.8-.7-.7-2-.8-2.8-.1z" />
      <path d="M9 15 15 9" />
      <path d="M15 9h4l2-6-6 2v4z" />
      <path d="M9 15v-4l-6 2 2 2h4z" />
      <path d="M15 9v4l-2 2h-4" />
    </Icon>
  );
}

function MailIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  );
}

function PhoneIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.67 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.54 2.81.67A2 2 0 0 1 22 16.92z" />
    </Icon>
  );
}

function CodeIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </Icon>
  );
}

function SparkIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M12 2v5" />
      <path d="M12 17v5" />
      <path d="M4.22 4.22l3.54 3.54" />
      <path d="M16.24 16.24l3.54 3.54" />
      <path d="M2 12h5" />
      <path d="M17 12h5" />
      <path d="M4.22 19.78l3.54-3.54" />
      <path d="M16.24 7.76l3.54-3.54" />
    </Icon>
  );
}

function ServerIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <path d="M6 7h.01M6 18h.01" />
    </Icon>
  );
}

function ChartIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-6" />
    </Icon>
  );
}

function ZapIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </Icon>
  );
}

function LockIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </Icon>
  );
}

function LayersIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="m12 2 9 4.5v7L12 18l-9-4.5v-7L12 2z" />
      <path d="m12 18 9 20.5 3 17V10" />
      <path d="m12 18 15 20.5 21 17V10" />
    </Icon>
  );
}

function ActivityIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Icon>
  );
}

function StudioLogoIcon({ className = "h-10 w-auto" }) {
  const gradId = React.useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 52 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`studioLogoGrad-${gradId}`} x1="4" y1="4" x2="48" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id={`studioLogoGlobe-${gradId}`} x1="18" y1="10" x2="34" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ecfeff" />
          <stop offset="1" stopColor="#a5f3fc" />
        </linearGradient>
        <linearGradient id={`studioLogoBoxFill-${gradId}`} x1="26" y1="0" x2="26" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e293b" stopOpacity="0.95" />
          <stop offset="1" stopColor="#0f172a" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id={`studioLogoBoxShine-${gradId}`} x1="26" y1="2" x2="26" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.14" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`studioLogoBoxBorder-${gradId}`} x1="6" y1="2" x2="46" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67e8f9" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#818cf8" stopOpacity="0.45" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {/* Soft outer glow */}
      <rect x="2" y="3" width="48" height="36" rx="12" fill="#22d3ee" fillOpacity="0.1" />
      <rect x="3" y="4" width="46" height="34" rx="11" fill="#6366f1" fillOpacity="0.06" />
      {/* Glass panel */}
      <rect x="1" y="1" width="50" height="38" rx="11" fill={`url(#studioLogoBoxFill-${gradId})`} />
      <rect x="1" y="1" width="50" height="38" rx="11" fill={`url(#studioLogoBoxShine-${gradId})`} />
      {/* Inner rim highlight */}
      <rect x="2.25" y="2.25" width="47.5" height="35.5" rx="9.5" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1" />
      {/* Gradient border */}
      <rect x="1" y="1" width="50" height="38" rx="11" stroke={`url(#studioLogoBoxBorder-${gradId})`} strokeWidth="1.35" />
      {/* < */}
      <path
        d="M14 14 10 20l4 6"
        stroke={`url(#studioLogoGrad-${gradId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* > */}
      <path
        d="m38 14 4 6-4 6"
        stroke={`url(#studioLogoGrad-${gradId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Globe */}
      <circle cx="26" cy="20" r="7.25" stroke={`url(#studioLogoGlobe-${gradId})`} strokeWidth="1.75" />
      <path
        d="M18.75 20h14.5M26 12.75a11.5 11.5 0 0 1 3.8 7.25 11.5 11.5 0 0 1-3.8 7.25 11.5 11.5 0 0 1-3.8-7.25 11.5 11.5 0 0 1 3.8-7.25z"
        stroke={`url(#studioLogoGlobe-${gradId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export {
  ArrowRightIcon, CheckCircleIcon, GlobeIcon, ShieldCheckIcon, WrenchIcon,
  RocketIcon, MailIcon, PhoneIcon, CodeIcon, SparkIcon, ServerIcon,
  ChartIcon, ZapIcon, LockIcon, LayersIcon, ActivityIcon, StudioLogoIcon,
};
