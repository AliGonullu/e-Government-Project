import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Carousel,
} from "react-bootstrap";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home.css";
import UserInfo from "../UserInfo";





const Home = () => {
  return (
    <div>
      
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">e-Devlet Kapısı</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Ana Sayfa</Nav.Link>
              <Nav.Link href="#services">Hizmetler</Nav.Link>
              <Nav.Link href="#contact">İletişim</Nav.Link>
            </Nav>
            <Link to="/login">
              <Button variant="outline-light">Log in</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Link to="/login" className="text-decoration-none btn-light ">
        <h5 className="text-center homeheader">
          You are not currently logged in. To access our services, please login.
        </h5>
      </Link>{" "}
      {/* LOGIN LINK */}
      {/* Carousel Slider */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://blog.r10.net/storage/uploads/post/2022/04/e-devlet-sifresi-nasil-alinir-1650109674.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>e-Devlet Kapısı</h3>
              <p>Türkiye'nin Dijital Kapısı</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.gettyimages.com/id/515411614/photo/9-11-1926-constantinople-turkey-his-excellency-mustafa-kemal-pasha-head-of-the-turkish.jpg?s=612x612&w=0&k=20&c=L-XLm4HB1CI1wcPjLKkQkhai9px95L2kh9L9pspJZF8="
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Hızlı ve Kolay</h3>
              <p>İhtiyacınız olan her şey tek bir noktada</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.gettyimages.com/id/599322196/photo/turkish-flag-over-bosphorus-strait.jpg?s=612x612&w=0&k=20&c=1uXkSJTRR9wTdBIHmoP5oOi7NG8TQzOimxE-aQ8AOdU="
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Güvenilir Hizmet</h3>
              <p>Güvenilir ve hızlı erişim</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1 className="text-center">e-Devlet Kapısı</h1>
            <p id="infopar" className="text-center">
              e-Devlet Kapısı ile bilgi ve belgelerinize tek noktadan
              ulaşabilir, başvuru işlemlerinizi hızla gerçekleştirebilirsiniz.
            </p>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2>Hizmetler</h2>
            <ul>
              <li>Öğrenci Belgesi Sorgulama</li>
              <li>Sicil Kaydı Sorgulama</li>
              <li>Vatandaş Sağlık Belgesi Sorgulama</li>
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
      <footer className="bg-danger text-white text-center p-3 mt-4">
        <Container>
          <p>© 2024 Tüm Hakları Saklıdır. e-Devlet Kapısı</p>
        </Container>
      </footer>
    </div>
  );
};
export default Home;
