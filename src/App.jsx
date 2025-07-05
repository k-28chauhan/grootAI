import { AppSidebar } from "./components/app-sidebar"
import { SidebarProvider } from "./components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import HomePage from "./HomePage"

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat dark:bg-none"
        style={{ backgroundImage: "url('/glass-bg.jpg')" }}
      >
        <SidebarProvider>
          <div className="flex w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <Header />
              <HomePage />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </ThemeProvider>
  )
}

export default App