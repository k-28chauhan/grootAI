import { useState } from "react";
import { useSidebar } from "./components/ui/sidebar";
import {Separator} from "./components/ui/separator"
import ToDoList from "./features/todo/ToDoList";
import Events from "./features/events/Events";
import Summary from "./features/summary/Summary";
import Actions from "./features/quickAction/Actions";
import WeatherWidget from "./features/weather/Weather";
import Focus from "./features/focus/Focus";
import MailActions from "./features/mail/MailActions";
import Inbox from "./features/inbox/Inbox";
import Notes from "./features/notes/Notes";

const HomePage = () => {
    const { state } = useSidebar(); // "expanded" or "collapsed"
    const blockHeight = state === "collapsed" ? "h-96 mt-4" : "h-[23rem]";

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