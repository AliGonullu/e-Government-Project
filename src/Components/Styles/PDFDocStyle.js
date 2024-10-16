import { StyleSheet } from '@react-pdf/renderer';

const PDFDocStyle = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        position: 'relative',
        fontFamily: 'Ubuntu',
    },
    section: {
        marginBottom: 20,
        padding: 15,
        border: '2px solid #8B0000',
        borderRadius: 8,
        backgroundColor: '#FFFAF5',
    },
    header: {
        marginBottom: 40,
        paddingBottom: 10,
        borderBottom: '3px solid #8B0000',
    },
    text: {
        fontSize: 9,
        marginBottom: 10,
        lineHeight: 1.5,
        color: '#333333',
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 21,
        color: '#8B0000',
        marginBottom: 20,
    },
    textSectionTitle: {
        fontSize: 16,
        marginBottom: 15,
        color: '#8B0000',
    },
    textRecordTitle: {
        fontSize: 12,
        marginTop: 20,
        marginBottom: 15,
        color: '#8B0000',
    },
    textExplanation: {
        fontSize: 12,
        marginTop: 25,
        fontWeight: "bold",
    },
    textSeparator: {
        marginVertical: 15,
        borderBottom: '1px solid #8B0000',
    },
    footer: {
        marginTop: 30,
        paddingTop: 10,
        borderTop: '3px solid #8B0000',
        textAlign: 'center',
        fontSize: 4,
        color: '#333333',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    pageNumber: {
        position: 'absolute',
        bottom: 15,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 8,
        color: 'grey',
    },
    noteText: {
        marginTop: 40,
        paddingTop: 10,
        borderTop: '3px solid #8B0000',
        textAlign: 'left',
        fontSize: 12,
        color: '#333333',
    },
});

export default PDFDocStyle;