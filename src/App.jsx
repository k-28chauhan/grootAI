import { AppSidebar } from "./components/app-sidebar"
import { SidebarProvider } from "./components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import HomePage from "./HomePage"
import { useTheme } from "./components/theme-provider"

function AppContent() {
  const { theme } = useTheme();
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: theme === "dark" ? "none" : "url('/glass1-bg.jpg')"
      }}
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
  );
}
function App() {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App