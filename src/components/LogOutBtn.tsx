'use client';

import { useSession, signIn, signOut } from "next-auth/react"
import { CiLogin, CiLogout } from "react-icons/ci"
import { HiDotsHorizontal } from "react-icons/hi";

const LogOutBtn = () => {
  const { status } = useSession();

  if(status === 'loading'){
    return (
      <button 
        className="cursor-pointer px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <CiLogin />
        <span className="group-hover:text-gray-700">Logout</span>
      </button>
    )
  } else if( status === 'authenticated'){
    return (
      <button 
        onClick={ () => signOut() }
        className="cursor-pointer px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <CiLogout />
        <span className="group-hover:text-gray-700">Logout</span>
      </button>
    )
  }

  return (
    <button 
      onClick={() => signIn() }
      className="cursor-pointer px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
      <HiDotsHorizontal />
      <span className="group-hover:text-gray-700">Login</span>
    </button>
  )
}

export default LogOutBtn