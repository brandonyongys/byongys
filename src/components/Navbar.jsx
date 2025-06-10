// to navigate between pages without full page reloads, enabling a smooth SPA (Single Page Application) experience
import { Link } from 'react-router-dom';

// This page defines the navigation bar 
// Add and link to any new pages

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-orange-100 px-6 py-1.5 shadow-md flex justify-between items-center relative">
      <div className="text-orange-800 font-semibold text-l">byongys</div>

      {/* Center title */}
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-orange-700 font-bold text-xl">
        <Link to="/" className="text-orange-800">Build, Break, Rebuild</Link>
      </h1>

      <div className="space-x-4">
        <Link to="/" className="font-semibold text-orange-800 text-l hover:underline">Home</Link>
        <Link to="/about" className="font-semibold text-orange-800 text-l hover:underline">About Me</Link>
        <Link to="/blog" className="font-semibold text-orange-800 text-l hover:underline">Blog</Link>
        <Link to="/projects" className="font-semibold text-orange-800 text-l hover:underline">Projects</Link>
        {/* <Link to="/tags" className="font-semibold text-orange-800 hover:italic">Tags NB</Link> */}
      </div>
    </nav>
  );
}
