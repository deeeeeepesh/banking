'use client'
import React from 'react'
import Link from 'next/link';
import { sidebarLinks } from '../constants/index.ts'; 
import Image from 'next/image';
import {  cn } from "../lib/utils.ts";
import { usePathname } from "next/navigation";
const Sidebar = ({user}:SidebarProps) => {
  const pathname=usePathname();
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
            <Image src="/icons/logo.svg" alt="logo" width={34} height={34} className="size-[24px] max-xl:size-14"/>
            <h1 className="sidebar-logo">Horizon</h1>
            </Link>
            {sidebarLinks.map((item)=>{
              const isActive= pathname===item.route||pathname.startsWith(('${item.route}/'))
              return (<Link href={item.route} className ={cn('sidebar-link',{'bg-bank-gradient':isActive})} key={item.label}>{item.label}</Link>)
            })};
            </nav>
    </section>
  )
}

export default Sidebar