import { FeedbacksProvider } from "../../context/context";
import CommentsMain from "./main/main";

function Comments() {
    return (
        <FeedbacksProvider>
            <CommentsMain/>
        </FeedbacksProvider>
    )
}

export default Comments