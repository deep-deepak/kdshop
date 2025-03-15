import { useEffect, useState } from "react";
import Seo from "@/common/Seo";
import Layout from "@/layout/Layout";
import HeroSection from "@/landingpage/HeroSection";
import AboutSection from "@/landingpage/About";
import ExpertiseSection from "@/landingpage/Experties";
import ProductsSection from "@/landingpage/ProductSection";
import ProjectGallery from "@/landingpage/ProjectGallery ";
import GallerySection from "@/containers/Gallery";
import NewGallery from "@/containers/NewGallery";
import { FaArrowUp } from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";
import { Button } from "react-bootstrap";


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

export default function Home() {
  return (
    <>
      <Layout>
        <Seo title={"K&D Shop Front and Shutters - High-Quality Commercial Solutions"} descrption={"K&D Shop Front and Shutters specializes in aluminium windows, doors, shopfronts, curtain walling, and fire-rated solutions, offering exceptional designs and installations for commercial properties."} />
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProductsSection />
        <NewGallery />
        <ProjectGallery />
        {/* <ScrollToTop /> */}
      </Layout>

    </>
  );
}
