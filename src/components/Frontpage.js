import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Frontpage() {
    return (
        <div className='main-div' >
            <div className='main-text'>
                <h1 className='main-h1'>Hotel, car &<br />
                    experiences</h1>
                <p className='main-para'>Accompanying us, you have a trip full of experiences. With<br />
                    Chisfis, booking accommodation, resort villas, hotels</p>
                <div>
                    <button className='main-btn' type='button'>Start your search</button>
                </div>
            </div>
            <div>
            <img className='main-img' src='https://chisfis-template.vercel.app/static/media/hero-right.ee78c0ffae92062cbe4e.png ' alt='img' />
            </div>

        </div>
    )
}

export default Frontpage
