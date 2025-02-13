import React from 'react'

const Finishscreen = ({ points, dispatch }) => {
    const percentage = (points / 100) * 100

    return (
        <div className='flex flex-col justify-center items-center h-[200px] text-3xl'>
            Your score is {percentage}%
            <div className='flex flex-row justify-center items-center pt-4'>
                <button className='bg-blue-500 text-white p-2 rounded-md cursor-pointer' onClick={() => dispatch({ type: 'restart' })}>Restart</button>
            </div>
        </div>
    )
}

export default Finishscreen
