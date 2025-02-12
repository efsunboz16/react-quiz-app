import React, { useEffect, useState } from 'react'
import Options from './Options'

const Questions = ({ question, answer, dispatch }) => {


    return (
        <div className='w-full items-center flex flex-col gap-5'>
            <div>{question.question}</div>
            <Options question={question} dispatch={dispatch} answer={answer} />
        </div>
    )
}

export default Questions
