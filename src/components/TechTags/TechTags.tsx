import { tagBase, tagContainer, techTag } from "./TechTags.css";

const TechTags = () => {
  const techStack = [
    { name: "TypeScript", key: "typescript" },
    { name: "JavaScript", key: "javascript" },
    { name: "HTML5", key: "html" },
    { name: "CSS3", key: "css" },
    { name: "React", key: "react" },
    { name: "Next.js", key: "nextjs" },
    { name: "Node.js", key: "nodejs" },
    { name: "Angular", key: "angular" },
    { name: "React Native", key: "reactnative" },
    { name: "Tailwind", key: "tailwind" },
    { name: "Vanilla Extract", key: "vanillExtract" },
    { name: "Bootstrap", key: "bootstrap" },
    { name: "jQuery", key: "jquery" },
    { name: "SCSS", key: "scss" },
  ];
  


  return (
    <div className={tagContainer}>
      {techStack.map((tech) => (
        <span
          key={tech.key}
          className={`${tagBase} ${techTag[tech.key as keyof typeof techTag]}`}
        >
          {tech.name}
        </span>
      ))}
    </div>
  )
}

export default TechTags;