import React from 'react';

// Type definition to allow dynamic Tailwind classes via props
type SVGProps = React.SVGProps<SVGSVGElement>;

export const FlowchartSymbols = {
  Terminator: (props: SVGProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="6" width="20" height="12" rx="6" />
    </svg>
  ),
  Process: (props: SVGProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="5" width="20" height="14" />
    </svg>
  ),
  Decision: (props: SVGProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2L22 12L12 22L2 12Z" />
    </svg>
  ),
  Input: (props: SVGProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6 5H22L18 19H2Z" />
    </svg>
  ),
  LineDown: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <polyline points="19 15 12 22 5 15" />
    </svg>
  ),
  LineUp: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="22" x2="12" y2="2" />
      <polyline points="5 9 12 2 19 9" />
    </svg>
  ),
  LineRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="2" y1="12" x2="22" y2="12" />
      <polyline points="15 5 22 12 15 19" />
    </svg>
  ),
  LineLeft: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="22" y1="12" x2="2" y2="12" />
      <polyline points="9 19 2 12 9 5" />
    </svg>
  ),
  PredefinedProcess: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="5" width="20" height="14" />
      <line x1="6" y1="5" x2="6" y2="19" />
      <line x1="18" y1="5" x2="18" y2="19" />
    </svg>
  ),
  ManualInput: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="2,9 22,5 22,19 2,19" />
    </svg>
  ),
  OffPageConnector: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="2,4 22,4 22,14 12,21 2,14" />
    </svg>
  ),
  Display: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2,5 H14 L22,12 L14,19 H2 Q5,12 2,5 Z" />
    </svg>
  ),
  Preparation: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="6,5 18,5 22,12 18,19 6,19 2,12" />
    </svg>
  ),
  Annotation: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 4H4V20H12" />
      <line x1="12" y1="12" x2="22" y2="12" strokeDasharray="3 3" />
    </svg>
  ),
  
};