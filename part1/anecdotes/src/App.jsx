import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(8))
  
  const randomNum = Math.floor(Math.random() * 8)
  
  const upvote = (number) => {
    let copy = [...points]
    copy[number] += 1
    setPoints(copy)
  }

  const favourite = () => {
    const votes = Math.max.apply(Math, points)
    const top = points.findIndex((num) => num == votes)
    return anecdotes[top]
  }


  return (
    <div>
      <Header text="Daily anecdote"/>
      
      {anecdotes[selected]}
      <Button onClick={() => setSelected(randomNum)} text="random quote"/>
      <Button onClick={() => upvote(selected)} text="vote"/>
      {points[selected]}

      <Header text="Favourite anecdote"/>

      <p>{favourite()}</p>
    </div>
  )
}

export default App
