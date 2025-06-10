// Ref: https://react-icons.github.io/react-icons/

// import the icon
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Add the icon and link below
export default function Footer() {
  return (
    <footer className="bg-orange-100 text-orange-800 py-6 mt-16 text-center">
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
      </div>
      <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Brandon Yong. All rights reserved.</p>
    </footer>
  );
}
