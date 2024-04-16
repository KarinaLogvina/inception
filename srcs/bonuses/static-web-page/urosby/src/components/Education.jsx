const educationData = [
  {
    title: "Ecole 42",
    location: "Paris, France",
    duration: "2021 - current",
    description: "42 is a future-proof computer science training to educate the next generation of software engineers. The 42 program takes a project-based approach to progress and is designed to develop technical and people skills that match the expectations of the labor market."
  },
  {
    title: "Belarusian State Technological University",
    location: "Minsk, Belarus",
    duration: "2013 - 2020",
    description: "Master degree in chemical engineering. Author and coauthor for 4 scientific articles."
  },
]

export const Education = () => {
  return (
    <div className="text-left">
      <div className="font-light">EDUCATION</div>
      {
        educationData.map((item) => (
          <div className="py-2">
            <div className="font-light">{item.title}</div>
            <div className="pb-2">{item.duration}</div>
            <div>{item.description}</div>
          </div>
        ))
      }
    </div>
  )
}