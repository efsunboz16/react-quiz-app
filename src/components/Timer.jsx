import React, { useEffect } from 'react'

const Timer = ({dispatch, secondRemaining}) => {

    const min = Math.floor(secondRemaining / 60);
    const sec = secondRemaining % 60;

useEffect(() => {
   const id =  setInterval(() => {
        dispatch({ type: 'tick'});
    }, 1000);
    return () => clearInterval(id);
}, [dispatch]);


  return (
    <div className='flex flex-row justify-start pl-[10%] pt-4 text-2xl font-bold'>
           {min < 10 && '0'}{min}:{sec < 10 && '0'}{sec}
            </div>
  )
}

export default Timer
