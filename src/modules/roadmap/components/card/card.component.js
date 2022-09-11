import { RoadmapCard, RoadmapCardBottom, RoadmapCardCategory, RoadmapCardComments, RoadmapCardDesc, RoadmapCardHeading, RoadmapCardStatus, RoadmapCardUpvotes } from "./card.style"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { upVote, upVotePost } from "../../../../components/main-components/feedbacks/feedbacks-slice"

export const RoadmapItem = (
    {id,
    title,
    upvotes,
    desc,
    isUpvoted,
    comments,
    status,
    category}
    ) => {
        const dispatch = useDispatch()
    const handleUpvote = () => {
        let upvote = (isUpvoted ? upvotes - 1 : upvotes + 1)
        const voted = !isUpvoted
        const current = {id, voted, upvote}
        dispatch(upVote(current))
        dispatch(upVotePost(current))
    }
    return(
        <RoadmapCard status={status}>
            <RoadmapCardStatus status={status}>
                {status}
            </RoadmapCardStatus>
            <RoadmapCardHeading>
            <Link style={{textDecoration:'none', color:'inherit'}} to={`/single/${id}`} >{title}</Link>
            </RoadmapCardHeading>
            <RoadmapCardDesc>
            {desc}
            </RoadmapCardDesc>
            <RoadmapCardCategory>
                {category}
            </RoadmapCardCategory>
            <RoadmapCardBottom>
                <RoadmapCardUpvotes isUpvoted={isUpvoted} style={isUpvoted ? ({background: '#4661E6', color: '#fff'}) : ({background: '#F2F4FE', color: '#3A4374'})} onClick={handleUpvote} >{upvotes}</RoadmapCardUpvotes>
                <RoadmapCardComments>{comments.length}</RoadmapCardComments>
            </RoadmapCardBottom>
        </RoadmapCard>
    )
}