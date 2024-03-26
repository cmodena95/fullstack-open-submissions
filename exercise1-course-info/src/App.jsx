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

const Content = (props) => {
  return (
    <div>
      <Exercise part={props.part1[0]} exercise={props.part1[1]} />
      <Exercise part={props.part2[0]} exercise={props.part2[1]} />
      <Exercise part={props.part3[0]} exercise={props.part3[1]} />
    </div>
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of exercises: {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header text={course} />
      <Content part1={[part1, exercises1]} part2={[part2, exercises2]} part3={[part3, exercises3]}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App