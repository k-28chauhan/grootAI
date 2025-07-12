const InboxItem = ({ subject, from, date }) => {
    return (
        <div className="flex flex-col flex-1 pl-4 p-2 border gap-1 rounded-md">
                <div className="flex justify-between">
                    <p className="max-w-3/4 line-clamp-1 text-white/70">{from}</p>
                    <span className="pr-2">{date}</span>
                 </div>
                <div className="line-clamp-1 overflow-hidden">{subject}</div>
        </div>
    )
}

export default InboxItem;