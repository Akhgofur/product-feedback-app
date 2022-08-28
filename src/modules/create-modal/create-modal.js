import './create-modal.scss'
import {Link, useNavigate} from 'react-router-dom'
import {  useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFeedback, createFeedback } from '../../components/main-components/feedbacks/feedbacks-slice'
import { getCategories } from '../../components/main-components/feedbacks/categories-slice'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

function CreateFeedbackModal(){
    const nameRef = useRef('')
    const categoryRef = useRef('')
    const feedbackRef = useRef('')
    const createFeedbackFormRef = useRef()
    
    const dispatch = useDispatch()
    const feedbacksStatus = useSelector(state => state.feedbacks.status)
    if(feedbacksStatus === "idle") {
        dispatch(getCategories())
    }
    
    const categories = useSelector(state => state.categories.categories)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(nameRef.current.value.trim() !== '' && feedbackRef.current.value.trim() !== ''){
            const newFeedback = {
                id: nanoid(),
                title : nameRef.current.value,
                upvotes : 0 ,
                isUpvoted : false,
                category : categoryRef.current.value,
                description : feedbackRef.current.value,
                status: "suggestion",
                comments : []
            }
            setError(false)
            dispatch(addFeedback(newFeedback))
            dispatch(createFeedback(newFeedback))
            e.target.reset()
            navigate('/')
        }else{
            setError(!error)
        }
    }
    const [error, setError] = useState(false)
    let navigate = useNavigate()

    return (
        <div className="modal-wrapper">
            <div className="modal">
                <Link to={'/'} className="go-back">
                    Go Back
                </Link>
                <h3 className="modal__heading">
                    Create New Feedback
                </h3>
                <form action="#" ref={createFeedbackFormRef} onSubmit={handleSubmit} className="modal__form">
                    <h4 className="heading modal__feedback-title">
                    Feedback Title
                    </h4>
                    <p className="warning modal__feedback-title-warning">Add a short, descriptive headline</p>
                    <input type="text" ref={nameRef} className="input modal__feedback-title-input" />
                    <h4 className="heading modal__feedback-category">
                        Category
                    </h4>
                    <p className="warning modal__feedback-category-warning">
                    modal__feedback-title-warning
                    </p>
                    <select className="input modal__feedback-category-select" ref={categoryRef} >
                        {categories.map(category => <option key={category.name} value={category.name}>{category.name}</option>)}
                    </select>
                    <h4 className="heading modal__feedback-desc">
                    Feedback Detail
                    </h4>
                    <p className="warning modal__feedback-desc-warning">
                    Include any specific comments on what should be improved, added, etc.
                    </p>
                    <textarea cols="30" rows="3" ref={feedbackRef} className="input modal__feedback-desc-textarea"></textarea>
                    <p className={error ? "heading error-text error-text-open" : "heading error-text"} >Please type something and submit</p>
                    <div className="modal_buttons">
                        <Link to={'/'} type='button' className="modal__cancel-btn">Cancel</Link>
                        <button type='submit' className="modal__submit-btn">Add Feedback</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateFeedbackModal