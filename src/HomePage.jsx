import { useState } from "react";
import { useSidebar } from "./components/ui/sidebar";
import {Separator} from "./components/ui/separator"
import ToDoList from "./components/ToDoList";
import Events from "./components/Events";
import Summary from "./components/Summary";
import Actions from "./components/Actions";
import WeatherWidget from "./components/Weather";
import Focus from "./components/Focus";
import MailActions from "./components/MailActions";
import Inbox from "./components/Inbox";
import Notes from "./components/Notes";

const HomePage = () => {
    const { state } = useSidebar(); // "expanded" or "collapsed"
    const blockHeight = state === "collapsed" ? "h-96 mt-4" : "h-[22rem]";

    return (

        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className={`bg-white/60 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg dark:bg-card dark:backdrop-blur-none dark:border-none p-2 pr-0 lg:col-span-2 ${blockHeight}`}>
                    <ToDoList />
                </div>
                <div className={` rounded-xl ${blockHeight}`}>
                    <Events />
                </div>
                <div className={`flex flex-col gap-4 rounded-xl ${blockHeight}`}>
                    <Summary />
                    <Actions />
                </div>
                <div className={`flex flex-col gap-4 rounded-xl ${blockHeight}`}>
                    <WeatherWidget />
                    <Focus />
                </div>
                <div className={`flex gap-2 bg-card rounded-xl lg:col-span-2 ${blockHeight}`}>
                    <MailActions />
                    <Separator orientation="vertical" className="h-3/4"/>
                    <Inbox />
                </div>
                <div className={`bg-muted/50 rounded-xl ${blockHeight}`}>
                    <Notes />
                </div>
            </div>
        </div>
    )
}

export default HomePage;