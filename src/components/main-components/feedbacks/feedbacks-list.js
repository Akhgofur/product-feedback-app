import Feedback from "./feedback/feedback";
import './feedbacks-list.scss';

function FeedbacksList(){
    return (
        <ul className="feedbacks">
            <Feedback comments={2} desc={'Easier to search for solutions based on a specific stack.'} title={'Add tags for solutions'} btn={'Enhancement'} votes={112}/>
            <Feedback comments={4} title={'Add a dark theme option'} desc={'It would help people with light sensitivities and who prefer dark mode.'} btn={'Feature'} votes={99}/>
        </ul>
    )
}
export default FeedbacksList;