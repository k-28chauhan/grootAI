const InboxItem = () => {

    return (
        <div className="flex flex-col flex-1 pl-4 p-2 border gap-1 rounded-md">
                <div className="flex justify-between">
                    <p className="text-white/70">SPR Placement</p>
                    <span className="pr-2">7 Jul</span>
                 </div>
                    <span className="line-clamp-1 overflow-hidden">Sessional QUIZ_Summer Sessional due on 12 July</span>
            </div>
    )
}

export default InboxItem;