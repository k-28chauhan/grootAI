import MailActions from "./MailActions";
import Inbox from "./Inbox";
import { Separator } from "../../components/ui/separator"
import Login from "../login/Login";
import { useAuthStore } from "../../store/todo-list";

const Mail = ({ blockHeight }) => {
    const accessToken = useAuthStore((state) => state.accessToken);
    console.log("access token:", accessToken);
    return (
        <div>
            {!accessToken ? (
                <Login />
            )
                : (
                    <div className={`flex gap-2 ${blockHeight}`}>
                        <MailActions />
                        <Separator orientation="vertical" className="h-3/4" />
                        <Inbox />
                    </div>
                )
            }
        </div>
    )
}

export default Mail;