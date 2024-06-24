import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer className='homeFooter'>
        <div className='footerTop'>
            <div className='social'>
            <img src='/images/twitter.png' alt='1'  className='socialImages'></img>
            <img src='/images/instagram.png' alt='2'  className='socialImages'></img>
            <img src='/images/facebook.png' alt='3' className='socialImages'></img>
            <img src='/images/youtube.png' alt='4' className='socialImages'></img>
            </div>
            <div className='footerLists'>
                <ul className="footerItems">
                    <li className='listHeading'>Product</li>
                    <li className='listContent'>Download</li>
                    <li className='listContent'>Nitro</li>
                    <li className='listContent'>Status</li>
                    <li className='listContent'>App Directory</li>
                    <li className='listContent'>New Mobile Experience</li>
                </ul>
                <ul className="footerItems">
                    <li className='listHeading'>Company</li>
                    <li className='listContent'>Download</li>
                    <li className='listContent'>Nitro</li>
                    <li className='listContent'>Status</li>
                    <li className='listContent'>App Directory</li>
                    <li className='listContent'>Newsrooms</li>
                </ul>
                <ul className="footerItems">
                    <li className='listHeading'>Resources</li>
                    <li className='listContent'>Download</li>
                    <li className='listContent'>Nitro</li>
                    <li className='listContent'>Status</li>
                    <li className='listContent'>App Directory</li>
                    <li className='listContent'>Guidelines</li>
                    <li className='listContent'>Resources</li>
                    <li className='listContent'>Download</li>
                    <li className='listContent'>Nitro</li>
                    <li className='listContent'>Status</li>
                    <li className='listContent'>App Directory</li>
                    <li className='listContent'>Guidelines</li>
                    <li className='listContent'>Resources</li>
                    <li className='listContent'>Download</li>
                </ul>
                    <ul className="footerItems">
                    <li className='listHeading'>Policies</li>
                    <li className='listContent'>Download</li>
                    <li className='listContent'>Nitro</li>
                    <li className='listContent'>Status</li>
                    <li className='listContent'>App Directory</li>
                    <li className='listContent'>Guidelines</li>
                </ul>
            </div>
        </div>
        <hr className='line'/>
        <div className='footerEnd'>
            <div className='title'>
                <img src = '/images/icons8-discord-48.png'/>
                <span>Discord</span>
            </div>
            <button className='loginBtn'>Sign In</button>
        </div>
    </footer>
  )
}
