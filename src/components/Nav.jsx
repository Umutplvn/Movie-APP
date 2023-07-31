import React, { useContext, useEffect } from 'react'
import Typed from 'react-typed'
import {BsFillSunFill} from "react-icons/bs"
import {BsFillMoonStarsFill} from "react-icons/bs"
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

const Nav = () => {

const {myTheme, setMyTheme} =useContext(ThemeContext)

useEffect(() => {
if(myTheme==="dark"){
  document.documentElement.classList.add("dark")
}else{
  document.documentElement.classList.remove("dark")
}
}, [myTheme])


const handleTheme= ()=>{
  setMyTheme (myTheme== "dark" ? "light" : "dark")
}

  return (
    <div className="flex border justify-between dark:bg-slate-300 dark:text-black bg-black h-[6rem] items-center p-4">
        <Link to="/" className="text-white font-bold dark:text-black w-[10rem] hover:cursor-pointer">
        <Typed strings={["REACT MOVIE APP"]} typeSpeed={90} loop/>
        </Link>
<div className="flex gap-3 hover:cursor-pointer ">
  {myTheme=== "dark" ? <BsFillSunFill onClick={handleTheme} className="text-white  dark:text-black"/>
: <BsFillMoonStarsFill onClick={handleTheme} className="text-white dark:text:black"/>
}
</div>

    </div>
  )
}

export default Nav