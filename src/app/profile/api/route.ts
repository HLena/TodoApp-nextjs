import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  console.log(requestHeaders.get('Authorization'));

  const headerList = await headers();
  console.log(headerList.get('Authorization'))

  const theme = request.cookies.get("theme");
  console.log(theme)

  const cookieStore = await cookies();
  cookieStore.set("ResultPerPage", "20")

  return new Response("<h1>Prodile API data</h1>",{
    headers:{
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    }
  })

  
}