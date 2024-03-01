"use client"

import { useState } from "react";
import Link from "next/link";

interface MenuItem {
    label: string;
    href: string;
    isAccordion?: boolean;
    subItems?: { label: string; href: string }[];
    badgeText?: string | null;
}

export const Navbar = () => {
    const menuItems: MenuItem[] = [
        { label: "Overview", href: "/overview" },
        {
            label: "Product", href: "/product", isAccordion: true, subItems: [
                { label: "Category 1", href: "/category1" },
                { label: "Category 2", href: "/category2" }
            ]
        },
        {
            label: "Orders", href: "/orders", isAccordion: true, subItems: [
                { label: "Pending Orders", href: "/pending" },
                { label: "Completed Orders", href: "/completed" }
            ]
        },
        { label: "Checkout", href: "/checkout", badgeText: "3" },
        { label: "Settings", href: "/settings" }
    ];

    return (
        <nav className="bg-black navbar">
            <ul className="">
                {menuItems.map((item) => (
                    <NavItem key={item.label} item={item} />
                ))}
            </ul>
        </nav>
    );
};

const NavItem = ({ item }: { item: MenuItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="w-full">
            {item.isAccordion ? (
                <>
                    <button
                        className="text-gray-900 focus:outline-none flex justify-between items-center"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {item.label} {item.subItems && (
                            <i className="bi-chevron-down"></i>
                        )}
                    </button>
                    {isOpen && item.subItems && (
                        <ul className="">
                            {item.subItems.map((subItem) => (
                                <li key={subItem.label}>
                                    <Link href={`${item.href}${subItem.href}`}>{subItem.label}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <Link href={item.href} className="text-gray-900 flex justify-between items-center">
                    {item.label}
                    {item.badgeText && (
                        <span className="bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                            {item.badgeText}
                        </span>
                    )}
                </Link>
            )}
        </li>
    );
};