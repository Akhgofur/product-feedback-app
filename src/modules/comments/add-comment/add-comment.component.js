import { useState } from 'react'
import './add-comment.style.js'
import { AddModal, AddModalBottom, AddModalCommentsCount, AddModalForm, AddModalHeading, AddModalInput, AddModalSubmitBtn } from './add-comment.style.js'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addComent, addComment, addReplyComment } from '../../../components/main-components/feedbacks/feedbacks-slice'
import { useEffect } from 'react'

function AddCommentModal({current, addCommentRef, repliedUser, setRepliedUser, id}){
    const [comment, setComment]  = useState('')
    const handleModalOnChange = () => {
        const comment = addCommentRef.current.value

        if(comment.length >= 0 && comment.length <= 250) {
            setComment(comment)
            setValue(250 - addCommentRef.current.value.length)
        }

        if(repliedUser.username && !comment.match(repliedUser.username)) {
            setRepliedUser({})
        }
    }

    const dispatch = useDispatch()

    const handleSubmitComment = (e) => {
        e.preventDefault()

        const id = current[0].id
        const commentDesc = addCommentRef.current

        if(addCommentRef.current.value.trim() && !repliedUser.username) {
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
            setComment('')
            setValue(250)
        } else if(addCommentRef.current.value.trim() && repliedUser.username) {
            dispatch(
                addReplyComment({
                  id: addCommentRef.current.id,
                  comment: addCommentRef.current.value,
                  repliedUser: repliedUser.username,
                  repliedUserId: repliedUser.id,
                })
              );
              setComment("")
              setValue(250)
        }
    }
    useEffect(() => {
        if(repliedUser.username) {
            setComment(`@` + repliedUser.username + " ")
            addCommentRef.current.focus()
        }
        // eslint-disable-next-line
    }, [repliedUser.username])

    const [value, setValue] = useState(250)
            return(
                <AddModal>
            <AddModalForm onSubmit={handleSubmitComment} action="#" method='POST'>
                <AddModalHeading>
                    Add Comment
                </AddModalHeading>
                <AddModalInput id={id} onChange={handleModalOnChange} value={comment}  maxLength={250} ref={addCommentRef} placeholder='Type your comment here' cols="30" rows="3"></AddModalInput>
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