const Header = (props) => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '35px' }}>
      <h1
        style={{
          color: '#DAB1DA',
          fontSize: '28px',
          margin: 0
        }}
      >
        {props.course}
      </h1>
    </header>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <div
          key={part.name}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
            fontSize: '18px'
          }}
        >
          <span style={{ color: '#ffffff' }}>
            {part.name}
          </span>

          <span style={{ color: '#DAB1DA' }}>
            - {part.units} units
          </span>
        </div>
      ))}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce(
    (sum, part) => sum + part.units,
    0
  )

  return (
    <p
      style={{
        textAlign: 'right',
        color: '#DAB1DA',
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '25px'
      }}
    >
      Total Units: {total}
    </p>
  )
}

const Footer = ({ name, courseCode, section }) => {
  return (
    <footer
      style={{
        marginTop: '35px',
        paddingTop: '20px',
        borderTop: '2px solid #555',
        color: '#bbbbbb',
        fontSize: '16px'
      }}
    >
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
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#242424',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        padding: '40px 20px',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          maxWidth: '650px',
          margin: '0 auto'
        }}
      >
        <Header course={course.name} />

        <Content parts={course.parts} />

        <Total parts={course.parts} />

        <Footer
          name={studentName}
          courseCode={courseCode}
          section={section}
        />
      </div>
    </div>
  )
}

export default App