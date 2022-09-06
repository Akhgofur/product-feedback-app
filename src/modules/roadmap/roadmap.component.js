import { Link } from "react-router-dom"
import { RoadmapItem } from "./components/card/card.component"
import { RoadmapBackBtn, RoadmapBoard, RoadmapBoardItem, RoadmapBoardItemDesc, RoadmapBoardItemHeading, RoadmapBoardItemTop, RoadmapContainer, RoadmapHeader, RoadmapHeading, RoadmapHeadingWrapper, RoadmapList, RoadmapMain, RoadmapNav, RoadmapNavBtn, RoadmapNavItem, RoadmapNavList } from "./roadmap.style"

export const RoadmapPage = () => {
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
                <RoadmapNavList>
                    <RoadmapNavItem>
                        <RoadmapNavBtn>
                        Planned (2)
                        </RoadmapNavBtn>
                    </RoadmapNavItem>
                    <RoadmapNavItem>
                        <RoadmapNavBtn data-id="2">
                        In-Progress (3)
                        </RoadmapNavBtn>
                    </RoadmapNavItem>
                    <RoadmapNavItem>
                        <RoadmapNavBtn>
                        Live (1)
                        </RoadmapNavBtn>
                    </RoadmapNavItem>
                </RoadmapNavList>
            </RoadmapNav>
            <RoadmapMain>
                <RoadmapBoard>
                    <RoadmapBoardItem>
                        <RoadmapBoardItemTop>
                            <RoadmapBoardItemHeading>
                            Planned
                            </RoadmapBoardItemHeading>
                            <RoadmapBoardItemDesc>
                            Ideas prioritized for research
                            </RoadmapBoardItemDesc>
                        </RoadmapBoardItemTop>
                        <RoadmapList>
                            <RoadmapItem/>
                        </RoadmapList>
                    </RoadmapBoardItem>
                    <RoadmapBoardItem>
                        <RoadmapBoardItemTop>
                            <RoadmapBoardItemHeading>
                            Planned
                            </RoadmapBoardItemHeading>
                            <RoadmapBoardItemDesc>
                            Ideas prioritized for research
                            </RoadmapBoardItemDesc>
                        </RoadmapBoardItemTop>
                        <RoadmapList>
                            <RoadmapItem/>
                        </RoadmapList>
                    </RoadmapBoardItem>
                    <RoadmapBoardItem>
                        <RoadmapBoardItemTop>
                            <RoadmapBoardItemHeading>
                            Planned
                            </RoadmapBoardItemHeading>
                            <RoadmapBoardItemDesc>
                            Ideas prioritized for research
                            </RoadmapBoardItemDesc>
                        </RoadmapBoardItemTop>
                        <RoadmapList>
                            <RoadmapItem/>
                        </RoadmapList>
                    </RoadmapBoardItem>
                </RoadmapBoard>
            </RoadmapMain>
        </RoadmapContainer>
    )
}