import Column from "@src/atomComponents/Grid/Column";
import RecentEventsSection from "@src/components/RecentEventsSection/RecentEventsSection";
import React, {FC, ReactElement} from "react";


const EventPage: FC = (): ReactElement => {
    return <Column>
        <RecentEventsSection />
    </Column>
}

export default EventPage