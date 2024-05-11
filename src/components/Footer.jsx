import React, { useContext } from 'react'
import img from '../img/Skillify.png'
import { FaLinkedin } from "react-icons/fa";
import { AuthContext } from '../Auth/ContextProvider';

function Footer() {
  const {dark} = useContext(AuthContext)
  return (
    <div>
      <footer className={`footer p-10  text-base-content border-b-2 border-dashed ${dark ? 'bg-[#1a1818] text-white border-white' : 'bg-base-300 border-black'}`}>
        <aside>
          <div className='w-16 rounded-xl'>
            <img className='rounded-xl object-cover' src={img} alt="" />
          </div>
          <p>Skillify Ltd.<br />Providing reliable tech since 2010</p>
        </aside>
        <nav>
          <h6 className="footer-title">Courses</h6>
          <a className="link link-hover">Business</a>
          <a className="link link-hover">Technology</a>
          <a className="link link-hover">Creativity</a>
          <a className="link link-hover">Health & Fitness</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
           <a href="https://www.linkedin.com/in/yeasinarafat121/"><FaLinkedin size={24}/></a>
            <a href='https://www.facebook.com/yeasinarafat.arafat.9026/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>

      </footer>
      <footer className={`footer footer-center p-4  text-base-content ${dark ? 'bg-[#1a1818] text-white' : 'bg-base-300 '}`}>
        <aside>
          <p>Copyright © 2024 - All right reserved by Skillify Ltd</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer