import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Pencil, Mail } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { useAuthStore } from "../../store/todo-list";

const MailActions = () => {
    const userProfile = useAuthStore((state) => state.userProfile);
    const unreadMails = useAuthStore((state) => state.unreadMails);

    const openGmailInbox = (email) => {
        const gmailUrl = `https://mail.google.com/mail/?authuser=${email}#inbox`;
        window.open(gmailUrl, "_blank");
    }
    const openGmailCompose = (email) => {
        const gmailUrl = `https://mail.google.com/mail/?authuser=${email}&view=cm&fs=1&to=&su=&body=`;
        window.open(gmailUrl, "_blank");
    }
    return (
        <div className="h-full w-1/5 p-4 flex flex-col gap-4">
            <div className="flex items-center">
                <span className="">
                    <Avatar className="size-10">
                        <AvatarImage src={userProfile?.picture || "https://lh3.googleusercontent.com/a/default-user=s96-c"} alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <Button
                onClick={() => openGmailCompose(userProfile.email)}
                 variant="outline" className="flex flex-col items-center justify-center h-full flex-1 gap-1 bg-card border">
                    <Pencil color="#D3745F" className="size-6" />
                    <p className="text-sm text-white/60">Compose</p>
                </Button>
                <Button
                onClick={() => openGmailInbox(userProfile.email)}
                variant="outline" className="flex flex-col items-center justify-center h-full flex-1 gap-1 bg-card border">
                    <Mail className="size-6" />
                    <p className="text-sm text-white/60">
                        {unreadMails?.messagesUnread > 99
                            ? "99+ Unread"
                            : unreadMails?.messagesUnread ?? "Inbox"}
                    </p>
                </Button>
            </div>
        </div>
    )
}

export default MailActions;