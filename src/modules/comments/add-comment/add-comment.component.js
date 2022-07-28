import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FeedbackContext } from '../../../context/context'
import './add-comment.style.js'
import { AddModal, AddModalBottom, AddModalCommentsCount, AddModalForm, AddModalHeading, AddModalInput, AddModalSubmitBtn } from './add-comment.style.js'

function AddCommentModal({current}){
    const addCommentRef = useRef('')
    const {URL, data} = useContext(FeedbackContext)
    const handleSubmitComment = (e) => {
        e.preventDefault()
        addComment();
        addCommentRef.current.value = ''
    
    }

async function addComment(){
    const commentDesc = addCommentRef.current
    const comment = {
        user:{
            name: 'someone',
            username: 'someone',
            image:'https:/picsum.photos/50/50'
        },
        id: current[0].comments.length + 18,
        content:commentDesc.value
    }
    let commentsArr = [comment, ...current[0].comments]
    
    const res = await fetch(`${URL}/${current[0].id}`,{
        method: 'PATCH',
          headers: {
                'Content-type' : 'application/json'
              },
              body: JSON.stringify(
                    {
                        comments: commentsArr
                    }
                    )
                })
            }
            return(
                <AddModal>
            <AddModalForm onSubmit={handleSubmitComment} action="#">
                <AddModalHeading>
                    Add Comment
                </AddModalHeading>
                <AddModalInput ref={addCommentRef} placeholder='Type your comment here' cols="30" rows="3"></AddModalInput>
                <AddModalBottom>
                    <AddModalCommentsCount>
                        250 Characters left
                    </AddModalCommentsCount>
                    <AddModalSubmitBtn  type='submit'>Post Comment</AddModalSubmitBtn>
                </AddModalBottom>
            </AddModalForm>
        </AddModal>
        
    )
}

export default AddCommentModal