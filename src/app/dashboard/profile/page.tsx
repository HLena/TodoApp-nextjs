'use client'
import { useSession } from "next-auth/react"
import { useEffect } from "react";

const ProfilePage = () => {

  const { data: sesion } = useSession();

  useEffect(() => {
    console.log('client side')
  }, [])
  
  return (
    <div>
      <h1>Profile Page</h1>
      <p>{sesion?.user?.email}</p>
      <p>{sesion?.user?.name}</p>
      <p>{sesion?.user?.image}</p>
      <p>{sesion?.user?.roles?.join(' | ')}</p>
      <p>{sesion?.user?.id}</p>

    </div>
    
  )
}

export default ProfilePage