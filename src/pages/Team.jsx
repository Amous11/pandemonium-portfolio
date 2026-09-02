import { Inner } from "../components/animation/Inner";
import { ProjectDescription } from "../components/ProjectDescription";
import { TeamMember } from "../components/TeamMember";

const company = {
  title: "Pandemonium",
  description: `Pandemonium is a creative studio crafting product films, 3D animation,
    and motion design. Founded by a creative director and a 3D artist, we turn
    early ideas into precise, tactile visuals for brands.`,
};

const members = [
  {
    imageSrc:
      "https://res.cloudinary.com/amouscloud/image/upload/v1788345424/Photos%20Bio/New_Project_1_ibfwgi.jpg",
    fullName: "Nizar Amous",
    role: "Creative Director",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/amouscloud/image/upload/v1788345425/Photos%20Bio/New_Project_2_ckc1ia.jpg",
    fullName: "Marwen Zribi",
    role: "3D Artist",
  },
];

export default function Team() {
  return (
    <Inner>
      <div className="team-page-content">
        <ProjectDescription title={company.title} desc={company.description} />
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {members.map((member) => (
            <TeamMember key={member.fullName} {...member} />
          ))}
        </div>
      </div>
    </Inner>
  );
}
