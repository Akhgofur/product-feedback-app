import { RoadmapCard, RoadmapCardBottom, RoadmapCardCategory, RoadmapCardComments, RoadmapCardDesc, RoadmapCardHeading, RoadmapCardStatus, RoadmapCardUpvotes } from "./card.style"

export const RoadmapItem = () => {
    return(
        <RoadmapCard>
            <RoadmapCardStatus>
                planned
            </RoadmapCardStatus>
            <RoadmapCardHeading>
            More comprehensive reports
            </RoadmapCardHeading>
            <RoadmapCardDesc>
            It would be great to see a more detailed breakdown of solutions.
            </RoadmapCardDesc>
            <RoadmapCardCategory>
                feature
            </RoadmapCardCategory>
            <RoadmapCardBottom>
                <RoadmapCardUpvotes>20</RoadmapCardUpvotes>
                <RoadmapCardComments>2</RoadmapCardComments>
            </RoadmapCardBottom>
        </RoadmapCard>
    )
}