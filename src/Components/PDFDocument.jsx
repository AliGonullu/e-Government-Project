import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 10,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    text: {
        fontSize: 16,
    },
    textTitle: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    }
});

function PDFDocument(props) {
    return (
        <>
            <Document>
                <Page style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.textTitle}>{props.documentTitle}</Text>

                        <Text style={styles.text}>
                            Isim : {props.userName}
                        </Text>
                        <Text style={styles.text}>
                            Soyisim : {props.userSurname}
                        </Text>
                        <Text style={styles.text}>
                            TC : {props.nationalId}<br />
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>
                            Merhabalar, {props.userName} {props.userSurname}!
                        </Text>
                    </View>
                </Page>
            </Document>
        </>
    );
}

export default PDFDocument;