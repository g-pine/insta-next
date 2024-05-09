import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <div className=''>
        {/*Logo */}
            <Link href='/'
                className='hidden lg:inline-flex'
            >
                <Image
                    src={"/Instagram_logo.svg.png"}
                    width={96}
                    height={96}
                    alt='instagram logo'
                />
            </Link>
            <Link href='/'
                className='lg:hidden'
            >
                <Image
                    src={"/Instagram_logo_2016.svg.webp"}
                    width={40}
                    height={40}
                    alt='instagram logo'
                />
            </Link>
        {/*Search input */}
            <input type='text' 
                placeholder='Search'
                className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]'
            />
        {/*menu item */}

        </div>
    </div>
  )
}
