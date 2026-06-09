import RightSideOverview from "../OverrviewRightSide/RightSideOverview";
import LeftSideOverview from "../OverviewLeftSide/LeftSideOverview";

export default function DashboardOverview() {
    return (
        <div className="grid grid-cols-5" hidden>
            <div className="col-span-3">
                <LeftSideOverview />
            </div>
            <div className="col-span-2">
                <RightSideOverview />
            </div>
        </div>
    );
}