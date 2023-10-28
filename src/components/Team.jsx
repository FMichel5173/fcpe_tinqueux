import "../styles/Team.css";
import Fred from "../assets/Fred.png";
import Silhouette from "../assets/silhouette.png";

function Team() {
  const members = [
    {
      name: "François BERSCHEID",
      role: "Président",
      image: Silhouette,
    },
    {
      name: "Frédéric MICHEL",
      role: "Vice-Président",
      image: Fred,
    },
    {
      name: "Emeline COKLARD",
      role: "Trésorière",
      image: Silhouette,
    },
    {
      name: "Christelle PARINGAUX",
      role: "Trésorière adjointe",
      image: Silhouette,
    },
    {
      name: "Sandrine DEQUIN",
      role: "Secrétaire",
      image: Silhouette,
    },
    {
      name: "Marika RAMUS",
      role: "Secrétaire adjointe",
      image: Silhouette,
    },
    {
      name: "Virginie VILLAIN-LEGER",
      role: "Administratrice",
      image: Silhouette,
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
