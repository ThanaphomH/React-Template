type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-y-scroll">
      {children}
    </div>
  )
}

export default MainLayout
