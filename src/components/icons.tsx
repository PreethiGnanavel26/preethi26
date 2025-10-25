import type { LucideProps } from "lucide-react";
import {
  Code as LucideCode,
  Palette as LucidePalette,
  Server as LucideServer,
  GitBranch as LucideGitBranch,
  Github as LucideGithub,
  Linkedin as LucideLinkedin,
  Mail as LucideMail,
  Phone as LucidePhone,
  Route as LucideRoute,
  Menu,
  X,
  ArrowRight,
  Download,
  Send,
} from "lucide-react";

export const Icons = {
  Code: LucideCode,
  Palette: LucidePalette,
  Server: LucideServer,
  GitBranch: LucideGitBranch,
  Github: LucideGithub,
  Linkedin: LucideLinkedin,
  Mail: LucideMail,
  Phone: LucidePhone,
  Route: LucideRoute,
  Menu,
  X,
  ArrowRight,
  Download,
  Send,
  React: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
    </svg>
  ),
  NodeJs: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.52,16.54l-5.22,3.01a2,2,0,0,1-2,0l-5.22-3a2,2,0,0,1-1-1.73V9.19a2,2,0,0,1,1-1.73l5.22-3a2,2,0,0,1,2,0l5.22,3a2,2,0,0,1,1,1.73v5.62A2,2,0,0,1,18.52,16.54Z" />
      <path d="m9.11,9.11 5.78,5.78" />
    </svg>
  ),
  Tailwind: (props: LucideProps) => (
     <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 12c-2.4 0-4.5 2.1-4.5 4.5s2.1 4.5 4.5 4.5S21 18.9 21 16.5s-2.1-4.5-4.5-4.5zM7.5 12c-2.4 0-4.5 2.1-4.5 4.5S5.1 21 7.5 21s4.5-2.1 4.5-4.5S9.9 12 7.5 12zM12 3c-2.4 0-4.5 2.1-4.5 4.5S9.6 12 12 12s4.5-2.1 4.5-4.5S14.4 3 12 3z"/>
    </svg>
  ),
  Redux: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.71 4.29a1 1 0 0 0-1.42 0l-4 4a1 1 0 0 0 0 1.42l4 4a1 1 0 0 0 1.42-1.42L10.83 12l2.88-2.88a1 1 0 0 0 0-1.42zM19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
    </svg>
  ),
  Express: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3a2 2 0 0 1-2 2h-1" />
        <path d="M8 11v1" />
        <path d="M12 11v1" />
        <path d="M16 11v1" />
        <path d="M4 17h12" />
        <path d="m18 14 3 3-3 3" />
    </svg>
  ),
  MongoDB: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-3.87 0-7 2.24-7 5v10c0 2.76 3.13 5 7 5s7-2.24 7-5V7c0-2.76-3.13-5-7-5z" />
        <path d="M12 12a3 3 0 0 0 0-6" />
        <path d="M12 12a3 3 0 0 1 0 6" />
    </svg>
  ),
};
