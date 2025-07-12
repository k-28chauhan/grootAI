import InboxItem from "./InboxItem";
import { useAuthStore } from "../../store/todo-list";
import { useEffect, useState } from "react";

const Inbox = () => {
    const accessToken = useAuthStore((state) => state.accessToken);
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("useEffect ran. accessToken =", accessToken);
        if (accessToken) fetchMail();
    }, [accessToken]);
    const fetchMail = async () => {
        console.log("fetchMail called");
        if (!accessToken) return;
        setLoading(true);

        try {
            const listRes = await fetch(
                "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=4&labelIds=INBOX",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            const listData = await listRes.json();
            console.log(listData);

            if (!listData.messages) {
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
                    console.log(data);
                    const headers = data.payload.headers.reduce((acc, h) => {
                        acc[h.name] = h.value;
                        return acc;
                    }, {});
                    return {
                        id: msg.id,
                        subject: headers.Subject || "No subject",
                        from: headers.From?.split("<")[0]?.trim() || "No sender name",
                        date: formatInternalDate(data.internalDate)
                    }
                })
            );
            setEmails(detailedEmails);
        } catch (error) {
            console.error("Error fetching mails", error);
        }
        setLoading(false);
    }
    const formatInternalDate = (internalDate) => {
        const date = new Date(Number(internalDate));
        const day = date.getDate(); // 1-31
        const month = date.toLocaleString("default", { month: "short" }); // "Jul"
        return `${day} ${month}`; // "12 Jul"
    }
    console.log(emails);
    return (
        <div className="flex flex-col flex-1 gap-4 p-4 -ml-1 ">
            {
                (loading)?
                <div className="text-center">
                    Loading emails...
                </div>
                :
                emails.map((email) => (
                    <InboxItem
                        key={email.id}
                        subject={email.subject}
                        from={email.from}
                        date={email.date} />
                ))
            }
        </div>
    )
}
export default Inbox;