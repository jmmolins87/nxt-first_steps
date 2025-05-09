



import Link from "next/link"

import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
]


export const Navbar = () => {
  
  return (
    <nav className="flex justify-between items-center bg-blue-800 bg-opacity-30 py-2 px-4 m-2 rounded">

      <Link href="/" className="flex items-center gap-2">
        <HomeIcon size={16} />
        <span>Home</span>
      </Link>

      <div className="flex justify-start items-end gap-4">
        {
          navItems.map((navItem) => (
            <ActiveLink key={navItem.path} { ...navItem } />
          ))
        }
      </div>
    </nav>
  )
}
