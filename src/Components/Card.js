import React from 'react';
import { useNavigate } from 'react-router-dom';
import checkIcon from "../Assets/icons/CheckIcon.png";
import medicalIcon from "../Assets/icons/MedicalIcon.png";
import educationIcon from "../Assets/icons/SchoolIcon.png";
import organizationIcon from "../Assets/icons/Organization.png";
import servicesIcon from "../Assets/icons/Services.png";
import educationOrgIcon from "../Assets/icons/SchoolOrgIcon.png";
import justiceOrgIcon from "../Assets/icons/JusticeOrgIcon.png";
import healthOrgIcon from "../Assets/icons/HealthOrgIcon.png";
import universityIcon from "../Assets/icons/UniversityIcon.png";
import "./Styles/CardStyle.css";

function Card(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        switch (props.cardPicture) {
            case "crime":
                navigate("/criminal_record"); break;
            case "health":
                navigate("/health_record"); break;
            case "education":
                navigate("/education_record"); break;
            case "crimeOrg":
                navigate("/criminal_record"); break;
            case "healthOrg":
                navigate("/health_record"); break;
            case "educationOrg":
                navigate("/education_record"); break;
            case "organization":
                navigate("/organizations"); break;
            case "services":
                navigate("/document_services"); break;
            case "universities":
                navigate("/universities"); break;
            case "istanbul":
                window.location.href = "https://ibb.istanbul/"; break;
            case "ankara":
                window.location.href = "https://www.ankara.bel.tr/"; break;
            case "izmir":
                window.location.href = "https://www.izmir.bel.tr/"; break;
            case "iuc":
                window.location.href = "https://iuc.edu.tr/tr/_"; break;
            case "iu":
                window.location.href = "https://www.istanbul.edu.tr/tr/_"; break;
            case "itu":
                window.location.href = "https://www.itu.edu.tr/"; break;
            case "marmara":
                window.location.href = "https://www.marmara.edu.tr/"; break;
            case "metu":
                window.location.href = "https://www.metu.edu.tr/tr"; break;
            case "ytu":
                window.location.href = "https://www.yildiz.edu.tr/"; break;
            case "gazi":
                window.location.href = "https://gazi.edu.tr/"; break;
            default: break;
        }
    };

    const getCardPicture = () => {
        switch (props.cardPicture) {
            case "crime":
                return checkIcon;
            case "health":
                return medicalIcon;
            case "education":
                return educationIcon;
            case "crimeOrg":
                return justiceOrgIcon;
            case "healthOrg":
                return healthOrgIcon;
            case "educationOrg":
                return educationOrgIcon;
            case "istanbul":
                return organizationIcon;
            case "ankara":
                return organizationIcon;
            case "izmir":
                return organizationIcon;
            case "organization":
                return organizationIcon;
            case "services":
                return servicesIcon;
            case "universities":
                return universityIcon;
            default:
                return universityIcon;
        }
    };

    const cardPicture = getCardPicture();
    const cardTitle = props.cardTitle;
    const cardExplanation = props.cardExplanation;

    return (
        <>
            <div className="Card" onClick={handleClick}>
                <img className="CardPicture" src={cardPicture} alt="card_picture" />
                <h1 className="CardTitle">{cardTitle}</h1>
                <p className="CardExplanation">{cardExplanation}</p>
            </div>
        </>
    );
}

export default Card;