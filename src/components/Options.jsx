import React, { useEffect, useState } from 'react'

const Options = ({ question, answer, dispatch }) => {

    const hasAnswered = answer !== null

    const [shuffledAnswers, setShuffledAnswers] = useState([])

    useEffect(() => {
        if (question) {
            const answers = [...question.incorrect_answers, question.correct_answer]
            setShuffledAnswers(shuffleArray(answers))
        }
    }, [question])

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    return (
        <div>
            <div className='flex flex-col gap-2'>
                {shuffledAnswers.map((answerOption, index) => (
                    <button className={`cursor-pointer w-[70vw] h-[3rem] border-2 border-black flex items-center justify-center ${answerOption === answer ? 'ml-4' : ''} ${hasAnswered ? answerOption === question.correct_answer ? 'bg-green-400 text-white' : 'bg-red-400 text-white' : ''} `} key={index} disabled={hasAnswered} onClick={() => dispatch({ type: 'newAnswer', payload: answerOption })} >{answerOption}</button>
                ))}
            </div>
        </div>
    )
}

export default Options
