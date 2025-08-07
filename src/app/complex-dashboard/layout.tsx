

const Layout = ({children, users, notifications, revenue, login}: 
  {
    children: React.ReactNode,
    users: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    login: React.ReactNode
  }) => {
    const isLogin = false;

    return isLogin ? 
    (
      <div>
        <div>{children}</div>
        <div className="flex bg-gray-100">
          <div className="flex flex-col">
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div className="flex flex-1">
            {notifications}
          </div>
        </div>
      </div>
    ) :
    <>{login}</>
}

export default Layout