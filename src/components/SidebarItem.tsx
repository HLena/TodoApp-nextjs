'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

interface SidebarItemProp {
  title: string,
  icon: React.ReactNode,
  href: string
}
const SidebarItem = ({ title, icon, href }: SidebarItemProp) => {

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link 
        href={href} 
        className={`
          relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 group
          ${isActive ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}
        `}
      >
        { icon }
        <span className="group-hover:text-gray-700">{ title }</span>
      </Link>
    </li>
  )
}

export default SidebarItem