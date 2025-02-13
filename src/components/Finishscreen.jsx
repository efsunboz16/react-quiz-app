import React from 'react'

const Finishscreen = ({ points }) => {
    const percentage = (points / 100) * 100

    return (
        <div className='flex justify-center items-center h-[200px] text-3xl'>
            Your score is {percentage}%
        </div>
    )
}

export default Finishscreen
