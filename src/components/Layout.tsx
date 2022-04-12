const Layout: React.FC = ({ children }) => {
  return (
  <>
    <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
      {children}
    </div>
  </>
  )
}

export default Layout