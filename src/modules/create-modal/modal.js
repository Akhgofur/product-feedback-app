import { FeedbacksProvider } from "../../context/context";
import CreateFeedbackModal from "./create-modal";


export function Modal() {
    return(
        <FeedbacksProvider>
            <CreateFeedbackModal/>
        </FeedbacksProvider>
    )
}