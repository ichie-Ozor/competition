import React from 'react'
import './Nav.css'
import logo from './img1/Vector.png'
// import close from './img1/close.png'

function Nav() {
  return (
    <div className='nav'>
      <div className='name'>get<span>linked</span></div>
      {/* <div className='dropdown'>
        <img src={close} alt='' className='close'/>
        <div className='close-inner'>
          <p>Timeline</p>
          <p>Overview</p>
          <p>FAQs</p>
          <p>Contact</p>
          <button>Register</button>
        </div>
      </div> */}
      <img src={logo} alt='' className='logo'/>
      <div className='nav-item'>
        <div className='timeline'>Timeline</div>
        <div className='overview'>Overview</div>
        <div className='faq'>FAQs</div>
        <div className='contact'>Contact</div>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Nav
