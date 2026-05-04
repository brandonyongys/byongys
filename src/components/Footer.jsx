// Ref: https://react-icons.github.io/react-icons/

// import the icon
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-text-main py-3 text-center opacity-60">
      <div className="flex justify-center gap-4 text-2xl opacity-100">
        <a href="https://github.com/brandonyongys" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/byongys" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:byongys@gmail.com"><FaEnvelope /></a>
      </div>
      <p className="mt-2 text-sm opacity-100">&copy; {CURRENT_YEAR} Brandon Yong. All rights reserved.</p>
    </footer>
  );
}
