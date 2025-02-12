import React from 'react'

const Nextbutton = ({ dispatch, answer }) => {

    if (answer === null) { return null }
    return (
        <div className='flex flex-row justify-end pr-[10%] pt-10'>
            <button className='bg-blue-500 text-white p-2 rounded-md cursor-pointer' onClick={() => dispatch({ type: 'nextQuestion' })}>Next</button>
        </div>
    )
}

export default Nextbutton
