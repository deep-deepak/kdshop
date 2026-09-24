import { useEffect, useState } from "react";
import Head from "next/head";
import Seo from "@/common/Seo";
import Layout from "@/layout/Layout";
import HeroSection from "@/landingpage/HeroSection";
import AboutSection from "@/landingpage/About";
import ExpertiseSection from "@/landingpage/Experties";
import ProductsSection from "@/landingpage/ProductSection";
import ProjectGallery from "@/landingpage/ProjectGallery ";
import FaqSection from "@/landingpage/FaqSection";
import GallerySection from "@/containers/Gallery";
import NewGallery from "@/containers/NewGallery";
import VideoGallery from "@/containers/VideoGallery";
import { FaArrowUp } from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { homeFaqs } from "@/data/homeFaqs";


// ScrollToTop Component
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant=""
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            background: "#2ebf55",
            color: "white"
          }}
        >
          <BsChevronUp size={24} />
        </Button>
      )}
    </>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kdshopfrontandshutters.com/#organization",
  name: "K&D Shopfront and Shutters",
  url: "https://kdshopfrontandshutters.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://kdshopfrontandshutters.com/logo.png",
  },
  description:
    "K&D Shopfront and Shutters provides shopfronts, shopfront shutters, roller shutters, security shutters and commercial installation services across the UK.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44 7407057984",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: "en",
  },
  knowsAbout: [
    "Shopfront Shutters UK",
    "Shop Front Shutters",
    "Shopfront Installation",
    "Roller Shutters",
    "Shopfront Roller Shutters",
    "Commercial Shopfronts",
    "Security Shutters",
    "Aluminium Shopfronts",
  ],
};

export default function Home() {
  return (
    <>
      <Layout>
        <Seo title={"Shopfront Shutter UK | Shopfront & Shutter Specialists"} descrption={"Shopfront Shutter UK specialists providing and installing top-quality shopfronts and shutters nationwide. Free quote or site survey. Satisfaction guaranteed."} />
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </Head>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProductsSection />
        <NewGallery />
        <VideoGallery />
        <ProjectGallery />
        <FaqSection />
        {/* <ScrollToTop /> */}
      </Layout>

    </>
  );
}
