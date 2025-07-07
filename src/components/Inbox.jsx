import InboxItem from "./InboxItem";

const Inbox = () => {

    return(
        <div className="flex flex-col flex-1 gap-4 p-4 -ml-1">
            <InboxItem />
            <InboxItem />
            <InboxItem />
            <InboxItem />
        </div>
    )
}
export default Inbox;