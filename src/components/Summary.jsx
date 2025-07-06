import { Card } from "./ui/card";
import { Brain } from "lucide-react";

const Summary = () => {

    return (
        <>
            <Card className="w-full h-3/4 p-4">
                <div className="flex gap-2">
                    <h1 className="font-bold text-xl">Smart Summary</h1>
                    <Brain />
                </div>
                <p>
                    ✅ You have 3 meetings scheduled today, starting with "Team Sync" at 10:00 AM. <br />
                    📌 2 tasks are due today, including Submit project proposal by 5:00 PM.
                </p>
            </Card>
        </>
    )
}

export default Summary;