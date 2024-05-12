import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import img from '../img/Skillify.png'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../Auth/ContextProvider'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import toast from 'react-hot-toast';

function Nav() {
  const { user, LogOut, dark, setDark } = useContext(AuthContext)
  const logoutClick = () => {
    <Navigator to='/' />
    toast.success('Logged Out Successfully')
    LogOut()
  }
  return (
    <div className={`md:px-10 z-20 p-2 ${dark ? 'bg-[#1a1818] text-white' : 'bg-[#E5E6E6] text-black'}`}>
      <div className="navbar justify-between">
        <div className="navbar-start ">
          <div className="dropdown z-20">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${dark ? 'bg-[#212121]' : 'bg-[#f2f2f2]'}`}>
              <NavLink to={'/'} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>Home </NavLink>
              <NavLink to={'/allCourses'} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>Courses </NavLink>
              {
                user &&
                <div className='flex flex-col gap-2'>
                  <NavLink to={'/addCourse'} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
                    Add Course
                  </NavLink>
                  <NavLink  to={'/manageCourses'} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
                    Manage Course
                  </NavLink>
                  <NavLink to={'/bookedCourses'} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
                    Booked-Courses
                  </NavLink>
                  <NavLink to={''} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
                    Course-To-Do
                  </NavLink>
                </div>
              }
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl w-20">
            <img className='rounded-md' src={img} alt="" />
          </Link>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">
            <NavLink to={'/'} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
              Home
            </NavLink>
            <NavLink to={'/allCourses'} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
              Courses
            </NavLink>
            {
              user &&
              <li>
                <details>
                  <summary className='lg:text-lg text-sm'>Dashboard</summary>
                  <ul className={`p-2 z-20 flex flex-col ${dark ? 'bg-[#212121]' : 'bg-[#f2f2f2]'}`}>
                    <NavLink to={'/addCourse'}
                      className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
                      Add Course
                    </NavLink>

                    <NavLink to={'/manageCourses'} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
                      Manage Course
                    </NavLink>

                    <NavLink to={'/bookedCourses'} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
                      Booked-Courses
                    </NavLink>

                    <NavLink to={''} className={({ isActive }) => `p-2 lg:text-lg text-sm hover:bg-orange-400 rounded-lg ease-in-out duration-300 ${isActive ? 'bg-orange-500 rounded-xl' : 'p-2'}`}>
                      Course-To-Do
                    </NavLink>
                  </ul>
                </details>
              </li>
            }

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
                  <button onClick={logoutClick} className=" p-3 font-semibold text-white rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">LogOut</button>
                </div>
              )
                :
                (<div>
                  <Link to='/signin'>
                    <button className="  p-3 font-semibold text-white  rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">Signin</button>
                  </Link>
                </div>)
            }
          </div>
          <Tooltip
            className='z-20'
            id="img"
          />
        </div>
      </div>
    </div>
  )
}

export default Nav