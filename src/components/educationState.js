import {useState} from 'react'

const EducationState = () => {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter((prevState) => {
      return prevState + 1
    })
    setCounter((prevState) => {
      return prevState + 1
    })
  }

  return(
    <>
      <h1>State counter: {counter}</h1>
      <button className="btn btn-primary" onClick={incrementCounter}>increment</button>
    </>
  )
}

export default EducationState;