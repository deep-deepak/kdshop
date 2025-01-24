import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Seo from "@/common/Seo";
import Layout from "@/layout/Layout";
import HeroSection from "@/landingpage/HeroSection";
import AboutSection from "@/landingpage/About";
import ExpertiseSection from "@/landingpage/Experties";
import ProductsSection from "@/landingpage/ProductSection";
import ProjectGallery from "@/landingpage/ProjectGallery ";
import GallerySection from "@/containers/Gallery";
import NewGallery from "@/containers/NewGallery";



export default function Home() {
  return (
    <>
      <Layout>
        <Seo title={"Home"} descrption={"Home page"} />
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProductsSection />
        <NewGallery />
        <ProjectGallery />
      </Layout>

    </>
  );
}
