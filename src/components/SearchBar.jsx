import { useState, useEffect } from "react";

export default function SearchBar({ onSearch, autoFocus = false }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(input);
    }, 300);
    return () => clearTimeout(timeout);
  }, [input, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="w-full p-2 rounded border focus:outline-none focus:ring focus:ring-blue-300"
      autoFocus={autoFocus}
      aria-label="Search input"
    />
  );
}
