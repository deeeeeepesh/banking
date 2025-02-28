"use client"
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={firstName:'Deepesh',LastName:"Dhanasekar"};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" alt="menu logo" width={30} height={30}/>
          <div>
            <MobileNav user={loggedIn} />
          </div>
          </div>
          {children}
          </div>


     
    </main>    
  );
}
