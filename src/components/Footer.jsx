// Ref: https://react-icons.github.io/react-icons/

// import the icon
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Add the icon and link below
export default function Footer() {
  return (
    <footer className="bg-orange-100 text-orange-800 py-3 text-center opacity-60">
      <div className="flex justify-center gap-4 text-2xl opacity-100">
        <a href="https://github.com/brandonyongys" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/byongys" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:byongys@gmail.com"><FaEnvelope /></a>
      </div>
      <p className="mt-2 text-sm opacity-100">&copy; {new Date().getFullYear()} Brandon Yong. All rights reserved.</p>
    </footer>
  );
}
