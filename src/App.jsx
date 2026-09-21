const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ name, units }) => {
  return (
    <p>
      {name} {units} units
    </p>
  )
}

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part name={part1.name} units={part1.units} />
      <Part name={part2.name} units={part2.units} />
      <Part name={part3.name} units={part3.units} />
    </div>
  )
}

const Total = ({ part1, part2, part3 }) => {
  return (
    <p>
      Number of units {part1.units + part2.units + part3.units}
    </p>
  )
}

const App = () => {
  const course = 'YOUR CIT-U COURSE'

  const part1 = {
    name: 'Data Analytics',
    units: 3
  }

  const part2 = {
    name: 'Project Management for IT',
    units: 3
  }

  const part3 = {
    name: 'Information Management 2',
    units: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  )
}

export default App