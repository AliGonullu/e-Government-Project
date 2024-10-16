import React, { useState } from 'react';
import Card from '../Components/Card.js';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "../Assets/pictures/TBMM.jpg";

function Organizations() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(() => e.target.value);
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container style={{ maxWidth: "75%" }}>
                    <span style={{ marginLeft: -100, marginRight: 200 }}>
                        <Navbar.Brand href="/">e-Devlet Kapısı</Navbar.Brand>
                    </span>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Ana Sayfa</Nav.Link>
                            <Nav.Link href="#services">Hizmetler</Nav.Link>
                            <Nav.Link href="#contact">İletişim</Nav.Link>
                            <Nav.Link href="/organizations">Kurumlar</Nav.Link>
                            <Nav.Link href="/document_services">e-Hizmetler</Nav.Link>
                            <Nav.Link href="/universities">Üniversiteler</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Arama"
                                className="mt-2"
                                aria-label="Arama"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <Button variant="outline-success">Ara</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div style={{
                height: "75vh",
                maxWidth: "100%",
                backgroundImage: `url(${pic})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: "40px",
            }}></div>

            <Container className="mt-4">
                <h1 className="text-center" style={{ textDecoration: "underline" }}>Kurumlar</h1>
                <div className='CardContainer' style={{ margin: 40 }}>
                    <Card cardPicture="educationOrg" cardTitle="Milli Eğitim Bakanlığı" />
                    <Card cardPicture="crimeOrg" cardTitle="Adalet Bakanlığı" cardExplanation="Adli Sicil ve İstatistik Genel Müdürlüğü Hizmetleri" />
                    <Card cardPicture="healthOrg" cardTitle="Sağlık Bakanlığı" cardExplanation="Türkiye İlaç ve Tıbbi Cihaz Kurumu" />
                    <Card cardPicture="ankara" cardTitle="Ankara Büyükşehir Belediyesi" />
                    <Card cardPicture="istanbul" cardTitle="İstanbul Büyükşehir Belediyesi" />
                    <Card cardPicture="izmir" cardTitle="İzmir Büyükşehir Belediyesi" />
                </div>
            </Container>




            <footer style={{ backgroundColor: '#343a40', color: 'white', textAlign: 'center', padding: '8px', position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
                <Container>
                    &copy; 2024 Tüm Hakları Saklıdır. e-Devlet Kapısı
                </Container>
            </footer>
        </>
    );
}

export default Organizations;