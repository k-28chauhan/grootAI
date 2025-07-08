import { Card } from "../../components/ui/card";

const EventItem = () => {

    return(
            <div className="flex pl-4 p-2 border gap-2 items-center rounded-md">
                <div style={{backgroundColor: "#5f8ad8"}} className="w-1 h-10/12"></div>
                <div>
                    <h3>Team Meeting</h3>
                    <span className="text-sm text-white/70">10:00 A.M - 11:00 A.M</span>
                 </div>
            </div>
    )
}

export default EventItem;