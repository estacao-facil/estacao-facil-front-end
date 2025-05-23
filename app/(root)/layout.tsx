import Footer from "@/components/Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      {children}
      <Footer />
    </div>
  )
}

export default Layout
