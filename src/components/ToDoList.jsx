import { Calendar } from "./ui/calendar";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import CardItems from "./CardItems";
import { Button } from "./ui/button";
import { ClipboardCheck } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

const ToDoList = () => {
    const [date, setDate] = useState(new Date());
    const { state } = useSidebar(); // "expanded" or "collapsed"
    const blockHeight = state === "collapsed" ? "h-[25.5rem]" : "h-[22.5rem]";
    return (
        <div className="flex w-full h-full gap-2">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="w-1/2 rounded-lg border bg-transparent backdrop-blur-sm dark:bg-card p-2"
            />
            <div className="flex flex-col w-2/3 h-full gap-2">
                <Button className="mr-3">
                    <ClipboardCheck className="mr-2" />
                    Add Task
                </Button>
                <ScrollArea className={`${blockHeight} pr-3`}>
                    <div className="flex flex-col gap-4">
                        <CardItems />
                        <CardItems />
                        <CardItems />
                        <CardItems />
                        <CardItems />
                        <CardItems />
                        <CardItems />
                        <CardItems />
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};


export default ToDoList;