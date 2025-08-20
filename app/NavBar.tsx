'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import classnames from 'classnames';
import { useTheme } from 'next-themes'; 

const NavBar = () => {
const currentPath = usePathname();
const { theme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
}, []);

if (!mounted) {
  return null;
}

const links = [
    { label: 'Home', href: '/'},
    { label: 'Resume', href: '/resume'},
    { label: 'Projects', href: '/projects'},
    { label: 'Experiences', href: '/experiences'},
    { label: 'Contact', href: '/contact'},
]
return (
<nav className={classnames(
  'fixed w-full flex space-x-6 px-5 h-14 items-center z-50',
  {
    'bg-black border-b border-white text-white': theme === 'dark', 
    'bg-white border-b border-gray-200 text-black': theme === 'light' 
  }
)}>
    <Link href="/" className={classnames(
      "font-bold text-lg",
      {
        'text-white': theme === 'dark',
        'text-black': theme === 'light'
      }
    )}>Mirelly Alvarenga</Link> 
    <ul className='flex space-x-6'>
        {links.map(link =>
        <Link
            key={link.href}
            className={classnames({
                'text-white': link.href === currentPath && theme === 'dark',
                'text-black': link.href === currentPath && theme === 'light',
                'text-gray-400': link.href !== currentPath && theme === 'dark',
                'text-gray-600': link.href !== currentPath && theme === 'light', 
                'hover:text-gray-200 dark:hover:text-gray-200 transition-colors': theme === 'dark', 
                'hover:text-gray-800 transition-colors': theme === 'light' 
            })}
            href={link.href}>{link.label}</Link>)}
        <li></li>
    </ul>
</nav>
)
}

export default NavBar