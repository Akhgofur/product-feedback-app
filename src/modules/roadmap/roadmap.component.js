import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getFeedbacks } from "../../components/main-components/feedbacks/feedbacks-slice"
import { sortFeedbackStatus } from "../../utils/sort-feedback-status"
import { RoadmapItem } from "./components/card/card.component"
import { RoadmapBackBtn, RoadmapBoard, RoadmapBoardItem, RoadmapBoardItemDesc, RoadmapBoardItemHeading, RoadmapBoardItemTop, RoadmapContainer, RoadmapHeader, RoadmapHeading, RoadmapHeadingWrapper, RoadmapList, RoadmapMain, RoadmapNav, RoadmapNavBtn, RoadmapNavItem, RoadmapNavList } from "./roadmap.style"

export const RoadmapPage = () => {
    const statusFeedbacks = useSelector(state => state.feedbacks.feedbacks.filter(item => item.status.toLowerCase() !== 'suggestion'))
    const { planned, progress, live } = sortFeedbackStatus(statusFeedbacks)

    const sortByUpvote = (arr) => {
        if (arr?.length > 0) {
          arr.sort((a, b) => b.upvotes - a.upvotes);
        }
      };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFeedbacks())
    }, [dispatch])


      sortByUpvote(planned)
      sortByUpvote(progress)
      sortByUpvote(live)

      const [activeRoadMap, setActiveRoadMap] = useState("planned");

      const handleNavClick = (e) => {
         if(e.target.matches('button[data-type]')) {
           setActiveRoadMap(e.target.dataset.type)
         }
       }




    return(
        <RoadmapContainer>
            <RoadmapHeader>
                <RoadmapHeadingWrapper>
                    <RoadmapBackBtn to={'/'}>Go back</RoadmapBackBtn>
                    <RoadmapHeading>
                        Roadmap
                    </RoadmapHeading>
                </RoadmapHeadingWrapper>
                <Link to={'/create'} className='main-header__btn'>+ Add Feedback</Link>
            </RoadmapHeader>
            <RoadmapNav>
                <RoadmapNavList onClick={handleNavClick}>
                    <RoadmapNavItem>
                        <RoadmapNavBtn  active={activeRoadMap} roadMap="planned" data-type="planned">
                        Planned ({planned.length})
                        </RoadmapNavBtn >
                    </RoadmapNavItem>
                    <RoadmapNavItem>
                        <RoadmapNavBtn active={activeRoadMap} roadMap="progress" data-type="progress" data-id="2">
                        In-Progress ({progress.length})
                        </RoadmapNavBtn>
                    </RoadmapNavItem>
                    <RoadmapNavItem>
                        <RoadmapNavBtn active={activeRoadMap} roadMap="live" data-type="live">
                        Live ({live.length})
                        </RoadmapNavBtn>
                    </RoadmapNavItem>
                </RoadmapNavList>
            </RoadmapNav>
            <RoadmapMain>
                <RoadmapBoard>
                    <RoadmapBoardItem active={activeRoadMap} roadMap="planned">
                        <RoadmapBoardItemTop>
                            <RoadmapBoardItemHeading>
                            Planned ({planned.length})
                            </RoadmapBoardItemHeading>
                            <RoadmapBoardItemDesc>
                            Ideas prioritized for research
                            </RoadmapBoardItemDesc>
                        </RoadmapBoardItemTop>
                        <RoadmapList>
                            {
                                planned?.map(
                                    ({id,
                                    title,
                                    upvotes,
                                    description,
                                    isUpvoted,
                                    comments, category}) => <RoadmapItem key={id} category={category} title={title} id={id} upvotes={upvotes} desc={description} isUpvoted={isUpvoted} comments={comments} status="progress"  />)
                            }
                        </RoadmapList>
                    </RoadmapBoardItem>
                    <RoadmapBoardItem active={activeRoadMap} roadMap="progress">
                        <RoadmapBoardItemTop>
                            <RoadmapBoardItemHeading>
                            In-Progress ({progress.length})
                            </RoadmapBoardItemHeading>
                            <RoadmapBoardItemDesc>
                            Currently being developed
                            </RoadmapBoardItemDesc>
                        </RoadmapBoardItemTop>
                        <RoadmapList>
                        {
                                progress?.map(
                                    ({id,
                                    title,
                                    upvotes,
                                    description,
                                    isUpvoted,
                                    comments, category}) => <RoadmapItem key={id} category={category} title={title} id={id} upvotes={upvotes} desc={description} isUpvoted={isUpvoted} comments={comments} status="live"  />)
                            }
                        </RoadmapList>
                    </RoadmapBoardItem>
                    <RoadmapBoardItem active={activeRoadMap} roadMap="live">
                        <RoadmapBoardItemTop>
                            <RoadmapBoardItemHeading>
                            Live ({live.length})
                            </RoadmapBoardItemHeading>
                            <RoadmapBoardItemDesc>
                            Released features
                            </RoadmapBoardItemDesc>
                        </RoadmapBoardItemTop>
                        <RoadmapList>
                        {
                                live?.map(
                                    ({id,
                                    title,
                                    upvotes,
                                    description,
                                    isUpvoted,
                                    comments, category}) => <RoadmapItem category={category} key={id} title={title} id={id} upvotes={upvotes} desc={description} isUpvoted={isUpvoted} comments={comments} status="planned"  />)
                            }
                        </RoadmapList>
                    </RoadmapBoardItem>
                </RoadmapBoard>
            </RoadmapMain>
        </RoadmapContainer>
    )
}