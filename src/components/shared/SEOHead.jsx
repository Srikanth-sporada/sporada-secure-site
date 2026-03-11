import { Helmet } from 'react-helmet-async';

export function SEOHead({ 
  title, 
  description, 
  keywords = "e-surveillance, video analytics, security, cctv monitoring, india", 
  url = "https://www.sporadasecure.com",
  schemaData = null
}) {
  const fullTitle = title ? `${title} | Sporada Secure` : "Sporada Secure | India's Trusted e-Surveillance Platform";
  const fullDescription = description || "Save up to 60% on security costs with AI-powered live video surveillance and cloud video analytics.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}
