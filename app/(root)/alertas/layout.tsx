import AlertsProvider from "@/contexts/AlertsContext"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <AlertsProvider>{children}</AlertsProvider>
}

export default Layout
