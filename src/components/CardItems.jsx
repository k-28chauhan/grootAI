import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";

const CardItems = () => {

    return (
        <>
            <Card className="px-4 h-20 flex items-start justify-center">
                <div className="flex items-center gap-4">
                    <Checkbox id="item1" />
                    <label htmlFor="item1">Complete all the tasks using this personal AI assistant</label>
                </div>
            </Card>
        </>
    )
}

export default CardItems;