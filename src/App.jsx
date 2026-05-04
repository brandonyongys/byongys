import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MarkdownProvider } from './context/MarkdownContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CV = lazy(() => import('./pages/CV'));
const Blog = lazy(() => import('./pages/Blog'));
const PostPage = lazy(() => import('./pages/PostPage'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

function App() {
  return (
    <ErrorBoundary>
      <MarkdownProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Main content should grow to push Footer to the bottom */}
            <main className="flex-grow text-brand-text-main">
              <ErrorBoundary>
                <Suspense fallback={null}>
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
                </Suspense>
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