import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import PostPage from './pages/PostPage';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage'
// import Tags from './pages/Tags';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/posts/:slug" element={<PostPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        {/* <Route path="/tags" element={<Tags />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;