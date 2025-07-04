import { AppSidebar } from "./components/app-sidebar"
import { SidebarProvider } from "./components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/header"

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <div className="flex flex-col flex-1">
            <Header />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App