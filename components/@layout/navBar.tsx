"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
    label: string;
    href: string;
    isAccordion?: boolean;
    subItems?: { label: string; href: string }[];
    badgeText?: string | null;
    icon?: string;
}

export const Navbar = () => {
    const menuItems: MenuItem[] = [
        { label: "Overview", href: "/", icon: "bi bi-bar-chart" },
        {
            label: "Product", href: "/product", icon: "bi bi-backpack", isAccordion: true, subItems: [
                { label: "Category 1", href: "/category1" },
                { label: "Category 2", href: "/category2" }
            ]
        },
        {
            label: "Orders", href: "/orders", icon: "bi bi-person", isAccordion: true, subItems: [
                { label: "Pending Orders", href: "/pending" },
                { label: "Completed Orders", href: "/completed" }
            ]
        },
        { label: "Checkout", href: "/checkout", badgeText: "3", icon: "bi bi-cart" },
        { label: "Settings", href: "/settings", icon: "bi bi-gear" }
    ];

    return (
        <nav className="bg-white navbar w-full">
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

    const pathname = usePathname();

    return (
        item.isAccordion ? (
            <li className={`w-full mb-2 ${item.href == pathname && "active"}`} >
                <button
                    className={`text-gray-500 focus:outline-none flex justify-between items-center w-full ${item.href == pathname && "active"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span><i className={`${item.icon} mr-3`}></i> {item.label}</span>
                    {item.subItems && <i className="bi bi-chevron-down mr-12"></i>}
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
            </li>
        ) : (
            <li className={`w-full mb-2 ${item.href == pathname && "active"}`}>
                <Link href={item.href} className={`text-gray-500 flex justify-between items-center w-full ${item.href == pathname && "active"}`}>
                    <span><i className={`${item.icon} mr-3`}></i> {item.label}</span>
                    {item.badgeText && (
                        <span className="bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs mr-12">
                            {item.badgeText}
                        </span>
                    )}
                </Link>
            </li>
        )
    );
};
