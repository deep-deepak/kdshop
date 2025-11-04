import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import WhatsAppModal from "@/common/WhatsAppModal";

export default function App({ Component, pageProps }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // ✅ Initialize AOS animations + scroll-to-top visibility
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease" });

    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" />
        <meta
          name="google-site-verification"
          content="pDXrhOKbmr95EG4Rbtns71Q0xQx0SdWCKwhuMjICydw"
        />
        <link rel="canonical" href="https://kdshopfrontandshutters.com/" />

        {/* ✅ Google Analytics (G-058SP393MP) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-058SP393MP"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-058SP393MP');
            `,
          }}
        />

        {/* ✅ Google Ads (AW-17426309870) */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17426309870"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17426309870');
            `,
          }}
        /> */}

        {/* ✅ JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "kdshopfrontandshutters",
              alternateName: "kdshopfrontandshutters",
              url: "https://kdshopfrontandshutters.com/",
              logo: "",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44 7407057984",
                contactType: "customer service",
                contactOption: "TollFree",
                areaServed: "GB",
                availableLanguage: "en",
              },
            }),
          }}
        />
      </Head>

      <WhatsAppModal />

      {/* ✅ Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "72px",
            right: "20px",
            backgroundColor: "#25d366",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            fontSize: "30px",
            height: "50px",
            width: "50px",
          }}
        >
          ↑
        </button>
      )}

      <Component {...pageProps} />
    </>
  );
}
