import Link from 'next/link';
import React from 'react'
import { WiHail } from "react-icons/wi";
import { HiOutlineHome } from "react-icons/hi";
import { TbEggs } from "react-icons/tb";
import { AiFillCustomerService } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useRouter } from 'next/router';
export default function Nav() {
  const inActiveLink = "flex items-center gap-1 text-2xl p-2"
  const ActiveLink = inActiveLink+" bg-white + text-black rounded-lg"
  const {pathname} = useRouter()
  return (
   <aside className="p-4 pr-0">
    <Link href="/" className='flex items-center gap-2 text-4xl '>
   <WiHail className='text-6xl'/>
    <span className='capitalize'>SEO agency</span>
    </Link>
    <nav className='mt-4 flex flex-col gap-2'>
    <Link href="/" className={pathname ==="/"?ActiveLink:inActiveLink} >
   <HiOutlineHome className=''/>
    <span className='capitalize'>Home</span>
    </Link>
    <Link href="/Products" className={pathname.includes("Products")?ActiveLink:inActiveLink} >
   <TbEggs className=''/>
    <span className='capitalize'>Products</span>
    </Link>
    <Link href="/Service" className={pathname.includes("Service")?ActiveLink:inActiveLink} >
   <AiFillCustomerService className=''/>
    <span className='capitalize'>Service</span>
    </Link>
    <Link href="/Setting" className={pathname.includes("Setting")?ActiveLink:inActiveLink}>
   <FiSettings className=''/>
    <span className='capitalize'>Setting</span>
    </Link>
    </nav>
   </aside>
  )
}
