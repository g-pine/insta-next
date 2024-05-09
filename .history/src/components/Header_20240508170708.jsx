import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <div className=''>
        {/*Logo */}
            <Link href='/'>
                <Image
                    src={"/public/Instagram_logo.svg.png"}
                    width={96}
                    height={96}
                />
            </Link>
        {/*Search input */}

        {/*menu item */}
        </div>
    </div>
  )
}
