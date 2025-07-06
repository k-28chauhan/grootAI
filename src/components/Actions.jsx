import { Bell, NotebookText, Video, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Actions = () => {
  return (
    <div className="flex gap-4 w-full">
      <Button className="flex flex-col items-center justify-center h-full flex-1 gap-1 bg-card">
        <Bell className="size-6" />
        <p className="text-sm">Set<br />Reminder</p>
      </Button>
      <Button className="flex flex-col items-center justify-center h-full flex-1 gap-1 bg-card">
        <NotebookText className="size-6" />
        <p className="text-sm">Add<br />Note</p>
      </Button>
      <Button className="flex flex-col items-center justify-center h-full flex-1 gap-1 bg-card">
        <Video className="size-6" />
        <p className="text-sm">Start<br />Meeting</p>
      </Button>
    </div>
  );
};

export default Actions;
