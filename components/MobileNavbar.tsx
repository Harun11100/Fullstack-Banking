'use client'

import React from 'react'
import {
      Sheet,
      SheetClose,
      SheetContent,
      SheetDescription,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
    } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constant'
import Footer from './Footer'
const MobileNavbar = ({user}:SiderbarProps) => {
      const pathname=usePathname()
  return (
      <section className='w-full max-w-[264px] '>
    <Sheet >
      <SheetTrigger >
            <Image
            src='/icons/hamburger.svg'
            alt='menu'
            width={25}
            height={25}/>
      </SheetTrigger>
      <SheetContent side='left' className='bg-white border-none' >
      <nav className='flex flex-col gap-4'>

<Link href='/'
className=' cursor-pointer flex items-center gap-1 px-3'
>
 <Image 
 src='/icons/logo.svg'
 alt='log'
 width={34}
 height={34}
 />
 <h1 className='text-26 font-ibm-plex-serif'>World Bank</h1>
</Link> 

<div className='mobilenav-sheet'>
      <SheetClose asChild>
            <nav className='flex h-full flex-col gap-6 -pt-16 text-white'>
            {sidebarLinks.map(({route,label,imgURL})=>{   
      
      const isActive= pathname === route || pathname.startsWith(`${route}`)
     
     
     return(
       <SheetClose asChild key={route}>
             <Link href={route} key={label} className={cn('mobilenav-sheet_close w-full',{'bg-bank-gradient':isActive })}>
       
           <Image
           src={imgURL}
           alt='linkImage'
           height={20}
           width={20}
           className={cn({'brightness-[3] invert-0':isActive})}
           />
      
          
           <p className={cn(' text-15 text-black-2 font-semibold ',{' !text-white':isActive},)}>{label}</p>


       </Link>
       </SheetClose>
     
)})}
   USER
            </nav>

      </SheetClose>
      
      <Footer user={user} type='mobile'/>
</div>


 User

</nav>
      </SheetContent>
    </Sheet>
      </section>
     
    
  )
}

export default MobileNavbar