import { Inner } from "../components/animation/Inner";
import { ProjectDescription } from "../components/ProjectDescription";
import { TeamMember } from "../components/TeamMember";
import logo from "../assets/logo.svg";

const company = {
  title: "Pandemonium Visuals",
  description: "Nizar and Marwen met in 2019 as freelancers on the same project, hired separately by a company that didn't know it was introducing them. The work went well, and when an advertising campaign for a major booking platform put them on the same team a second time, they could see why. Their strongest results were coming from the conversations before production began, while they were still working out what the brand actually needed to say. Pandemonium Visuals exists to protect that stage of the work.<br /><br />Today we handle product visualization, motion design for brands, and visuals for events. Every project still opens the same way, with questions about the brand rather than a rush to execute the brief, and it stays open to any tool or technique that pushes the result past the last one.",
};

const members = [
  {
    imageSrc:
      "https://res.cloudinary.com/amouscloud/image/upload/v1788345424/Photos%20Bio/New_Project_1_ibfwgi.jpg",
    fullName: "Nizar Amous",
    role: "3D Artist",
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
      <header className="team-page-header">
        <img src={logo} alt="Pandemonium Visuals" />
      </header>
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
