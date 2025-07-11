import React from 'react'
import { Link } from 'react-router-dom'

const ServicePage = () => {
    return (
        <div className='bg-amber-300'>
            <span className='text-red-400'>ServicePage</span> 

            <Link to='/'><p className='text-emerald-600'>Go to Home</p></Link>
        </div>
    )
}

export default ServicePage;
