const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Exercise = ({ part, exercise }) => {
  return (
    <p>{part} {exercise}</p>
  )
}

const Content = ({content}) => {
  return (
    <div>
      <Exercise part={content[0].name} exercise={content[0].exercises} />
      <Exercise part={content[1].name} exercise={content[1].exercises} />
      <Exercise part={content[2].name} exercise={content[2].exercises} />
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header text={course.name} />
      <Content content={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App