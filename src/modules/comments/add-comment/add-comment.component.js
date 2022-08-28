import { useRef, useState } from 'react'
import './add-comment.style.js'
import { AddModal, AddModalBottom, AddModalCommentsCount, AddModalForm, AddModalHeading, AddModalInput, AddModalSubmitBtn } from './add-comment.style.js'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addComent, addComment } from '../../../components/main-components/feedbacks/feedbacks-slice'

function AddCommentModal({current}){

    const dispatch = useDispatch()
    const addCommentRef = useRef('')
    const handleSubmitComment = (e) => {
        e.preventDefault()
        const id = current[0].id
        const commentDesc = addCommentRef.current
        const comment = {
            user:{
                name: 'someone',
                username: 'someone',
                image:'https:/picsum.photos/50/50'
            },
            id:nanoid(),
            content:commentDesc.value,
            replies:[],
        }
        let commentsArr = [comment, ...current[0].comments]
        dispatch(addComment({commentsArr, id}))
        dispatch(addComent({id, comment}))
        addCommentRef.current.value = ''
        setValue(250)
    
    }

    const [value, setValue] = useState(250)
            return(
                <AddModal>
            <AddModalForm onSubmit={handleSubmitComment} action="#">
                <AddModalHeading>
                    Add Comment
                </AddModalHeading>
                <AddModalInput onChange={() => setValue(250 - addCommentRef.current.value.length) } maxLength={250} ref={addCommentRef} placeholder='Type your comment here' cols="30" rows="3"></AddModalInput>
                <AddModalBottom>
                    <AddModalCommentsCount>
                        {value} Characters left
                    </AddModalCommentsCount>
                    <AddModalSubmitBtn  type='submit'>Post Comment</AddModalSubmitBtn>
                </AddModalBottom>
            </AddModalForm>
        </AddModal>
        
    )
}

export default AddCommentModal