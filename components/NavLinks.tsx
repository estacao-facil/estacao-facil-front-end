import Link from "next/link"

import { navLinks } from "@/constants"

const NavLinks = () => {
  return (
    <>
      {navLinks.map(({ label, url }, i) => (
        <li key={i}>
          <Link href={url} className="link">
            {label}
          </Link>
        </li>
      ))}
    </>
  )
}

export default NavLinks
