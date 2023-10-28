import "../styles/Partners.css";

function Partners() {
  const partners = [
    {
      name: "Mairie de Tinqueux",
      logo: "src/assets/MairieTinqueux.jpeg",
      link: "https://ville-tinqueux.fr/",
    },
    {
      name: "FCPE Marne",
      logo: "src/assets/Logo FCPE Marne.png",
      link: "https://www.fcpe-marne.fr/",
    },
    {
      name: "Aroéven",
      logo: "src/assets/Aroéven.png",
      link: "https://www.aroeven-champagne-ardenne.fr/",
    },
    {
      name: "Famille rurale",
      logo: "src/assets/Famille Rurale.png",
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
