import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getSiteOrigin } from "@/config/site";
import { applyDocumentSeo } from "@/lib/documentSeo";
import { TR_SEO } from "@/seo/turkishSeo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.warn("404:", location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    const origin = getSiteOrigin();
    applyDocumentSeo(origin, {
      title: TR_SEO.notFound.title,
      description: TR_SEO.notFound.description,
      path: location.pathname,
      robots: TR_SEO.notFound.robots,
    });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-4 font-display text-4xl font-semibold text-primary">404</h1>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan hizmetlerimize ulaşabilirsiniz.
        </p>
        <Link to="/" className="inline-flex text-accent underline underline-offset-4 hover:text-primary font-medium">
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
