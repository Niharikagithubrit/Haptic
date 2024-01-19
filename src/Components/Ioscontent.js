import React from 'react'

const Ioscontent = (props) => {
  return (
    <>
      <div className='Action-Based'>
        <div className='Action-Based-left'>
          <h1>{props.heading}</h1>
          <div className='action-btn'>
            <div className="header-button try-btn">
              <a href="Home.js" className="anchor-hd"><span className="donload-ios-btn"><span className="apple-icon"><i className="fa-brands fa-apple"></i></span><span className="ios-text">{props.btnname}</span><span className="right-arrow-icon"><i className="fa-solid fa-arrow-right"></i></span></span></a></div>
            <div className='action-btn-img'>
              <img src={props.imgn} alt={props.imgnalt} />
            </div>
          </div>
        </div>
        <div className='Action-Based-img'>
          <img src={props.actionbasedn} alt={props.actionbalt} />
        </div>
      </div>
    </>
  )
}

export default Ioscontent
