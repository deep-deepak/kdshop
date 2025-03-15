import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import WhatsAppModal from "@/common/WhatsAppModal";

export default function App({ Component, pageProps }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease", // Default easing for animations
    });

    // Show the scroll button when user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true); // Show button after scrolling 300px
      } else {
        setShowScrollButton(false); // Hide button when scroll is at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <WhatsAppModal />
      <Head>
        <meta name="robots" content="index,follow" />
        <meta
          name="google-site-verification"
          content="pDXrhOKbmr95EG4Rbtns71Q0xQx0SdWCKwhuMjICydw"
        />
        <link rel="canonical" href="https://kdshopfrontandshutters.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "kdshopfrontandshutters",
              "alternateName": "kdshopfrontandshutters",
              "url": "https://kdshopfrontandshutters.com/",
              "logo": "",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 7407057984",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "GB",
                "availableLanguage": "en"
              }
            }
          `}
        </script>
      </Head>

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-058SP393MP"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-058SP393MP');
          `,
        }}
      />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "72px", // Adjust the position to be below the WhatsApp button
            right: "20px", // Align it to the right side
            backgroundColor: "#25d366", // WhatsApp green color
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            fontSize: "30px",
            height:"50px",
            width:"50px"
          }}
        >
          ↑
        </button>
      )}

      <Component {...pageProps} />
    </>
  );
}
