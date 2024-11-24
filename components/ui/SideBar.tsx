'use client'

import { sidebarLinks } from '@/constant'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = ({user}:SiderbarProps) => {

      const pathname=usePathname()

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>

      <Link href='/'
      className='mb-12 cursor-pointer flex items-center gap-2'
      >
       <Image 
       src='/icons/logo.svg'
       alt='log'
       width={34}
       height={34}
       className='size-[24px] max-xl:size-14'/>
       <h1 className='sidebar-logo'>World Bank</h1>
      </Link> 
      {sidebarLinks.map(({route,label,imgURL})=>{   
            
             const isActive = pathname === route || pathname.startsWith(`${route}/`)
            
            
            return(
            <Link href={route} key={label} className={cn('sidebar-link',{'bg-bank-gradient':isActive })}>
                  <div className='relative size-6'>
                  <Image
                  src={imgURL}
                  alt='linkImage'
                  height={25}
                  width={25}
                  className={cn({'brightness-[3] invert-0':isActive})}
                  />
                  </div>
                 
                  <p className={cn({' !text-white':isActive},'sidebar-label')}>{label}</p>


            </Link>
      )})}
       User

      </nav>
      Footer

    </section>
  )
}

export default SideBar