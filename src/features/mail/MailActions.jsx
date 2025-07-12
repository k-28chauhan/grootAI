import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Pencil, Mail } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { useAuthStore } from "../../store/todo-list";

const MailActions = () => {
    const profilePic = useAuthStore((state) => state.userProfile);
    console.log(profilePic);
    return (
        <div className="h-full flex-1 p-4 flex flex-col gap-4">
            <div className="relative flex items-center">
                <Input className="h-11 p-5 rounded-lg focus-visible:ring-0 pr-14" placeholder="Search in mail" />
                <span className="absolute right-2">
                    <Avatar>
                        <AvatarImage src={profilePic?.picture || "https://lh3.googleusercontent.com/a/default-user=s96-c"} alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </span>
            </div>
            <div className="flex gap-2">
                <Button className="flex flex-col items-center justify-center h-full flex-1 gap-1 bg-card border">
                    <Pencil color="#D3745F" className="size-6" />
                    <p className="text-sm text-white/60">Compose</p>
                </Button>
                <Button className="flex flex-col items-center justify-center h-full flex-1 gap-1 bg-card border">
                    <Mail className="size-6" />
                    <p className="text-sm text-white/60">99+ Unread </p>
                </Button>
            </div>
        </div>
    )
}

export default MailActions;