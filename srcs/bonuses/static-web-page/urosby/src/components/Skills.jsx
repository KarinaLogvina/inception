const skills = [
  "JavaScript",
  "React",
  "Redux",
  "Redux-Saga",
  "CSS-Frameworks",
  "TypeScript",
  "HTML5",
  "CSS/SCSS",
  "Cypress",
  "Jest",
  "Storybook",
  "Git",
  "Bitbucket",
  "C++",
]

export const Skills = () => {
  return(
    <div className="text-left pt-2 border-t">
      <div className="font-light pb-2">SKILLS</div>
      <div className="grid grid-cols-4">
        {skills.map((item) => (<div className="col-span-2">{item}</div>))}
      </div>
    </div>
  )
}