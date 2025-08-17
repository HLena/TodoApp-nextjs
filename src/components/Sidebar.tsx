import SidebarItem from "./SidebarItem"
import Image from "next/image"
import { IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoLogoXbox, IoPersonOutline } from "react-icons/io5"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import LogOutBtn from "./LogOutBtn"

const sidebarOptions = [
  {
    title: 'Profile',
    icon: <IoPersonOutline size={30} />,
    href: '/dashboard/profile'
  },
  {
    title: 'Dashboard',
    icon: <IoCalendarOutline size={30} />,
    href: '/dashboard'
  },
  {
    title: 'Rest TODOS',
    icon: <IoCheckboxOutline size={30} />,
    href: '/dashboard/rest-todos'
  },
  {
    title: 'Server Actions',
    icon: <IoListOutline size={30} />,
    href: '/dashboard/server-todos'
  },
  {
    title: 'Cookies',
    icon: <IoCodeWorkingOutline size={30} />,
    href: '/dashboard/cookies'
  },
  {
    title: 'Products',
    icon: <IoLogoXbox size={30} />,
    href: '/dashboard/products'
  }
]

const Sidebar = async() => {

  const session = await getServerSession(authOptions);

  if(!session) redirect('/api/auth/signin');

  const username = session.user?.name || 'No name';
  const imageUrl = session.user?.image || 'https://img.freepik.com/premium-vector/avatar-prof…urces-graphic-element-design_991720-653.jpg?w=740'
  const userRoles = session.user?.roles || ['Client'];

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <h1 className="font-bold text-2xl text-sky-500 text-center">Tailus</h1>
        </div>

            <div className="mt-8 text-center">
              <Image 
                src={imageUrl}
                width={150}
                height={150}
                alt={username} 
                className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
              <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{username}</h5>
              <span className="hidden text-gray-400 lg:block capitalize">
                {
                  userRoles.join(' | ')
                }
              </span>
            </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {
            sidebarOptions.map(option => (
              <SidebarItem key={option.title} {...option} />
            ))
          }
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogOutBtn/>
      </div>
    </aside>
  )
}

export default Sidebar