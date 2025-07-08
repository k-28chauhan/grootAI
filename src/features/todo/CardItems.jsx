import { Checkbox } from "../../components/ui/checkbox";
import { Card } from "../../components/ui/card";

const CardItems = ({ task }) => {

    return (
        <>
            <Card className="px-4 h-20 flex items-start justify-center">
                <div className="flex items-center gap-4">
                    <Checkbox id={`task-${task.id}`} />
                    <label className="line-clamp-2" htmlFor={`task-${task.id}`}>
                        {task.task}
                        </label>
                </div>
            </Card>
        </>
    )
}

export default CardItems;