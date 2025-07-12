import { useState } from "react";
import { useSidebar } from "./components/ui/sidebar";
import ToDoList from "./features/todo/ToDoList";
import Events from "./features/events/Events";
import Summary from "./features/summary/Summary";
import Actions from "./features/quickAction/Actions";
import WeatherWidget from "./features/weather/Weather";
import Focus from "./features/focus/Focus";
import Mail from "./features/mail/Mail";
import Notes from "./features/notes/Notes";

const HomePage = () => {
    const { state } = useSidebar(); // "expanded" or "collapsed"
    const blockHeight = state === "collapsed" ? "h-96" : "h-[22.5rem]";

    return (

        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className={`bg-white/60 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg dark:bg-card dark:backdrop-blur-none dark:border-none p-2 pr-0 lg:col-span-2 mt-1 ${blockHeight}`}>
                    <ToDoList />
                </div>
                <div className={`mt-1 rounded-xl ${blockHeight}`}>
                    <Events />
                </div>
                <div className={`flex flex-col mt-1 gap-4 rounded-xl ${blockHeight}`}>
                    <Summary />
                    <Actions />
                </div>
                <div className={`flex flex-col gap-2 rounded-xl mt-0 ${blockHeight}`}>
                    <WeatherWidget />
                    <Focus />
                </div>
                <div className={`bg-card rounded-xl lg:col-span-2 mt-0 ${blockHeight}`}>
                    <Mail blockHeight={blockHeight}/>
                </div>
                <div className={`bg-muted/50 rounded-xl mt-0 ${blockHeight}`}>
                    <Notes />
                </div>
            </div>
        </div>
    )
}

export default HomePage;