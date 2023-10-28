import Footer from "./Footer";
import "../styles/ContactInfo.css";

function ContactInfo() {
  const contactDetails = {
    postalAddress: "MDA - Rue de la Croix Cordier, 51430 TINQUEUX",
    email: "fcpe.cltinqueux51@gmail.com",
    phoneNumber: "à venir",
    contactPageLink: "https://www.fcpe-marne.fr/conseil-local/fcpe-tinqueux/",
  };

  return (
    <>
      <div className='contact-info-container'>
        <h2>Coordonnées</h2>
        <p>
          <strong>Adresse postale :</strong> {contactDetails.postalAddress}
        </p>
        <p>
          <strong>Email :</strong> {contactDetails.email}
        </p>
        <p>
          <strong>Téléphone :</strong> {contactDetails.phoneNumber}
        </p>
        <a
          href={contactDetails.contactPageLink}
          target='_blank'
          rel='noopener noreferrer'
          className='contact-btn'>
          Contactez-nous
        </a>
      </div>
      <Footer />
    </>
  );
}

export default ContactInfo;
