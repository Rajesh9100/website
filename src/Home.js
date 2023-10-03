import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const Data = [
    {
        img: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Entire cabin.10 beds',
        para: 'Best Western Cedars...',
        para1: '9100   Anzinger Court',
        price: '$21/night',
    },
    {
        img: 'https://images.pexels.com/photos/6434634/pexels-photo-6434634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Entire cabin.6 beds',
        para: 'Bell By Green King Inns',
        para1: '32932 Judy Hill',
        price: '$250/night',
    },
    {
        img: 'https://images.pexels.com/photos/4186560/pexels-photo-4186560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Entire cabin.9 beds',
        para: 'Half Moon,Sherborne By... ',
        para1: '6732 Killdeer Park',
        price: '$279/night',
    },
    {
        img: 'https://images.pexels.com/photos/2290738/pexels-photo-2290738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Entire cabin.7 beds',
        para: 'White Horse Hotel By... ',
        para1: '38 Sherman Park',
        price: '$90/night',
    },
    {
        img: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Entire cabin.3 beds',
        para: 'Ship And Castle Hotel',
        para1: '3 Crest Line Park',
        price: '$143/night',
    },
    {
        img: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Entire cabin.7 beds',
        para: 'The Windmill Family &...',
        para1: '55796 Jaxwing Junction',
        price: '$112/night',
    },
    {
        img: 'https://images.pexels.com/photos/3068519/pexels-photo-3068519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Entire cabin.2 beds',
        para: 'Unicorn, Gunthorpe By...',
        para1: '79340 Chinook Place',
        price: '$276/night',
    },
    {
        img: 'https://images.pexels.com/photos/2343466/pexels-photo-2343466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Entire cabin.7 beds',
        para: 'Holiday Inn Express...',
        para1: '6 Chive Avenue',
        price: '$776/night',
    }
]

function Home() {
    return (
        <div className='container-fluid home-container'>
            <ul className='d-flex row p-0' >
                {Data.map((each) => {
                    return (
                        <li className='col-xl-3 home-li'>
                            <Link to='/images'><img className='img1' src={each.img} alt='img' /></Link>
                            <p className='entire'> {each.title}</p>
                            <p className='best'>{each.para}</p>
                            <p className='anzinger'> <CiLocationOn />  {each.para1}</p>
                            <div className='d-flex justify-content-between'>
                                <p className='price'>{each.price}</p>
                                <p><AiFillStar />4.8(741)</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home
