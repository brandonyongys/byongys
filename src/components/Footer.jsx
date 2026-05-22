import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-base py-6 text-center">
      <div className="flex justify-center gap-5 text-xl text-text-muted mb-3">
        <a href="https://github.com/brandonyongys" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/byongys" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:byongys@gmail.com" className="hover:text-text-primary transition-colors" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <p className="text-xs text-text-muted font-mono">&copy; {CURRENT_YEAR} Brandon Yong</p>
    </footer>
  );
}
