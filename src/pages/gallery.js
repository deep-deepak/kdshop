import PageHeading from '@/common/PageHeading'
import Seo from '@/common/Seo'
import GallerySection from '@/containers/Gallery'
import NewGallery from '@/containers/NewGallery'
import Layout from '@/layout/Layout'
import React from 'react'

export default function Gallery() {
    return (
        <>
            <Layout>
                <Seo title={"gallery"} descrption={"gallery"} />
                <PageHeading title={"Gallery"} image={"images/gallery112.jpg"} />
                {/* <GallerySection /> */}
                <NewGallery />
            </Layout>

        </>
    )
}
