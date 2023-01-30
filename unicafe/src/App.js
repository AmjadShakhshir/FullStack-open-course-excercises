import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = [
    {
      good: function () { setGood(good + 1); },
      text: 'good',
      result: good,
      score: 1,
    },
    {
      neutral: function () { setNeutral(neutral + 1) },
      text:'neutral',
      result: neutral,
      score:0,
      },
    {
      bad: function () { setBad(bad + 1) },
      text:'bad',
      result: bad,
      score: -1,
    }
  ]

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={feedback}  />
      <h1>statitics</h1>
      {(good || neutral || bad) ? <Statistics result={feedback} /> : "No feedback given"}
    </div>
  )
}
export default App;
