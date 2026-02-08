import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import { Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [input, setInput] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
        setInput("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(input)}`);
      setIsSearchOpen(false);
      setInput("");
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-orange-100 px-6 py-1.5 shadow-md flex justify-between items-center relative">
      <div className="text-orange-800 font-semibold text-lg flex-shrink-0">byongys</div>

      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-orange-700 font-bold text-xl whitespace-nowrap hidden sm:block">
        <Link to="/" className="text-orange-800">Build, Break, Rebuild</Link>
      </h1>

      <div className="flex items-center space-x-4">
        {/* Desktop Links - Hidden on Mobile/Tablet */}
        <div className="hidden lg:flex space-x-4 items-center mr-4">
          <NavLink to="/" className={({ isActive }) => `font-semibold text-orange-800 text-l hover:underline ${isActive ? 'underline' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `font-semibold text-orange-800 text-l hover:underline ${isActive ? 'underline' : ''}`}>About Me</NavLink>
          <NavLink to="/cv" className={({ isActive }) => `font-semibold text-orange-800 text-l hover:underline ${isActive ? 'underline' : ''}`}>CV</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `font-semibold text-orange-800 text-l hover:underline ${isActive ? 'underline' : ''}`}>Blog</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `font-semibold text-orange-800 text-l hover:underline ${isActive ? 'underline' : ''}`}>Projects</NavLink>
        </div>

        <div className="flex items-center space-x-2">
          <div ref={searchRef}>
            {isSearchOpen ? (
              <form onSubmit={handleSubmit} className="flex items-center border rounded bg-white">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="focus:outline-none px-2 w-32 md:w-48 text-sm"
                  placeholder="Search..."
                  aria-label="Search content"
                  autoFocus
                />
                <button type="submit" className="p-1 text-gray-600 hover:text-black" aria-label="Submit search">
                  <Search size={14} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1 rounded-full hover:bg-orange-200 focus:outline-none"
                aria-label="Open search"
              >
                <Search className="w-5 h-5 text-orange-800" />
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1 rounded-md hover:bg-orange-200 text-orange-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-36 bg-orange-100 shadow-xl py-3 px-6 flex flex-col space-y-1 animate-in slide-in-from-top duration-200 rounded-bl-xl border-l border-b border-orange-200 z-50">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-semibold text-lg text-orange-800 hover:text-orange-600 transition-colors ${isActive ? 'underline' : ''}`}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-semibold text-lg text-orange-800 hover:text-orange-600 transition-colors ${isActive ? 'underline' : ''}`}>About Me</NavLink>
          <NavLink to="/cv" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-semibold text-lg text-orange-800 hover:text-orange-600 transition-colors ${isActive ? 'underline' : ''}`}>CV</NavLink>
          <NavLink to="/blog" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-semibold text-lg text-orange-800 hover:text-orange-600 transition-colors ${isActive ? 'underline' : ''}`}>Blog</NavLink>
          <NavLink to="/projects" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-semibold text-lg text-orange-800 hover:text-orange-600 transition-colors ${isActive ? 'underline' : ''}`}>Projects</NavLink>
        </div>
      )}
    </nav>
  );
}
