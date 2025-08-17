import Link from "next/link"

const HomePage = () => {
  return (
    <div className="h-full bg-amber-600">
      <ul className="p-4">
        <li className="mb-5">
          <Link 
            href="/gallery"
            className="p-2 text-lg font-semibold text-white bg-violet-600 shadow rounded-md"
          >
            Gallery Page
          </Link>
        </li>
        <li>
          <Link 
            href="/dashboard"
            className="p-2 text-lg font-semibold text-white bg-violet-600 shadow rounded-md"
          >
            Dashboard
          </Link>
        </li>


      </ul>
    </div>
  )
}

export default HomePage