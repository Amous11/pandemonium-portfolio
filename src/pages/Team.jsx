import { Inner } from "../components/animation/Inner";
import { TeamMember } from "../components/TeamMember";

const members = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85",
    fullName: "Nizar Amous",
    role: "Creative Director",
    description:
      "Co-founder and creative director, shaping the visual language behind Pandemonium's product films and motion work.",
    direction: "right",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
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
