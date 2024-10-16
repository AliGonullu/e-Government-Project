import React from 'react';
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Components/Card.js';

const MainPage = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container style={{ maxWidth: "75%" }}>
          <span style={{ marginLeft: -100, marginRight: 200 }}><Navbar.Brand href="/">e-Devlet Kapısı</Navbar.Brand></span>
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
              />
              <Button variant="outline-success">Ara</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>e-Devlet Kapısı</h1>
            <p>
              e-Devlet Kapısı ile bilgi ve belgelerinize tek noktadan ulaşabilir, başvuru işlemlerinizi hızla gerçekleştirebilirsiniz.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2>Hizmetler</h2>
            <ul>
              <li>SGK Tescil ve Hizmet Dökümü</li>
              <li>Vergi Borcu Sorgulama</li>
              <li>Sosyal Yardım Bilgileri Sorgulama</li>
            </ul>
          </Col>
          <Col md={4}>
            <h2>Kurumlar</h2>
            <ul>
              <li>Adalet Bakanlığı</li>
              <li>Emniyet Genel Müdürlüğü</li>
              <li>Türkiye Noterler Birliği</li>
            </ul>
          </Col>
          <Col md={4}>
            <h2>Belediyeler</h2>
            <ul>
              <li>Ankara Büyükşehir Belediyesi</li>
              <li>İstanbul Büyükşehir Belediyesi</li>
              <li>İzmir Büyükşehir Belediyesi</li>
            </ul>
          </Col>
        </Row>
      </Container>


      <div className='CardContainer' style={{ margin: 100 }}>
        <Card cardPicture="organization" cardTitle="Kurumlar" cardExplanation="Resmi kurumların hizmetleri ve iletişim bilgileri." />
        <Card cardPicture="services" cardTitle="e-Hizmetler" cardExplanation="Sorgulama, doğrulama ve başvurma hizmetleri." />
        <Card cardPicture="universities" cardTitle="Üniversiteler" cardExplanation="Üniversitelerin sundukları hizmetler." />
      </div>


      <footer className="bg-dark text-white text-center p-3 mt-4">
        <Container>
          <p>© 2024 Tüm Hakları Saklıdır. e-Devlet Kapısı</p>
        </Container>
      </footer>
    </div>
  );
};

export default MainPage;