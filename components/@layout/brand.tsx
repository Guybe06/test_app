import Image from 'next/image'
import React from 'react'
import logo from "@/assets/@images/Icon.png"


export const Brand = () => (
    <div className="brand flex items-end w-full">
        <Image src={logo} width={30} height={30} alt='logo' />
        <h1 className='text-lg'>Aeon</h1>
    </div>
)
