import { useState, useEffect } from "react";
import { MoonStar, Sun, Mic, Plus, Menu } from 'lucide-react';
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { SidebarTrigger } from "./ui/sidebar";
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator
} from "./ui/dropdown-menu";

const Header = () => {

    const { theme, setTheme } = useTheme();

    return (
        <>
            <header className="w-full flex justify-between h-18 items-center px-4 bg-white/60 backdrop-blur-md border border-white/30 shadow-lg dark:bg-card dark:backdrop-blur-none dark:border-none">
                <SidebarTrigger className="-ml-2 mr-2"/>
                <Separator orientation="vertical" className="data-[orientation=vertical]:h-8 mr-2"/>
                <div className="flex-1">
                    <Input placeholder="Search..." className="max-w-2xs h-11 md:max-w-lg" />
                </div>
                <div className="gap-4 hidden lg:flex">
                    <Button variant="outline" className="size-12" >
                        <Plus />
                    </Button>
                    <Button variant="outline" className="size-12">
                        <Mic />
                    </Button>
                    <Button variant="outline" className="size-12"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <Sun /> : <MoonStar />}
                    </Button>
                </div>
                <div className="lg:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="size-12">
                                <Menu className="size-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent 
                            align="end" 
                            className="w-56 p-2"
                            sideOffset={8}
                        >
                            <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer">
                                <Plus className="size-4" />
                                <span>Add New</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer">
                                <Mic className="size-4" />
                                <span>Voice Input</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                                className="flex items-center gap-3 p-3 cursor-pointer"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <MoonStar className="h-4 w-4" />
                                )}
                                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <Separator orientation="horizontal" className="h-6"/>
        </>
    )
}

export default Header;