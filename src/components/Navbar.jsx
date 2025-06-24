import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import { Search } from 'lucide-react';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
      <div className="text-orange-800 font-semibold text-lg">byongys</div>

      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-orange-700 font-bold text-xl">
        <Link to="/" className="text-orange-800">Build, Break, Rebuild</Link>
      </h1>

      <div className="space-x-4 flex items-center">
        <Link to="/" className="font-semibold text-orange-800 text-l hover:underline">Home</Link>
        <Link to="/about" className="font-semibold text-orange-800 text-l hover:underline">About Me</Link>
        <Link to="/cv" className="font-semibold text-orange-800 text-l hover:underline">CV</Link>
        <Link to="/blog" className="font-semibold text-orange-800 text-l hover:underline">Blog</Link>
        <Link to="/projects" className="font-semibold text-orange-800 text-l hover:underline">Projects</Link>

        <div ref={searchRef}>
          {isSearchOpen ? (
            <form onSubmit={handleSubmit} className="flex items-center border rounded">
              {/* Search input */}
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="focus:outline-none"
                placeholder="Search..."
                autoFocus
              />
              <button type="submit" className="p-1 text-gray-600 hover:text-black">
                <Search size={14} />
              </button>
            </form>
          ) : (
            // Magnifying glass button
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1 rounded-full hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              aria-label="Open search"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
