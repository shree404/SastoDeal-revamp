import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between bg-[#45A69B] p-1 pl-20 pr-11 max-sm:p-0 max-sm:text-sm'>
            <div>
                <p>Welcome to SastoDeal.com! Enjoy Shopping</p>
            </div>

            <ul className='flex justify-evenly'>
                <li>Vendor Login <span>| </span></li>
                <li>Sell on Sastodeal <span>| </span></li>
                <li>Raise a Ticket <span>| </span></li>
                <li>Order Tracking</li>
            </ul>

        </div>
    )
}

export default Navbar;