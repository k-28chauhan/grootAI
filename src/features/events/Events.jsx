import { Card, CardContent } from "../../components/ui/card";
import EventItem from "./EventItem";

const Events = () => {
    
    return(
        <>
            <Card className="w-full h-full flex flex-col gap-2 p-4">
                <h1 className="font-bold text-xl">Today's Events</h1>
                <CardContent className="flex flex-col gap-3 px-0">
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                </CardContent>
            </Card>
        </>
    )
}

export default Events;