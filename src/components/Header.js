import React from 'react'
import { Link } from 'react-router-dom'
import { TiLocation } from "react-icons/ti";
import { VscSearch } from "react-icons/vsc";


function Header() {
    return (
        <div className='main-header'>
            <ul className='lists'>

                <li className='list1'><Link className='fis' to='/frontpage'><TiLocation />.fis</Link></li>
                <li className='list'><Link className='links' to='/home'>Home</Link></li>
                <li className='list'>Five columns</li>
                <li className='list'>Listing Page</li>
                <li className='list'>Templates</li>
                <li className='list'>Other Pages</li>
                <li className='list2'><VscSearch /></li>
            </ul>

        </div>
    )
}

export default Header
