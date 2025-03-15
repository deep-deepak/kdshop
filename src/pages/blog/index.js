import Link from "next/link";
import { blogPosts } from "../../data/blogData";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "@/layout/Layout";

export default function Home() {
    return (
        <Layout>

            <Container className="mt-4" style={{ paddingTop: "150px" }}>
                <h1 className="text-center mb-4">Blog Posts</h1>
                <Row>
                    {blogPosts.map((post) => (
                        <Col md={6} lg={4} key={post.id} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={post.image} alt={post.title} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text className="text-muted">{post.date}</Card.Text>
                                    <Link href={`/blog/${post.slug}`} passHref>
                                        <Button className="read_more">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    );
}
