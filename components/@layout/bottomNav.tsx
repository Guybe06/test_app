import Link from 'next/link'
import React from 'react'
import { ContactUsIcon, HelpCentreIcon, LogoutIcon } from './icons'

export const BottomNav = () => {
    return (
        <div className="absolute bottom-10">
            <ul>
                <li className={`w-full mb-2 `}>
                    <Link href="#" className={`flex justify-between items-center w-full`}>
                        <span className="flex items-center">
                            <HelpCentreIcon color="#7C8DB5" />
                            <span className="ml-4">Help Centre</span>
                        </span>
                    </Link>
                </li>
                <li className={`w-full mb-2 `}>
                    <Link href="#" className={`flex justify-between items-center w-full`}>
                        <span className="flex items-center">
                            <ContactUsIcon color="#7C8DB5" />
                            <span className="ml-4">Contact us</span>
                        </span>
                    </Link>
                </li>
                <li className={`w-full mb-2 `}>
                    <Link href="#" className={`flex justify-between items-center w-full text-red-500`}>
                        <span className="flex items-center">
                            <LogoutIcon color="#FF3B30" />
                            <span className="ml-4">Log out</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}






