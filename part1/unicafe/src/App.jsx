import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Stat = (props) => <td>{props.name} {props.value}</td>

const Statistics = (props) => {
  const total = props.values[0] + props.values[1] + props.values[2]
  const average = props.values[0] - props.values[2]
  const positive = (props.values[0] / (props.values[0] + props.values[2] + props.values[1])) * 100

  if (total == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          <Stat name="good" value={props.values[0]}/>
          <Stat name="neutral" value={props.values[1]}/>
          <Stat name="bad" value={props.values[2]}/>
          <Stat name="total" value={total}/>
          <Stat name="average" value={average}/>
          <Stat name="positive" value={positive}/>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Header text="Give feedback"/>
      
      <Button text="good" onClick={() => handleGood()} />
      <Button text="neutral" onClick={() => handleNeutral()} />
      <Button text="bad" onClick={() => handleBad()} />

      <Header text="Statistics"/>
      <Statistics values={[good, neutral, bad]} />
    </div>
  )
}

export default App