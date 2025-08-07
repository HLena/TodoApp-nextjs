import Link from "next/link"

const HomePage = () => {
  return (
    <div className="h-full bg-amber-600">
      <Link 
        href="/gallery"
        className="p-2 text-lg font-semibold text-white bg-violet-600 shadow rounded-md"
      >
        Gallery Page
      </Link>
    </div>
  )
}

export default HomePage