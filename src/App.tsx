import WhatsAppWidget from './components/WhatsAppWidget';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Classes from './pages/Classes';
import CourseDetail from './pages/CourseDetail';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import Gallery from './pages/Gallery';
import TestimonialsPage from './pages/TestimonialsPage';
import BasicCourse from './pages/course/BasicCourse';
import AdvancedCourse from './pages/course/AdvancedCourse';
import MasterCourse from './pages/course/MasterCourse';

// Add page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      className={`transition-all duration-500 ${
        isAnimating
          ? 'opacity-0 transform translate-y-4'
          : 'opacity-100 transform translate-y-0'
      }`}
    >
      {children}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Suspense fallback={<Loading />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Classes />} />
              <Route path="/course/:courseId" element={<CourseDetail />} />
              <Route path="/courses/basic" element={<BasicCourse />} />
              <Route path="/courses/advanced" element={<AdvancedCourse />} />
              <Route path="/courses/master" element={<MasterCourse />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </Suspense>
        <Footer />
        {/* Floating WhatsApp icon visible on all pages */}
        <WhatsAppWidget />
        <ScrollToTop />
        {/* No Cart: this is a course learning site */}
      </div>
    </Router>
  );
}

export default App;