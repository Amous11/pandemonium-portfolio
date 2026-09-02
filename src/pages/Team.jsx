import { Inner } from "../components/animation/Inner";
import { TeamMember } from "../components/TeamMember";

const members = [
  {
    imageSrc:
      "https://res.cloudinary.com/amouscloud/image/upload/v1788345424/Photos%20Bio/New_Project_1_ibfwgi.jpg",
    fullName: "Nizar Amous",
    role: "3D Artist",
    description:
      "3D animator specializing in motion graphics, lighting, and procedural setups, with a passion for 3D that dates back to his teenage years. Part of a two-person studio delivering polished 3D animation for brand, commercial, and event work. A lifelong lover of art in all its forms, film, traditional media, installation art, which shapes his visual style. Also creates abstract drawings and interactive installations of his own.",
    direction: "right",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/amouscloud/image/upload/v1788345425/Photos%20Bio/New_Project_2_ckc1ia.jpg",
    fullName: "Marwen Zribi",
    role: "3D Artist",
    description:
      "Co-founder and 3D artist, turning early ideas into precise, tactile worlds through design, animation, and visual effects.",
    direction: "left",
  },
];

export default function Team() {
  return (
    <Inner>
      <div className="team-page-content">
        {members.map((member) => (
          <TeamMember key={member.fullName} {...member} />
        ))}
      </div>
    </Inner>
  );
}
