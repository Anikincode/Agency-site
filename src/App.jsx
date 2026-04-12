import { Routes, Route, Navigate } from 'react-router-dom' // Removed BrowserRouter from here
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// ... all your page imports stay the same

function NotFound() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: '1rem', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '5rem', fontWeight: 900, letterSpacing: '-0.05em', color: 'var(--color-text)', lineHeight: 1 }}>404</h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)' }}>Page not found.</p>
      <a href="/" className="btn btn--primary btn--lg" style={{ marginTop: '1rem' }}>Go Home</a>
    </main>
  )
}

export default function App() {
  return (
    // REMOVED <BrowserRouter> from here
    <>
      <Navbar />
      <Routes>
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web-design-etobicoke" element={<WebDesign />} />
        <Route path="/services/search-engine-optimization" element={<SEOPage />} />
        <Route path="/google-ads" element={<GoogleAds />} />

        {/* Company */}
        <Route path="/company" element={<Company />} />
        <Route path="/about" element={<Navigate to="/company" replace />} />
        <Route path="/work" element={<Work />} />
        <Route path="/careers" element={<Careers />} />

        {/* Knowledge / Blog */}
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/post/:slug" element={<BlogPost />} />

        {/* Contact */}
        <Route path="/contacts" element={<Contact />} />
        <Route path="/contact" element={<Navigate to="/contacts" replace />} />

        {/* Landing pages */}
        <Route path="/free-website" element={<FreeWebsite />} />
        <Route path="/affordable-seo-packages" element={<SEOPackages />} />
        <Route path="/small-business-seo-packages" element={<SmallBizSEO />} />
        <Route path="/seo-trends" element={<SEOTrends />} />

        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/accessibility-statement" element={<Accessibility />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
    // REMOVED </BrowserRouter> from here
  )
}
