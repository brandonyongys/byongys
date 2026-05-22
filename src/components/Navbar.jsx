import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import { Search, Menu, X } from 'lucide-react';
import { NAVBAR } from '../config/constants';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [input, setInput] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > NAVBAR.SCROLL_THRESHOLD);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setInput("");
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
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
    <nav className={`relative sticky top-0 z-50 px-8 flex justify-between items-center transition-all bg-surface-base ${NAVBAR.TRANSITION_DURATION} ${scrolled ? `${NAVBAR.PADDING_SCROLLED} border-b border-border-subtle` : NAVBAR.PADDING_TOP}`}>
      {/* Brand */}
      <Link to="/" className="font-display text-lg font-semibold text-text-primary hover:text-accent transition-colors tracking-tight">
        Brandon Yong
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-1 text-sm">
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/cv', label: 'CV' },
          { to: '/blog', label: 'Blog' },
          { to: '/projects', label: 'Projects' },
        ].map(({ to, label }, i, arr) => (
          <span key={to} className="flex items-center gap-1">
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `transition-colors font-body ${isActive ? 'text-accent font-semibold' : 'text-text-secondary hover:text-text-primary'}`
              }
            >
              {label}
            </NavLink>
            {i < arr.length - 1 && <span className="text-border-medium select-none">·</span>}
          </span>
        ))}

        {/* Search */}
        <span className="text-border-medium select-none ml-1">·</span>
        <div ref={searchRef} className="relative ml-1">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-text-secondary hover:text-text-primary transition-colors flex items-center"
            aria-label={isSearchOpen ? "Close search" : "Open search"}
          >
            <Search size={16} />
          </button>
          {isSearchOpen && (
            <form
              onSubmit={handleSubmit}
              className="absolute top-full right-0 mt-2 bg-surface-base border border-border-subtle rounded shadow-sm p-2 flex items-center animate-in fade-in zoom-in duration-150 z-50"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="focus:outline-none px-2 w-48 md:w-64 text-sm bg-transparent font-body text-text-primary placeholder:text-text-muted"
                placeholder="Search..."
                aria-label="Search content"
                autoFocus
              />
            </form>
          )}
        </div>
      </div>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-text-secondary hover:text-text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-40 bg-surface-base border border-border-subtle shadow-sm py-4 px-6 flex flex-col space-y-3 animate-in slide-in-from-top duration-150 z-50">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/cv', label: 'CV' },
            { to: '/blog', label: 'Blog' },
            { to: '/projects', label: 'Projects' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `font-body text-sm transition-colors ${isActive ? 'text-accent font-semibold' : 'text-text-secondary hover:text-text-primary'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
