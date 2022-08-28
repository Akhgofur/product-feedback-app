import { useEffect } from "react"
import { ReplyAuthor, ReplyBtn, ReplyContent, ReplyContentHeader, ReplyDesc, ReplyIcon, ReplyIconWrapper, ReplyingTo, ReplyItem, ReplyUserEmail, ReplyUserName } from "./reply.style"

export const Reply = ({content, replyingTo, img, name, username}) => {
    return(
        <ReplyItem>
            <ReplyIconWrapper>
                <ReplyIcon src={img} width={40} height={40} />
            </ReplyIconWrapper>
            <ReplyContent>
                <ReplyContentHeader>
                    <ReplyAuthor>
                        <ReplyUserName>
                            {name}
                        </ReplyUserName>
                        <ReplyUserEmail>
                            {username}
                        </ReplyUserEmail>
                    </ReplyAuthor>
                    <ReplyBtn>
                        Reply
                    </ReplyBtn>
                </ReplyContentHeader>
                <ReplyDesc>
                    <ReplyingTo>
                        @{replyingTo}
                    </ReplyingTo>
                    {content}
                </ReplyDesc>
            </ReplyContent>
        </ReplyItem>
    )
}