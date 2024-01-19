import React from 'react'
import '../Home.css';
const Header = () => {
  return (
    <>
      <div className='header__section'>
            <div className="header-logo">
                <img src="logo.png" alt='logo-img'/>
            </div>
            <div className="header-button">
                    <a href="Home.js" className='anchor-hd'>
                    <span className="donload-ios-btn" >
                        <span className='apple-icon'><i className="fa-brands fa-apple"></i></span>
                        <span className='ios-text'>Download for iOS</span>
                        <span className='right-arrow-icon'><i className="fa-solid fa-arrow-right"></i></span>
                     </span>
                    </a>
            </div>
      </div>
    </>
  )
}

export default Header
