import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Focus = () => {

    return(
        <Card className="flex flex-col gap-2 p-4 h-1/2">
            <h1 className="font-bold text-xl">Pomodoro</h1>
            <div className="flex flex-col gap-4 justify-center items-center w-full">
                <input defaultValue={"25:00"}
                type="text"
                className="resize-none border h-10 p-2 w-3/4 text-2xl outline-none text-center rounded-md" 
                />
                <Button className="w-3/4">Start Focus Session</Button>
            </div>
        </Card>
    )
}
export default Focus;