type SkillGroupProps = {
  title: string
  skills: readonly string[]
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <article className="skill-group">
      <h3>{title}</h3>
      <ul className="tag-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  )
}
