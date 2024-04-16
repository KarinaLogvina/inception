const jobData = [
  {
    title: "Troffcons",
    job: "FRONT-END ENGINEER",
    duration: "2024 – PRESENT",
    points: [
      "Create CRM widgets",
      "Supervise big project"
    ]
  },
  {
    title: "HDO.EE",
    job: "FRONT-END ENGINEER",
    duration: "2021 – PRESENT",
    points: [
      "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices",
      "Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions. Liaised between marketing and IT on web development projects integrating front-end assets to back-end systems.",
      "Was a supervisor for one intern developer",
      "Created custom UI-libraries on TypeScript."
    ]
  },
  {
    title: "BSTU",
    job: "Scientific researcher",
    duration: "2018 – 2023",
    points: [
      "Supervised 5 students with theirs diploma project. All student past their evaluation on high score",
      "Chemistry technology teacher"
    ]
  },
]

export const JobExperience = () => {
  return(
    <div>
      <div className="font-light pb-2 border-b">EMPLOYMENT HISTORY</div>
      {
        jobData.map((item) => (
          <div className="py-2">
            <div className="font-light">{item.title}</div>
            <div>{item.job}</div>
            <div className="pb-2">{item.duration}</div>
            {item.points.map((i) => (
              <li>{i}</li>
            ))}
          </div>
        ))
      }
    </div>
  )
}