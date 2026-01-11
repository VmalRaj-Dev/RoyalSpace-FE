import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import LoadingScreen from "@/components/common/LoadingScreen";
import ConsultationModal from "@/components/common/ConsultationModal";
import { initGA, trackPageView } from "./utils/analytics";
import { initFacebookPixel, trackFBPageView } from "./utils/facebookPixel";
import { initEmailJS } from "./utils/emailService";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Categories from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const queryClient = new QueryClient();

// Layout component
const Layout = () => {
  const location = useLocation();

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname + location.search);
    trackFBPageView();
  }, [location]);

  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "products",
        element: <Categories />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms",
        element: <TermsConditions />,
      },
    ],
  },
]);

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  useEffect(() => {
    // Initialize tracking scripts
    initGA();
    initFacebookPixel();
    initEmailJS();

    // Hide loading screen after initialization
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsInitialLoading(false);
    sessionStorage.setItem('hasVisited', 'true');

    // Show consultation modal after a short delay
    setTimeout(() => {
      // Only show if user hasn't seen it in this session
      const hasSeenModal = sessionStorage.getItem('hasSeenConsultationModal');
      if (!hasSeenModal) {
        setShowConsultationModal(true);
        sessionStorage.setItem('hasSeenConsultationModal', 'true');
      }
    }, 800);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isInitialLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        {showConsultationModal && (
          <ConsultationModal onClose={() => setShowConsultationModal(false)} />
        )}
        <RouterProvider router={router} />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
