import React from 'react'
import '../Home.css'
import Ioscontent from './Ioscontent';
const MainCon = () => {
  function niha() {
  }
  return (
    <>
    <div className="main-section-parent">
      <div className="main-section">
        <h1>
          Life is defined by our actions. Everything counts. Books you’ve read, kilometers you’ve run, every cup of coffee, every takeoff and every landing, every workout, every headspace session, every movie, every night out, and every glass of water the next morning. Everything counts. And everything that counts — shapes us
        </h1>
      </div>
      <div className='img-uper-div' data-framer-background-image-wrapper="true">
        <img id="expand" className="main-onr-img" onScroll={niha()} src="https://framerusercontent.com/images/56ju3mAW27mbB42uk0quCjIveY.png?scale-down-to=4096" alt="one-img" />
      </div>
      <Ioscontent  heading="Haptic is a simple and minimalistic action-based journal for iPhone." btnname="Try Now" imgn="near-try-now.png" actionbasedn="https://framerusercontent.com/images/drVkfahtnzPVEHwNnr12XAYy7ds.png?scale-down-to=1024" imgnalt="near-try-now" actionbalt="action-Based-img"/>
      <div className='only-content'>
        <h1>Principles of <br />creation. Our core ,<br />values and beliefs.</h1>

        <h2>We believe that life is defined by actions and memories, not by a collection of facetuned photos.</h2>
        <h2>We aim to build technology that inspires the next steps, instead of focusing on missed opportunities.</h2>
        <h2>Privacy is a fundamental right. Haptic doesn't collect any personal information and doesn't have access to the content that you share in the app.</h2>
        <h2>All your data belongs to you. Every piece of information in the app is encrypted, stored locally on your iPhone and never synced with external servers.</h2>
        <h2>Digital products are tools, not the center of one's life. The app is visible when you need it, and keeps silent when you don't.</h2>
      </div>
      </div>
    </>
  )
}

export default MainCon;