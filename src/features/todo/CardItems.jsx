import { Checkbox } from "../../components/ui/checkbox";
import { Card } from "../../components/ui/card";
import { useToDoStore } from "../../store/todo-list";

const CardItems = ({ task }) => {

    const checkedTasks = useToDoStore((state) => state.checkedTasks);
    return (
        <>
            <Card className="px-4 h-20 flex items-start justify-center">
                <div className="flex items-center gap-4">
                    <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => checkedTasks(task.id)}
                    id={`task-${task.id}`} />
                    <label className={`line-clamp-2 ${task.completed == true ? "line-through" : ""}`} htmlFor={`task-${task.id}`}>
                        {task.task}
                        </label>
                </div>
            </Card>
        </>
    )
}

export default CardItems;