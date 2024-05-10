import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import img from '../img/Skillify.png'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../Auth/ContextProvider'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Nav() {
  const { user, LogOut, dark, setDark } = useContext(AuthContext)
  const logoutClick = () => {
    <Navigator to='/' />
    LogOut()
  }
  return (
    <div className={`md:px-10 p-2 ${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}>
      <div className="navbar justify-between">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${dark ? 'bg-[#212121]' : 'bg-[#f2f2f2]'}`}>
              <li className='p-2  text-lg'>Courses</li>
              <li className='p-2  text-lg'>Add Course</li>
              <li className='p-2  text-lg'>Manage Course</li>
              <li className='p-2  text-lg'>Booked-Courses</li>
              <li className='p-2  text-lg'>Course-To-Do</li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl w-20">
            <img className='rounded-md' src={img} alt="" />
          </Link>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">
            <li className='lg:text-lg text-sm'><a>Courses</a></li>
            <li>
              <details>
                <summary className='lg:text-lg text-sm'>Dashboard</summary>
                <ul className={`p-2  ${dark ? 'bg-[#212121]' : 'bg-[#f2f2f2]'}`}>
                  <li className='p-2 lg:text-lg text-sm'>Add Course</li>
                  <li className='p-2 lg:text-lg text-sm'>Manage Course</li>
                  <li className='p-2 lg:text-lg text-sm'>Booked-Courses</li>
                  <li className='p-2 lg:text-lg text-sm'>Course-To-Do</li>
                </ul>
              </details>
            </li>

          </ul>
        </div>
        <div className="flex  w-fit  items-center overflow-hidden">
          <div className='md:mx-6 mx-2 mode'>
            {dark ?
              <div onClick={() => setDark(false)}>
                <MdOutlineDarkMode size={30} />
              </div> :
              <div onClick={() => setDark(true)}>
                <MdDarkMode size={30} />
              </div>}
          </div>
          <div className='w-fit lg:mr-10  mr-0'> 
            {
              user ? (
                <div className='flex items-center justify-center gap-3 mx-10'>
                  <div className=' w-10 h-10 rounded-full gap-2'>
                    <img className='img w-full h-full rounded-full object-cover inline-block' src={user?.photoURL
                    } data-tooltip-id="img" data-tooltip-content={user?.displayName} />
                  </div>
                  <button onClick={logoutClick} className=" p-3 font-semibold text-white rounded-xl bg-gradient-to-r from-[#E6A303] to-[#876514">LogOut</button>
                </div>
              )
                :
                (<div>
                  <Link to='/signin'>
                    <button className="  p-3 font-semibold text-white  rounded-xl bg-gradient-to-r from-[#E6A303] to-[#876514]">Signin</button>
                  </Link>
                </div>)
            }
          </div>
          <Tooltip
            id="img"
          />
        </div>
      </div>
    </div>
  )
}

export default Nav