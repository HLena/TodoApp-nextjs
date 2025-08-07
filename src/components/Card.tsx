
const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-white rounded-lg shadow p-2">{children}</div>
  )
}

export default Card