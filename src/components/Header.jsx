import { useState, useEffect } from "react";
import { MoonStar, Sun, Mic } from 'lucide-react';
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {

    const { theme, setTheme } = useTheme();

    return (
        <>
            <header className="w-full flex justify-between h-18 items-center px-4">
                <SidebarTrigger className="-ml-2 mr-2"/>
                <Separator orientation="vertical" className="data-[orientation=vertical]:h-8 mr-2"/>
                <div className="flex-1">
                    <Input placeholder="Search..." className="max-w-lg h-11" />
                </div>
                <div className="w-44 flex">
                    <Button variant="outline" className="size-12">
                        <Mic />
                    </Button>
                    <Button variant="outline" className="size-12"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <Sun /> : <MoonStar />}
                    </Button>
                </div>
            </header>
            <Separator orientation="horizontal" className="h-6"/>
        </>
    )
}

export default Header;