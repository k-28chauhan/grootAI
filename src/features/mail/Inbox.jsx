import InboxItem from "./InboxItem";
import { useAuthStore } from "../../store/todo-list";
import { useEffect, useState } from "react";

const Inbox = () => {
    const accessToken = useAuthStore((state) => state.accessToken);
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("useEffect ran. accessToken =", accessToken);
        if(accessToken) fetchMail();
    }, [accessToken]);
    const fetchMail = async () => {
        console.log("fetchMail called");
        if (!accessToken) return;
        setLoading(true);

        try {
            const listRes = await fetch(
                "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10&labelIds=INBOX",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            const listData = await listRes.json();
            console.log(listData);

            if(!listData.messages){
                setEmails([]);
                return;
            }
            const detailedEmails = await Promise.all(
                listData.messages.map(async (msg) => {
                    const res = await fetch(
                        `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=metadata&metadataHeaders=Subject&metadataHeaders=From`,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`
                            }
                        }
                    )
                    const data = await res.json();
                })

            )
        } catch (error) {

        }
    }
    return (
        <div className="flex flex-col flex-1 gap-4 p-4 -ml-1">
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
        </div>
    )
}
export default Inbox;