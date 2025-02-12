import { useEffect, useReducer, useState } from 'react'
import Header from './components/Headercom'
import Main from './components/Main'
import Loader from './components/Loader'
import Error from './components/Error'
import Startscreen from './components/Startscreen'
import Questions from './components/Questions'
import Nextbutton from './components/Nextbutton'
import Progress from './components/Progress'

const initialState = {
  questions: [],
  // 'loading', 'ready', 'error', 'finished', 'active' 
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'dataFailed':
      return { ...state, status: 'error' }
    case 'start':
      return { ...state, status: 'active' }
    case 'newAnswer':
      const question = state.questions[state.index]
      return { ...state, answer: action.payload, points: action.payload === question.correct_answer ? state.points + 10 : state.points }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null }
    default:
      throw new Error('Action unknown')
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(reducer, initialState)

  const numQuestion = questions.length

  useEffect(() => {
    fetch('http://localhost:5000/results')
      .then(response => response.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(error => dispatch({ type: 'dataFailed' }))
  }, [])

  return (
    <>
      <div className='w-full h-[100vh] flex flex-col bg- bg-yellow-300'>
        <Header />
        <Progress index={index} points={points} numQuestion={numQuestion} />
        <Main>
          {status === 'loading' && <Loader />}
          {status === 'error' && <Error />}
          {status === 'ready' && <Startscreen dispatch={dispatch} />}
          {status === 'active' && <Questions question={questions[index]} dispatch={dispatch} answer={answer} />}
        </Main>
        <Nextbutton dispatch={dispatch} answer={answer} />
      </div>
    </>
  )
}

export default App
