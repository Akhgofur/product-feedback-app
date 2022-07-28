import { useContext, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { FeedbackContext } from "../../../context/context"
import { EditFeedbackCancelBtn, EditFeedbackCategories, EditFeedbackCategory, EditFeedbackDeleteBtn, EditFeedbackForm, EditFeedbackHeading, EditFeedbackModalBottom, EditFeedbackStatusOption, EditFeedbackStatusSelect, EditFeedbackSubmitBtn, EditFeedbackTextArea, EditFeedbackTitle, EditFeedbackTitleInput, EditFeedbackTitleWarning, EditFeedbackWrapper } from "./edit-modal.style"

export const EditFeedbackModal = () => {

    const {data, URL, categories} = useContext(FeedbackContext)
    const param = useParams()
    const editTitleRef = useRef()
    const editCategoryRef = useRef()
    const editProccessRef = useRef()
    const editDescRef = useRef()
    const id = param.id
    const current = data.find(item => `${item.id}` === `${id}`)
    const navigate = useNavigate()

    const handleClickDelete = () => {
        async function delteFeedback(){
            const res = await fetch(`${URL}/${id}`,{
                method: 'DELETE',
                  headers: {
                        'Content-type' : 'application/json'
                      },
            })
        }
        delteFeedback()
        navigate('/')
    }

    const handleSubmitForm = () => {
        const editedFeedback = {
            title : editTitleRef.current.value,
            category : editCategoryRef.current.value,
            description : editDescRef.current.value,
            status: editProccessRef.current.value
        }

        async function editFeedback(){
            const res = await fetch(`${URL}/${id}`,{
                method: 'PATCH',
                  headers: {
                        'Content-type' : 'application/json'
                      },
                      body: JSON.stringify(editedFeedback)
            })
        }
        editFeedback()
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
                            if(`${item.name}` === `${current.category}`){
                                return (<EditFeedbackCategory  key={item.id} selected={true} value={item.name}>{item.name}</EditFeedbackCategory>)
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
                        <EditFeedbackSubmitBtn type="submit">Add Feedback</EditFeedbackSubmitBtn>
                    </EditFeedbackModalBottom>
                </EditFeedbackForm>
            </EditFeedbackWrapper>
        )
    }else{
       <b>Loading..</b>     
    }


}