import { Link } from 'react-router-dom';

// This page defines the navigation bar 
// Add and link to any new pages

export default function Navbar() {
  return (
    <nav className="bg-orange-100 px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-orange-700 font-bold text-xl">
        <Link to="/" className="text-orange-800">byongys in NavBar</Link>
      </h1>
      <div className="space-x-4">
        <Link to="/" className="font-semibold text-orange-800 hover:underline">Home NB</Link>
        <Link to="/about" className="font-semibold text-orange-800 hover:underline">About NB</Link>
        <Link to="/blog" className="font-semibold text-orange-800 hover:underline">Blog NB</Link>
        <Link to="/projects" className="font-semibold text-orange-800 hover:underline">Projects NB</Link>
        {/* <Link to="/tags" className="font-semibold text-orange-800 hover:italic">Tags NB</Link> */}
      </div>
    </nav>
  );
}
