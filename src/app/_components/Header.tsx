// components/Header.jsx
"use client"
import { useState } from 'react';
import Image from 'next/image';




const Header = () => {
    // Dummy username
    const username = "John";

    return (
        <div className='flex justify-between items-center w-[1440px] h-[100px] mx-auto'>
            <div className='p-5 m-5 text-4xl font-bold mt-12'>
                <h1>ECOMMERCE</h1>
            </div>

            <div className='flex space-x-8 mt-12'>
                <p>Categories</p>
                <p>Sales</p>
                <p>Clearance</p>
                <p>New stock</p>
                <p>Trending</p>
            </div>

            <div className=' items-center space-x-8'>
                <div className='flex space-x-4'>
                    <p>Help</p>
                    <p>Orders & Returns</p>
                    {/* Username */}
                    <p>Hi, {username}</p>
                </div>

                <div className='display float-end flex space-x-8  mt-5'>
                    {/* Search icon */}
                    <Image src="/search.svg" alt="Search" width={30} height={40} />


                    {/* Cart icon */}
                    <Image src="/cart.svg" alt="cart" width={30} height={40} />

                    
                </div>
            </div>
           
        </div>
    );
};

export default Header;
