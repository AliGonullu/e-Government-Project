import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from '../Components/PDFDocument.js';
import Card from '../Components/Card.js';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInfo from "../UserInfo";
import axios from 'axios';

function EducationRecord() {

    const nameOfPDFDocument = "OgrenciBelgesi.pdf";
    const [user, setUser] = useState({ hasAnyData: false, name: "", surname: "", nationalId: "", SchoolName: "", EnterDate: "", ExitDate: "" });
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showPreview, setShowPreview] = useState(false);
    const [studentNo, setStudentNo] = useState("");
    const [queryType, setQueryType] = useState("");
    const [documentExplanation, setDocumentExplanation] = useState("");
    const [documentNote, setDocumentNote] = useState("");
    const [data, setData] = useState("");
    const [showGetPDFButton, setShowGetPDFButton] = useState(false);

    document.title = "Öğrenci Belgesi Sorgulama";

    const handleUserChange = () => {
        setUser(u =>
        ({
            hasAnyData: data.hasAnyData,
            name: data.name,
            surname: data.surname,
            nationalId: UserInfo.userTC,
            SchoolName: data.SchoolName,
            EnterDate: data.EnterDate,
            ExitDate: data.ExitDate
        }));
        let firstPart = 130, secondPart = 610, thirdPart = 1000;
        setStudentNo(() => String(firstPart + Math.floor(Math.random() * 9)) + String(secondPart + Math.floor(Math.random() * 90)) + String(thirdPart + Math.floor(Math.random() * 900)));
    }

    const handleSubmit = async (event) => {
        try {
            const response = await axios.get('http://localhost:8090/userinfo/school/' + UserInfo.userID);
            setData(response.data);

        } catch (error) {
            console.log(error);
        }
    };



    const handleDocumentText = () => {
        setDocumentExplanation("Yukarıdaki kimlik bilgileri ile yapılan sorgulama neticesinde, ilgili kişinin eğitim durumu hakkında aşağıdaki bilgiler elde edilmiştir. Bu belge, eğitim kurumları tarafından düzenlenmiş olup, resmi işlemler için kullanılabilir.");
        setDocumentNote("Bu belgenin doğruluğu ve geçerliliği, belge düzenlenme tarihindeki eğitim kayıtlarına dayanarak sağlanmıştır. Herhangi bir değişiklik veya güncelleme durumunda, ilgili eğitim kurumu ile iletişime geçilmesi gerekmektedir.");
    }

    const handleSelectedDocument = () => {
        setSelectedDocument(() => "Öğrenci Belgesi");
    }

    const handleSearch = (e) => {
        setSearchQuery(() => e.target.value);
    }

    //*******************************
    const handleClick = () => {
        handleSubmit();
        setShowGetPDFButton(true);
    }

    const handleClick2 = () => {
        handleUserChange();
        handleSelectedDocument();
        handleDocumentText();
        setQueryType("Öğrenci Belgesi");
        setShowPreview(() => true);
    }
    //*******************************

    const isUserInfoComplete = user.hasAnyData && (user.name !== "" && user.surname !== "" && user.nationalId !== "" && user.SchoolName !== "" && studentNo !== "" && user.EnterDate !== "" && user.ExitDate !== "" && user.hasAnyData !== null);


    return (
        <>
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
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <Button variant="outline-success">Ara</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="my-4 d-flex flex-column align-items-center">
                <h1 className='my-4'>Ögrenci Belgesi Sorgulama</h1>
                <p className='text-center'>
                    Lütfen belge talebini ileterek öğrenci belgesini indirin.
                </p>
                <Form className='w-50'>
                    <Button
                        variant="primary"
                        onClick={handleClick}
                        className="w-100 mt-3">
                        Belge Talebi İlet
                    </Button>

                    {
                        showGetPDFButton &&
                        <Button
                            variant="primary"
                            onClick={handleClick2}
                            className="w-100 mt-3">
                            Belgeyi İndir
                        </Button>
                    }


                </Form>
            </Container>

            <div className='CardContainer' style={{ margin: 100 }}>
                <Card cardPicture="crime" cardTitle="Adli Sicil Kaydı Talep Et" cardExplanation="Adli sicil kaydınıza dair belge edinebilirsiniz." />
                <Card cardPicture="health" cardTitle="Sağlık Belgesi Talep Et" cardExplanation="Güncel ve geçmiş sağlık kayıtlarınıza dair belge edinebilirsiniz." />
            </div>

            {isUserInfoComplete && showPreview && (

                <Container className="my-4 d-flex flex-column align-items-center">
                    <h2>Belge Önizlemesi</h2>
                    <PDFDownloadLink
                        document={
                            <PDFDocument
                                selectedDocument={selectedDocument}
                                documentTitle={selectedDocument}
                                userName={user.name}
                                userSurname={user.surname}
                                nationalId={user.nationalId}
                                schoolName={user.SchoolName}
                                studentNo={studentNo}
                                enterDate={user.EnterDate}
                                exitDate={user.ExitDate}
                                queryType={queryType}
                                documentExplanation={documentExplanation}
                                documentNote={documentNote}
                            />
                        }
                        fileName={nameOfPDFDocument}
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : (nameOfPDFDocument + " indir")
                        }
                    </PDFDownloadLink>

                    <PDFViewer style={{ margin: "35px" }} width="85%" height="900px">
                        <PDFDocument
                            selectedDocument={selectedDocument}
                            documentTitle={selectedDocument}
                            userName={user.name}
                            userSurname={user.surname}
                            nationalId={user.nationalId}
                            schoolName={user.SchoolName}
                            studentNo={studentNo}
                            enterDate={user.EnterDate}
                            exitDate={user.ExitDate}
                            queryType={queryType}
                            documentExplanation={documentExplanation}
                            documentNote={documentNote}
                        />
                    </PDFViewer>
                </Container>
            )}
            {!isUserInfoComplete && showPreview &&
                <h3 style={{ marginTop: 25, fontStyle: "italic", fontWeight: "bold", color: "red" }} className="text-center">
                    İstediğiniz Belge İçin Veriler Eksik!
                </h3>
            }
            <footer style={{ backgroundColor: '#343a40', color: 'white', textAlign: 'center', padding: '8px', position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
                <Container>
                    &copy; 2024 Tüm Hakları Saklıdır. e-Devlet Kapısı
                </Container>
            </footer >
        </>
    );
}

export default EducationRecord;