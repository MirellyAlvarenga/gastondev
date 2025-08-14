'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
      { label: 'Home', href: '/'},
      { label: 'Resume', href: '/resume'},
      { label: 'Projects', href: '/projects'},
      { label: 'Experiences', href: '/experiences'},
      { label: 'Contact', href: '/contact'},
  ]
return (
  <nav className='flex space-x-6 border-b border-white bg-black mb-5 px-5 h-14 items-center text-white'>
      <Link href="/" className="text-white font-bold text-lg">Matheus Gaston</Link> 
      <ul className='flex space-x-6'>
          {links.map(link =>
          <Link
              key={link.href}
              className={classnames({
                  'text-white': link.href === currentPath, 
                  'text-gray-400': link.href !== currentPath,
                  'hover:text-gray-200 transition-colors': true 
              })}
              href={link.href}>{link.label}</Link>)}
          <li></li>
      </ul>
  </nav>
)
}

export default NavBar