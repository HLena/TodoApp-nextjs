
const Layout = ({children, modal}:{children: React.ReactNode, modal: React.ReactNode}) => {
  return (
    <>
      {modal}
      <div className="p-3 text-center bg-amber-500">
        <h1 className="text-2xl text-white font-extrabold">
          Naruto Characters
        </h1>
      </div>
    <div className="grid grid-cols-4 gap-4">
      { children }
    </div>
    </>
  )
}

export default Layout