import { useState } from "react";
import { useSidebar } from "./components/ui/sidebar";
import ToDoList from "./components/ToDoList";

const HomePage = () => {
    const { state } = useSidebar(); // "expanded" or "collapsed"
    const blockHeight = state === "collapsed" ? "h-[470px]" : "h-[420px]";

    return (
        
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className={`bg-white/60 backdrop-blur-sm border border-white/30 shadow-lg dark:bg-card dark:backdrop-blur-none dark:border-none p-2 pr-0 lg:col-span-2 ${blockHeight}`}>
                        <ToDoList />
                    </div>
                    <div className={`bg-muted/50 rounded-xl ${blockHeight}`}></div>
                    <div className={`bg-muted/50 rounded-xl ${blockHeight}`}></div>
                    <div className={`bg-muted/50 rounded-xl ${blockHeight}`}></div>
                    <div className={`bg-muted/50 rounded-xl lg:col-span-2 ${blockHeight}`}></div>
                    <div className={`bg-muted/50 rounded-xl ${blockHeight}`}></div>
                </div>
            </div>
    )
}

export default HomePage;