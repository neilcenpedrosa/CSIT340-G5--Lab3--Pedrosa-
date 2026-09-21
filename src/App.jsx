const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.parts[0].name} {props.parts[0].units} units
      </p>

      <p>
        {props.parts[1].name} {props.parts[1].units} units
      </p>

      <p>
        {props.parts[2].name} {props.parts[2].units} units
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units: {props.parts[0].units + props.parts[1].units + props.parts[2].units}
    </p>
  )
}

const Footer = ({ name, courseCode, section }) => {
  return (
    <footer>
      {name} - {courseCode} - {section}
    </footer>
  )
}

const App = () => {
  const studentName = 'NEILCEN P. PEDROSA'
  const courseCode = 'CSIT340'
  const section = 'G5'

  const course = {
    name: 'Bachelor of Science in Information Technology',
    parts: [
      {
        name: 'Data Analytics',
        units: 3
      },
      {
        name: 'Project Management for IT',
        units: 3
      },
      {
        name: 'Information Management 2',
        units: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />

      <Footer
        name={studentName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App