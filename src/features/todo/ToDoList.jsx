import { Calendar } from "../../components/ui/calendar";
import { useEffect, useState } from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
import CardItems from "./CardItems";
import { Button } from "../../components/ui/button";
import { ClipboardCheck } from "lucide-react";
import { useSidebar } from "../../components/ui/sidebar";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import { useToDoStore } from "../../store/todo-list";

const ToDoList = () => {
    const [date, setDate] = useState(new Date());
    const [input, setInput] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const tasks = useToDoStore((state) => state.tasks);
    const addTasks = useToDoStore((state) => state.addTasks);
    const fetchData = useToDoStore((state) => state.fetchData);
    const editTasks = useToDoStore((state) => state.editTasks);
    const deleteTasks = useToDoStore((state) => state.deleteTasks);


    const { state } = useSidebar(); // "expanded" or "collapsed"
    const blockHeight = state === "collapsed" ? "h-[20rem]" : "h-[18rem]";

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="flex w-full h-full gap-2">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="w-1/2 rounded-lg border bg-transparent backdrop-blur-sm dark:bg-card p-2"
            />
            <div className="flex flex-col w-2/3 h-full gap-2">
                <Dialog open={openDialog} onOpenChange={(isOpen) => {
                    setOpenDialog(isOpen);
                    if(!isOpen){
                        setEditingTask(null);
                        setInput("");
                    }
                    }}>
                    <DialogTrigger asChild>
                        <Button className="mr-3">
                            <ClipboardCheck />
                            Add Task
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <h1>{editingTask? "Edit Task" : "Add Task"}</h1>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-muted/50 p-2 text-lg outline-none resize-none"
                            rows={3} placeholder="Add text here"></textarea>
                        <div className="flex gap-2">
                            {editingTask && (
                                <Button variant="destructive"
                                onClick={() => {
                                    deleteTasks(editingTask.id);
                                    setEditingTask(null);
                                    setInput("");
                                    setOpenDialog(false);
                                }}>
                                    Delete
                                </Button>
                            )}
                            <Button
                             onClick={() => {
                                if (input.trim()) {
                                    if(editingTask){
                                        editTasks(editingTask.id, input);
                                    }
                                    else addTasks(input);
                                    setEditingTask(null);
                                    setInput("");
                                    setOpenDialog(false);
                                }
                            }}>
                                {editingTask ? "Update" : "Submit"}
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
                <ScrollArea className={`${blockHeight} mt-2 pr-3`}>
                    <div className="flex flex-col h-full gap-2">
                        {tasks.length > 0 ? (
                            tasks.map((task) => (
                                <CardItems key={task.id} task={task} onEdit={() =>{
                                    setEditingTask(task);
                                    setInput(task.task);
                                    setOpenDialog(true);
                                }} />
                            ))
                        )
                            : (
                                <p className="text-center text-white/60">No Tasks</p>
                            )}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};


export default ToDoList;