import { useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { EditFeedbackCancelBtn, EditFeedbackCategories, EditFeedbackCategory, EditFeedbackDeleteBtn, EditFeedbackForm, EditFeedbackHeading, EditFeedbackModalBottom, EditFeedbackStatusOption, EditFeedbackStatusSelect, EditFeedbackSubmitBtn, EditFeedbackTextArea, EditFeedbackTitle, EditFeedbackTitleInput, EditFeedbackTitleWarning, EditFeedbackWrapper } from "./edit-modal.style"
import { useDispatch, useSelector } from "react-redux"
import { deleteFeedback, deletePost, editFeedback, editPost, getFeedbacks } from "../../../components/main-components/feedbacks/feedbacks-slice"
import { useContext } from "react"
import { FeedbackContext } from "../../../context/context"

export const EditFeedbackModal = () => {
    const dispatch = useDispatch()
    const param = useParams()
    const editTitleRef = useRef()
    const editCategoryRef = useRef()
    const editProccessRef = useRef()
    const editDescRef = useRef()
    const id = param.id
    const feedbackStatus = useSelector(state => state.feedbacks.status)
    if(feedbackStatus === "idle") {
        dispatch(getFeedbacks())
    }
    const data = useSelector(state => state.feedbacks.feedbacks)
    const current = data.find(item => `${item.id}` === `${id}`)
    const navigate = useNavigate()

    const handleClickDelete = () => {
        dispatch(deleteFeedback(id))
        dispatch(deletePost(id))
        navigate('/')
    }
    const {categories} = useContext(FeedbackContext)

    const handleSubmitForm = () => {
        const editedFeedback = {
            title : editTitleRef.current.value,
            category : editCategoryRef.current.value,
            description : editDescRef.current.value,
            status: editProccessRef.current.value
        }
        dispatch(editFeedback({id, editedFeedback}))
        dispatch(editPost({id, editedFeedback}))
        navigate('/')
    }

    if(current){
        return (
            <EditFeedbackWrapper>
                <EditFeedbackHeading>
                Editing '{current.title}'
                </EditFeedbackHeading>
                <EditFeedbackForm onSubmit={handleSubmitForm} >
                    <EditFeedbackTitle>
                    Feedback Title
                    </EditFeedbackTitle>
                    <EditFeedbackTitleWarning>
                    Add a short, descriptive headline
                    </EditFeedbackTitleWarning>
                    <EditFeedbackTitleInput ref={editTitleRef} type={'text'} defaultValue={current.title} />
                    <EditFeedbackTitle>
                    Category
                    </EditFeedbackTitle>
                    <EditFeedbackTitleWarning>
                    Choose a category for your feedback
                    </EditFeedbackTitleWarning>
                    <EditFeedbackCategories ref={editCategoryRef}>
                        {categories && categories.map(item => {
                            if(`${item.name.toLowerCase()}` === `${current.category.toLowerCase()}`){
                                return (<EditFeedbackCategory  key={item.id} value={item.name} defaultValue={true} >{item.name}</EditFeedbackCategory>)
                            }else{
                                return (<EditFeedbackCategory key={item.id} value={item.name}>{item.name}</EditFeedbackCategory>)
                            }
                        })}
                    </EditFeedbackCategories>
                    <EditFeedbackTitle>
                    Update Status
                    </EditFeedbackTitle>
                    <EditFeedbackTitleWarning>
                    Change feedback state
                    </EditFeedbackTitleWarning>
                    <EditFeedbackStatusSelect ref={editProccessRef} >
                        <EditFeedbackStatusOption value={"Suggestion"} >Suggestion</EditFeedbackStatusOption>
                        <EditFeedbackStatusOption value={"Planned"} >Planned</EditFeedbackStatusOption>
                        <EditFeedbackStatusOption value={"In-Progress"} >In-Progress</EditFeedbackStatusOption>
                        <EditFeedbackStatusOption value={"Live"} >Live</EditFeedbackStatusOption>
                    </EditFeedbackStatusSelect>
                    <EditFeedbackTitle>
                    Feedback Detail
                    </EditFeedbackTitle>
                    <EditFeedbackTitleWarning>
                    Include any specific comments on what should be improved, added, etc.
                    </EditFeedbackTitleWarning>
                    <EditFeedbackTextArea cols="30" rows="3" ref={editDescRef} defaultValue={current.description} ></EditFeedbackTextArea>
                    <EditFeedbackModalBottom>
                        <EditFeedbackDeleteBtn onClick={handleClickDelete} type="button">Delete</EditFeedbackDeleteBtn>
                        <EditFeedbackCancelBtn to={'/'}>Cancel</EditFeedbackCancelBtn>
                        <EditFeedbackSubmitBtn type="submit">Save changes</EditFeedbackSubmitBtn>
                    </EditFeedbackModalBottom>
                </EditFeedbackForm>
            </EditFeedbackWrapper>
        )
    }else{
       <b>Loading..</b>     
    }


}