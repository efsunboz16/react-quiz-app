import React from 'react'

const Nextbutton = ({ dispatch, answer, numQuestion, index }) => {

    if (answer === null) { return null }

    if (index < numQuestion - 1) {
        return (
            <div className='flex flex-row justify-end pr-[10%] pt-4'>
                <button className='bg-blue-500 text-white p-2 rounded-md cursor-pointer' onClick={() => dispatch({ type: 'nextQuestion' })}>Next</button>
            </div>
        )
    }

    if (index === numQuestion - 1) {
        return (
            <div className='flex flex-row justify-end pr-[10%] pt-4'>
                <button className='bg-blue-500 text-white p-2 rounded-md cursor-pointer' onClick={() => dispatch({ type: 'finish' })}>Finish</button>
            </div>
        )
    }

    return null
}

export default Nextbutton
