import "../styles/Partners.css";
import MairieTinqueux from "../assets/MairieTinqueux.jpeg";
import LogoFCPEMarne from "../assets/LogoFCPEMarne.png";
import AroevenLogo from "../assets/Aroéven.png";
import FamilleRuraleLogo from "../assets/Famille Rurale.png";

function Partners() {
  const partners = [
    {
      name: "Mairie de Tinqueux",
      logo: MairieTinqueux,
      link: "https://ville-tinqueux.fr/",
    },
    {
      name: "FCPE Marne",
      logo: LogoFCPEMarne,
      link: "https://www.fcpe-marne.fr/",
    },
    {
      name: "Aroéven",
      logo: AroevenLogo,
      link: "https://www.aroeven-champagne-ardenne.fr/",
    },
    {
      name: "Famille rurale",
      logo: FamilleRuraleLogo,
      link: "https://grand-est.famillesrurales.org/21/federation-de-la-marne",
    },
  ];

  return (
    <div className='partners-container'>
      <h2>Nos Partenaires</h2>
      <div className='partners-list'>
        {partners.map((partner, index) => (
          <div key={index} className='partner-item'>
            <a
              href={partner.link}
              target='_blank'
              rel='noopener noreferrer'
              title={partner.name}>
              <img src={partner.logo} alt={partner.name} />
            </a>
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
