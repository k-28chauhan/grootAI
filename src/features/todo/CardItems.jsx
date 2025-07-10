import { Checkbox } from "../../components/ui/checkbox";
import { Card } from "../../components/ui/card";
import { useToDoStore } from "../../store/todo-list";
import { Trash } from "lucide-react"

const CardItems = ({ task, onEdit }) => {

    const checkedTasks = useToDoStore((state) => state.checkedTasks);
    return (
        <>
            <Card
            onClick={onEdit}
            className="px-4 h-20 flex items-start cursor-pointer justify-center">
                <div className="flex items-center gap-4">
                    <Checkbox
                    onClick={(e) => e.stopPropagation()}
                    checked={task.completed}
                    onCheckedChange={() => checkedTasks(task.id)}
                    id={`task-${task.id}`} />
                    <label
                     className={`line-clamp-2 ${task.completed == true ? "line-through" : ""}`}>
                        {task.task}
                        </label>
                </div>
            </Card>
        </>
    )
}

export default CardItems;