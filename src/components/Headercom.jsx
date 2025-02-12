import React from 'react'
import logo from '../photos/photo.png' // Adjust the path as needed

const Header = () => {
    return (
        <div className='flex flex-row items-center justify-center bg-yellow-300 text-white p-4 gap-20 '>
            <img className='w-40' src={logo} alt="Logo" />
            <p className='text-[5rem] font-["Teko"] text-black'>
                QUIZ APP
            </p>
        </div>
    )
}

export default Header
