const App = () => {
  const course = 'Bachelor of Science in Information Technology'

  const part1 = 'Data Analytics'
  const exercises1 = 3

  const part2 = 'Project Management for IT'
  const exercises2 = 3

  const part3 = 'Information Management 2'
  const exercises3 = 3

  return (
    <div>
      <h1>{course}</h1>

      <p>
        {part1} {exercises1} units
      </p>

      <p>
        {part2} {exercises2} units
      </p>

      <p>
        {part3} {exercises3} units
      </p>

      <p>
        Number of units: {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  )
}

export default App