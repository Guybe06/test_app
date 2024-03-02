"use client"

import { ComponentElement, ReactElement, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDownIcon, CheckoutIcon, OrderIcon, OverviewIcon, ProductIcon, SettingIcon } from "./icons";

interface MenuItem {
    label: string;
    href: string;
    isAccordion?: boolean;
    subItems?: { label: string; href: string }[];
    badgeText?: string | null;
    icon: ReactElement;
    activeIcon: ReactElement;
}

export const Navbar = () => {
    const menuItems: MenuItem[] = [
        { label: "Overview", href: "/", icon: <OverviewIcon color="#7C8DB5" />, activeIcon: <OverviewIcon color="#347AE2" /> },
        {
            label: "Product", href: "/product", icon: <ProductIcon color="#7C8DB5" />, activeIcon: <ProductIcon color="#347AE2" />, isAccordion: true, subItems: [
                { label: "Category 1", href: "/category1" },
                { label: "Category 2", href: "/category2" }
            ]
        },
        {
            label: "Orders", href: "/orders", icon: <OrderIcon color="#7C8DB5" />, activeIcon: <OrderIcon color="#347AE2" />, isAccordion: true, subItems: [
                { label: "Pending Orders", href: "/pending" },
                { label: "Completed Orders", href: "/completed" }
            ]
        },
        { label: "Checkout", href: "/checkout", badgeText: "3", icon: <CheckoutIcon color="#7C8DB5" />, activeIcon: <CheckoutIcon color="#347AE2" /> },
        { label: "Settings", href: "/settings", icon: <SettingIcon color="#7C8DB5" />, activeIcon: <SettingIcon color="#347AE2" /> }
    ];

    return (
        <nav className="bg-white navbar w-full mt-14">
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
                    className={`focus:outline-none flex justify-between items-center w-full ${item.href == pathname && "active"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="flex items-center">
                        {item.href == pathname ? item.activeIcon : item.icon}
                        <span className="ml-4">{item.label}</span>
                    </span>
                    {item.subItems && <ArrowDownIcon color="#7C8DB5" className="mr-14" />}
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
                <Link href={item.href} className={`flex justify-between items-center w-full ${item.href == pathname && "active"}`}>
                    <span className="flex items-center">
                    {item.href == pathname ? item.activeIcon : item.icon}
                        <span className="ml-4">{item.label}</span>
                    </span>
                    {item.badgeText && (
                        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-12">
                            {item.badgeText}
                        </span>
                    )}
                </Link>
            </li>
        )
    );
};
