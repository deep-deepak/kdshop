import Layout from "@/layout/Layout";
import { blogPosts } from "../../data/blogData";
import { Container, Row, Col, Image } from "react-bootstrap";
import Seo from "@/common/Seo";

// Generate static paths for each blog post
export async function getStaticPaths() {
    const paths = blogPosts.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false }; // fallback: false means unknown paths will show a 404 page
}

// Fetch the blog post data based on the slug
export async function getStaticProps({ params }) {
    const blog = blogPosts.find((post) => post.slug === params.slug);

    if (!blog) {
        return { notFound: true };
    }

    return {
        props: { blog },
    };
}

const BlogDetails = ({ blog }) => {
    return (
        <Layout>
            <Seo title={blog.metaTitle} descrption={blog.metaDesecription} />
            <Container className="mt-4" style={{ paddingTop: "150px" }}>
                <Row className="justify-content-center">
                    <Col lg={10} md={12}>
                        <h1 className="text-center mb-3">{blog.title}</h1>
                        {/* <p className="text-muted text-center">{blog.date}</p> */}

                        <Image
                            src={blog.image}
                            alt={blog.title}
                            className="rounded mb-4"
                            width={"100%"}
                            height={"450px"}
                        />

                        <div dangerouslySetInnerHTML={{ __html: blog.content }} className="blog-content" />

                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default BlogDetails;
