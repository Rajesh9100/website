import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { TiLocation } from "react-icons/ti";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
    return (
        <div className='d-flex justify-content-between '>
 
            <div>
                <p>  <TiLocation />.fis</p>
                <p><AiOutlineFacebook />Facebook</p>
                <p><AiOutlineTwitter />Twitter</p>
                <p><AiOutlineYoutube />Youtube</p>
                <p>< AiOutlineInstagram />Instagram</p>
            </div>
            <div>
                <p className='started'> Getting started</p>
                <p className='design'> Installation</p>
                <p className='design'> Release Notes</p>
                <p className='design'>Upgrade Guide</p>
                <p className='design'>Browser Support</p>
                <p className='design'>Editor Support</p>
            </div>
            <div>
                <p className='started'>Explore</p>
                <p className='design'> Design features</p>
                <p className='design'> Prototyping</p>
                <p className='design'> Design systems</p>
                <p className='design'> Pricing</p>
                <p className='design'> Security</p>
            </div>
            <div>
                <p className='started'>Resources</p>
                <p className='design'> Best practices</p>
                <p className='design'> Support</p>
                <p className='design'> Developers</p>
                <p className='design'> Learn design</p>
                <p className='design'> Releases</p>
            </div>
            <div>
                <p className='started'> Community</p>
                <p className='design'> Discussion Forums</p>
                <p className='design'> Code of Conduct</p>
                <p className='design'> Community Resources</p>
                <p className='design'> Contributing</p>
                <p v> Concurrent Mode</p>
            </div>
        </div>
    )
}

export default Footer
