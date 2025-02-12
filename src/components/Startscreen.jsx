import React from 'react'

const Startscreen = ({ dispatch }) => {
    return (
        <div className='w-full h-[300px] flex flex-col items-center bg-yellow-300 gap-5'>
            <p className='text-[2rem]'>"Welcome to the react quiz"</p>
            <button className='w-[200px] h-[100px]  bg-black text-white rounded-2xl cursor-pointer text-xl font-bold   hover:bg-transparent hover:border-5 hover:border-black hover:text-black  hover:font-bold transition-all' onClick={() => dispatch({ type: "start" })}>START</button>
        </div>
    )
}

export default Startscreen
