import "../styles/News.css";

function News() {
  const newsItems = [
    {
      title:
        "Classe de Seconde : en quoi consistent les tests de positionnement ?",
      date: "25 septembre 2023",
      content:
        "Les élèves de Seconde générale, technologique et professionnelle doivent passer jusqu’au 29 septembre 2023 des tests de positionnement qui permettent d’évaluer leurs compétences en Français et en Mathématiques. Retour sur le contenu de ces tests.",
      link: "https://www.studyrama.com/formations/diplomes/bac/seconde/classe-de-seconde-en-quoi-consistent-les-tests-de-105001?fbclid=IwAR2GYjrlqdXecZpdT-28TTvSz8WH-zqFfY-3KJnPOXW7QqtSTc0QDid0scU",
    },
    {
      title: "Comment l'enfant apprend-il à écrire ?",
      date: "05 août 2023",
      content: `L’écriture est un vecteur précieux de la parole. C’est une compétence dont l'enfant a besoin pour participer pleinement aux activités scolaires et se sentir en réussite. Elle semble intuitive pour beaucoup d’adultes et pourtant, elle nécessite, dès le plus jeune âge, une pratique régulière d’activités qui respectent et stimulent à la fois son développement. 
        Bien que l’apparition des premiers mots écrits en lettres-bâton soit déjà une victoire, savoir écrire, c’est plus que savoir dessiner des lettres. 
        Savoir écrire, c’est : ...`,
      link: "https://www.123ecriture.fr/articles?fbclid=IwAR1ZvB-ejxRJQnznPgRcxh2L7BNOf03I1gM4j6rTEHOXrW6xi3NJDYiT3QU",
    },
    {
      title:
        "La FCPE propose un kit de fournitures scolaires plus abordable pour les collégiens de Reims, Tinqueux et Châlons-en-Champagne",
      date: "10 juillet 2023",
      content:
        "Pour la seconde année, la FCPE offre un kit de fournitures à prix réduit aux collégiens de Reims, Tinqueux et Châlons-en-Champagne. Après un test réussi en 2022, le kit, adapté aux listes fournies par les écoles, contient tout le matériel nécessaire et les livrets d'activités demandés. L'initiative vise à réduire les coûts pour les parents, offrant des matériaux de qualité à des prix avantageux, jusqu'à 25% moins cher en moyenne. Les kits varient de 80 à 85 euros pour une entrée en 6e à 35-40 euros pour les autres niveaux. La distribution se fera fin août à la FCPE de Reims.",
      link: "https://lnkd.in/eM45Tt-T",
    },
  ];

  return (
    <div className='news-container'>
      <h2>Actualités</h2>
      {newsItems.map((news, index) => (
        <div key={index} className='news-item'>
          <h3>{news.title}</h3>
          <p>
            <em>{news.date}</em>
          </p>
          <p>{news.content}</p>
          <a href={news.link} target='_blank' rel='noopener noreferrer'>
            Lire plus
          </a>
        </div>
      ))}
    </div>
  );
}

export default News;
