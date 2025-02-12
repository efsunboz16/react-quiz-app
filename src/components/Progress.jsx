import React from 'react'

const Progress = ({ index, points, numQuestion }) => {
    return (
        <div className='w-full h-[100px] flex flex-col justify-center items-center bg-yellow-300 gap-4 p-4'>
            <div className='w-full flex justify-center'>
                <progress className='w-3/4 h-4 rounded-lg overflow-hidden' max={numQuestion} value={index} />
            </div>
            <div className='flex flex-row justify-between w-full px-4'>
                <div className='text-[1.5rem] font-bold'>Question <span className='underline'> {index + 1}</span> of {numQuestion}</div>
                <div className='text-[1.5rem] font-bold'> {points} / 100</div>
            </div>
        </div>
    )
}

export default Progress