import { TabBar } from "@/components/TabBar"
import { cookies } from "next/headers"

const CookiesPage = async () => {

  const cookiesStore = await cookies();
  const cookiesTab = cookiesStore.get('selectedTab')?.value || '1';
  
  return (
    <div>
      <h1 className="text-2xl font-semibold my-3">Cookies Page</h1>
      <TabBar currentTab={+cookiesTab}/>
    </div>
  )
}

export default CookiesPage