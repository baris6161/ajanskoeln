import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { getSiteOrigin } from "@/config/site";
import { applyDocumentSeo } from "@/lib/documentSeo";
import { TR_SEO, buildMainJsonLd } from "@/seo/turkishSeo";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import USP from "@/components/USP";
import Process from "@/components/Process";
import References from "@/components/References";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  useReveal();

  useEffect(() => {
    const raw = location.hash.replace(/^#/, "");
    if (!raw) return;
    const id = decodeURIComponent(raw);
    const el = document.getElementById(id);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => window.clearTimeout(t);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const origin = getSiteOrigin();
    applyDocumentSeo(origin, {
      title: TR_SEO.home.title,
      description: TR_SEO.home.description,
      path: "/",
      ogTitle: TR_SEO.home.ogTitle,
      ogDescription: TR_SEO.home.ogDescription,
      jsonLd: buildMainJsonLd(origin),
    });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Services />
      <USP />
      <Process />
      <References />
      <Testimonials />
      <Gallery />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
