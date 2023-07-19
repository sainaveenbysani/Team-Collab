import React from "react";
import './Contact.css';
import { Col, Container, Row, Image } from "react-bootstrap";


export default function Contact() {
    const dim = {
        "width": 500,
        "height": 500
    }
    return (
        <div className="my">
            <section>
                <Container>
                    <Row>
                        
                        <Col>
                            <h2>TEAM COLLAB</h2>
                            <h5>We give a solution that powers collaboration across all teams from Client to end customer during the process of delivering high quality output. </h5><p> </p>
                            <p>Contact at +1 (908)-560-2215, +1 (856)-688-2177</p>
                            <p>Email at teamcollab@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}