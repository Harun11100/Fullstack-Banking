import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({key,account,userName,showBalance=true}:CreditCardProps) => {
  return (
    <div className='flex flex-col'>
      <Link href='/' className='bank-card'>

        <div className='bank-card_content'>
            <div>
                  <h1 className='text-16 font-semibold text-white'>
                     {userName}

                  </h1>

                  <p className='font-ibm-plex-serif font-black text-white'>
                       {formatAmount(account.currentBalance)}
                  </p>
            </div>
            <article className='flex flex-col gap-3'>
                  <div className='flex justify-between'>
                        <h1 className='text-12 font-semibold text-white'>{userName}</h1>
                         <h2 className='text-12 font-semibold text-white'>

                              **/** 
                         </h2>
                  </div>
                  <p className='text-14 font-semibold tracking-[1.1px] text-white'>

                      **** **** ****  
                      <span className='text-16'>
                        123
                      </span>
                  </p>



            </article>
           

        </div>
        <div className='bank-card_icon'>
                  <Image
                  src='/icons/Paypass.svg'
                  alt='paypas'
                  width={20}
                  height={24}/>
                  
                   <Image
                  src='/icons/mastercard.svg'
                  alt='mastercard'
                  width={20}
                  height={24}
                 className='ml-5' />
            </div>


                   <Image
                  src='/icons/lines.png'
                  alt='lines'
                  width={316 }
                  height={190}/>
      </Link>

      
    </div>
  )
}

export default BankCard