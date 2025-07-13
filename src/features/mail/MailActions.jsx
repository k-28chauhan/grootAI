import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Pencil, Mail } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { useAuthStore } from "../../store/todo-list";

const MailActions = () => {
    const profilePic = useAuthStore((state) => state.userProfile);
    const unreadMails = useAuthStore((state) => state.unreadMails);

    return (
        <div className="h-full w-1/5 p-4 flex flex-col gap-4">
            <div className="flex items-center">
                <span className="">
                    <Avatar className="size-10">
                        <AvatarImage src={profilePic?.picture || "https://lh3.googleusercontent.com/a/default-user=s96-c"} alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button variant="outline" className="flex flex-col items-center justify-center h-full flex-1 gap-1 bg-card border">
                        <Pencil color="#D3745F" className="size-6" />
                        <p className="text-sm text-white/60">Compose</p>
                    </Button>
                </a>
                <a
                    href="https://mail.google.com/mail/u/0/#inbox"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button variant="outline" className="flex flex-col items-center justify-center h-full flex-1 gap-1 bg-card border">
                        <Mail className="size-6" />
                        <p className="text-sm text-white/60">
                            {unreadMails?.messagesUnread > 99
                                ? "99+ Unread"
                                : unreadMails?.messagesUnread ?? "Inbox"}
                        </p>
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default MailActions;