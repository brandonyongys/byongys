import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MarkdownProvider } from './context/MarkdownContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Blog from './pages/Blog';
import PostPage from './pages/PostPage';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage'
// import Tags from './pages/Tags';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <ErrorBoundary>
      <MarkdownProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Main content should grow to push Footer to the bottom */}
            <main className="flex-grow text-orange-900">
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/cv" element={<CV />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/posts/:slug" element={<PostPage />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:slug" element={<ProjectPage />} />
                  {/* <Route path="/tags" element={<Tags />} /> */}
                  <Route path="/search" element={<SearchPage />} />
                </Routes>
              </ErrorBoundary>
            </main>

            <Footer />
          </div>
        </Router>
      </MarkdownProvider>
    </ErrorBoundary>
  );
}

export default App;