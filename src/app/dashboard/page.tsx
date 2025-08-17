import WidgetItem from "@/components/WidgetItem"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";

const DashboarPage = async () => {

  const session = await getServerSession(authOptions);

  if(!session) redirect('/api/auth/signin');

  const { user } = session;

  console.log(session)

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem>
        <div className="flex flex-row items-center gap-2">
          <Image 
            src={user!.image!} 
            alt={user?.name || ''} 
            width={100} 
            height={100}
            className="rounded-full"
          />
          <div>
            <span className="block text-xl font-bold text-gray-600">{user?.name}</span>
            <span className="text-gray-400 font-light">{user?.email}</span>
          </div>
        </div>
       
      </WidgetItem>
    </div>  
  )
}

export default DashboarPage