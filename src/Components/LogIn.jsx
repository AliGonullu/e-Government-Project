import React, { useState, useEffect, useRef } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument.jsx';
import "./Styles/LoginStyle.css";

function LogIn() {
    const passwordLength = 6;
    const [user, setUser] = useState({ uName: "", uSurname: "", uNationalId: "", uPassword: "" });
    const [errors, setErrors] = useState({ userNameError: "", userSurnameError: "", nationalIdError: "" });
    const [selectedDocument, setSelectedDocument] = useState(null);

    const regexAlpha = /^[a-zA-Z]+$/, regexNum = /^[0-9]+$/;

    const inputRef = useRef(null);

    const manageUser = (_value, _check_type, _regex) => {
        let error = "", newErrors = {};

        if (_regex != null) {
            for (let i = 0; i < _value.length; i++) {
                if (!_regex.test(_value[i])) {
                    error = "Invalid character in " + _check_type + "!"; break;
                }
            }
        }

        switch (_check_type) {
            case "name":
                setUser(u => ({ ...u, uName: _value }));
                newErrors = { ...errors, userName: error };
                break;
            case "surname":
                setUser(u => ({ ...u, uSurname: _value }));
                newErrors = { ...errors, userSurname: error };
                break;
            case "national ID":
                setUser(u => ({ ...u, uNationalId: _value }));
                newErrors = { ...errors, nationalId: error };
                break;
            case "password":
                setUser(u => ({ ...u, uPassword: _value }));
                break;
        }
        setErrors(newErrors);
    }

    useEffect(() => {
        console.log("Rendered")
    })

    const handleUserNameChange = (event) => {
        manageUser(event.target.value, "name", regexAlpha);
        inputRef.current.style.backgroundColor = "yellow";
    };

    const handleUserSurnameChange = (event) => {
        manageUser(event.target.value, "surname", regexAlpha);
    };

    const handleNationalIdChange = (event) => {
        manageUser(event.target.value, "national ID", regexNum);
    };

    const handlePasswordChange = (event) => {
        if (event.target.value.length <= passwordLength) {
            manageUser(event.target.value, "password", null);
        }
    };

    const handleDocumentSelect = (event) => {
        setSelectedDocument(event.target.value);
    };

    return (
        <>
            <div className="namePortion">
                <label htmlFor="userName">Enter Your Name : </label>
                <input ref={inputRef} id="userName" type="text" value={user.uName} onChange={handleUserNameChange} />
                <p className="userNameText">Name : {user.uName}</p>
                {errors.userName && <p className="userError">{errors.userName}</p>}
            </div>

            <div className="surnamePortion">
                <label htmlFor="userSurname">Enter Your Surname : </label>
                <input id="userSurname" type="text" value={user.uSurname} onChange={handleUserSurnameChange} />
                <p className="userSurnameText">Surname : {user.uSurname}</p>
                {errors.userSurname && <p className="userError">{errors.userSurname}</p>}
            </div>

            <div className="nationalIdPortion">
                <label htmlFor="nationalId">Enter Your National ID : </label>
                <input id="nationalId" type="text" value={user.uNationalId} onChange={handleNationalIdChange} />
                <p className="nationalIdText">National ID : {user.uNationalId}</p>
                {errors.nationalId && <p className="userError">{errors.nationalId}</p>}
            </div>

            <div className="passwordPortion">
                <label htmlFor="password">Enter Your Password : </label>
                <input id="password" type="password" value={user.uPassword} onChange={handlePasswordChange} />
                <p className="passwordText">Password : {user.uPassword}</p>
            </div>

            {user.uName != "" && user.uSurname != "" && user.uNationalId != "" && user.uPassword.length === passwordLength &&
                <div className='documentReqPortion'>
                    <select onChange={handleDocumentSelect}>
                        <option value="">Belge Seciniz</option>
                        <option value="Adil Sicil Kaydi">Adil Sicil Kaydi</option>
                        <option value="Ogrenci Belgesi">Ogrenci Belgesi</option>
                        <option value="Saglık Belgesi">Saglık Belgesi</option>
                    </select><br />
                    {selectedDocument != null && <PDFDownloadLink className='documentReqLink' document=
                        {<PDFDocument documentTitle={selectedDocument} userName={user.uName} userSurname={user.uSurname} nationalId={user.uNationalId} />}
                        fileName="example.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Istenen Belge')}
                    </PDFDownloadLink>}
                </div>
            }
        </>
    );
}

export default LogIn;