import "../styles/Team.css";

function Team() {
  const members = [
    {
      name: "François BERSCHEID",
      role: "Président",
      image: "../src/assets/silhouette.png",
    },
    {
      name: "Frédéric MICHEL",
      role: "Vice-Président",
      image: "../src/assets/Fred.png",
    },
    {
      name: "Emeline COKLARD",
      role: "Trésorière",
      image: "../src/assets/silhouette.png",
    },
    {
      name: "Christelle PARINGAUX",
      role: "Trésorière adjointe",
      image: "../src/assets/silhouette.png",
    },
    {
      name: "Sandrine DEQUIN",
      role: "Secrétaire",
      image: "../src/assets/silhouette.png",
    },
    {
      name: "Marika RAMUS",
      role: "Secrétaire adjointe",
      image: "../src/assets/silhouette.png",
    },
    {
      name: "Virginie VILLAIN-LEGER",
      role: "Administratrice",
      image: "../src/assets/silhouette.png",
    },
  ];

  return (
    <div className='team-container'>
      <h2>Conseil d'administration</h2>
      <div className='members-container'>
        {members.map((member) => (
          <div className='member-card' key={member.name}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
