import React from 'react';
import { Page, Text, View, Document, Font } from '@react-pdf/renderer';
import styles from './Styles/PDFDocStyle';
import Ubuntu from './Fonts/UbuntuRegular.ttf';

Font.register({ family: 'Ubuntu', src: Ubuntu });

function PDFDocument(props) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.textTitle}>-{props.documentTitle}-</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.textSectionTitle}>
                        Sorgulamaya Esas Kimlik Bilgileri
                    </Text>
                    <Text style={styles.text}>
                        Ad: {props.userName}
                    </Text>
                    <Text style={styles.text}>
                        Soyad: {props.userSurname}
                    </Text>
                    <Text style={styles.text}>
                        TC Kimlik No.: {props.nationalId}
                    </Text>
                    <View style={styles.textSeparator}></View>

                    {props.selectedDocument === "Öğrenci Belgesi" && (
                        <>
                            <Text style={styles.textSectionTitle}>
                                Öğrenci Belgesi Bilgileri
                            </Text>
                            <Text style={styles.text}>
                                Okul Adı: {props.schoolName}
                            </Text>
                            <Text style={styles.text}>
                                Öğrenci No.: {props.studentNo}
                            </Text>
                            <Text style={styles.text}>
                                Okul Kaydı Başlangıç Tarihi: {props.enterDate}
                            </Text>
                            <Text style={styles.text}>
                                Okul Kaydı Bitiş Tarihi: {props.exitDate}
                            </Text>
                            <Text style={styles.text}>
                                Sorgu Türü: {props.queryType}
                            </Text>

                            <Text style={styles.textExplanation}>
                                {props.documentExplanation}
                            </Text>
                        </>
                    )}

                    {props.selectedDocument === "Adli Sicil Kaydı" && (
                        <>
                            <Text style={styles.textSectionTitle}>
                                Adli Sicil Kaydı Bilgileri
                            </Text>
                            {props.crime.length > 0 ? (
                                props.crime.map((crime, index) => (
                                    <View key={index}>
                                        <Text style={styles.textRecordTitle}>
                                            Suç Kaydı {index + 1}
                                        </Text>
                                        <Text style={styles.text}>
                                            Suç: {crime.name}
                                        </Text>
                                        <Text style={styles.text}>
                                            Kayıt Tarihi: {crime.date}
                                        </Text>
                                        <Text style={styles.text}>
                                            Sorgu Türü: {props.queryType}
                                        </Text>
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.text}>
                                    Suç Kaydı: YUKARIDA KİMLİK BİLGİLERİ BULUNAN KİŞİNİN ADLİ SİCİL KAYDI YOKTUR.
                                </Text>
                            )}

                            <Text style={styles.textExplanation}>
                                {props.documentExplanation}
                            </Text>
                        </>
                    )}

                    {props.selectedDocument === "Sağlık Belgesi" && (
                        <>
                            <Text style={styles.textSectionTitle}>
                                Sağlık Kayıtları
                            </Text>

                            {props.disease.length > 0 ? (
                                props.disease.map((disease, index) => (
                                    <View key={index}>
                                        <Text style={styles.textRecordTitle}>
                                            Hastane Kaydı {index + 1}
                                        </Text>
                                        <Text style={styles.text}>
                                            Hastalık Adı: {disease.name}
                                        </Text>
                                        <Text style={styles.text}>
                                            Hasta No.: {String(Number(props.patientNo) + Math.floor(Math.random() * 500))}
                                        </Text>
                                        <Text style={styles.text}>
                                            Hastane Adı: {String(props.hospitalNames[Math.floor(Math.random() * props.hospitalNames.length)])}
                                        </Text>
                                        <Text style={styles.text}>
                                            Kayıt Tarihi: {disease.date}
                                        </Text>
                                        <Text style={styles.text}>
                                            Kan Tipi: {props.bloodType}
                                        </Text>
                                        <Text style={styles.text}>
                                            Sorgu Türü: {props.queryType}
                                        </Text>
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.text}>
                                    Hastalık Kaydı: YUKARIDA KİMLİK BİLGİLERİ BULUNAN KİŞİNİN SAĞLIK KAYDI YOKTUR.
                                </Text>
                            )}

                            <Text style={styles.textExplanation}>
                                {props.documentExplanation}
                            </Text>
                        </>
                    )}

                    {props.selectedDocument === "Askerlik Durum Belgesi Sorgulama" && (
                        <>
                            <Text style={styles.textSectionTitle}>
                                Askerlik Durum Belgesi
                            </Text>
                            <Text style={styles.text}>
                                Doğum Tarihi: {props.birthDate}
                            </Text>
                            <Text style={styles.text}>
                                Doğrulama Tarihi: {props.queryDate}
                            </Text>
                            <Text style={styles.text}>
                                Askerlik Başlama Tarihi: {props.militaryServiceStartDate}
                            </Text>
                            <Text style={styles.text}>
                                Askerlik Durumu: {props.militaryStatus}
                            </Text>
                            <Text style={styles.text}>
                                Askerlik Başlagıcına Kalan: {props.daysLeftForService}
                            </Text>
                            <Text style={styles.text}>
                                Sorgu Türü: {props.queryType}
                            </Text>

                            <Text style={styles.textExplanation}>
                                {props.documentExplanation}
                            </Text>
                        </>
                    )}
                    <Text style={styles.noteText}>
                        NOT: {props.documentNote}
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.text}>
                        © 2024 Tüm Hakları Saklıdır. e-Devlet Kapısı
                    </Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    );
}

export default PDFDocument;