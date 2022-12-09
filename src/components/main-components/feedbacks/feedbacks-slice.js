import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { URL } from "../../../context/context";
const initialState = {
    feedbacks:[],
    status: "idle",
    error: null,
}
const name = 'feedbacks'

export const getFeedbacks = createAsyncThunk(
    'feedbacks/getFeedbacks',
    async function(_, {rejectWithValue} ) {
        try {
            const res = await fetch(URL)
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
    )
    export const addFeedback = createAsyncThunk(
        'feedbacks/addFeedback',
        async function(feedback, {rejectWithValue} ) {
            try {
                const res = await fetch(URL,{
                    method: 'POST',
                    headers: {
                          'Content-type' : 'application/json'
                        },
                        body: JSON.stringify(
                              feedback
                            )
                          })
                if(!res.ok) {
                    throw new Error('Server error: ', res.status)
                }
            } catch (error) {
                return rejectWithValue(error)
            }
        }
        )
        export const editFeedback = createAsyncThunk(
            'feedbacks/editFeedback',
            async function({editedFeedback, id}, {rejectWithValue} ) {
                try {
                    const res = await fetch(`${URL}/${id}`,{
                        method: 'PATCH',
                          headers: {
                                'Content-type' : 'application/json'
                              },
                              body: JSON.stringify(editedFeedback)
                    })
                    if(!res.ok) {
                        throw new Error('Server error: ', res.status)
                    }
                } catch (error) {
                    return rejectWithValue(error)
                }
            }
            )
            export const addComment = createAsyncThunk(
                'feedbacks/addComment',
                async function({commentsArr, id}, {rejectWithValue} ) {
                    try {
                        const res = await fetch(`${URL}/${id}`,{
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
                        if(!res.ok) {
                            throw new Error('Server error: ', res.status)
                        }
                    } catch (error) {
                        return rejectWithValue(error)
                    }
                }
                )
                export const replyComment = async (id, comments) => {
                        
                            const res = await fetch(`${URL}/${id}`,{
                                method: 'PATCH',
                                  headers: {
                                        'Content-type' : 'application/json'
                                      },
                                      body: JSON.stringify(
                                            {
                                                comments
                                            }
                                            )
                                        })
                        const data = await res.data;
                        return data;
                  };
                export const addReplyComment = createAsyncThunk(
                    'feedbacks/addReplyComment',
                    async function({ id, comment, repliedUser, repliedUserId }, {getState, dispatch} ) {

                        const commentedProduct = getState().feedbacks.feedbacks.find(item => `${item.id}` === id)
                        const repliedIndex = commentedProduct.comments?.findIndex(coment => `${coment.id}` === `${repliedUserId}`)
                        if(repliedIndex !== -1) {
                            const createdComment = {
                                content: comment.replace("@" + repliedUser, "").trim(),
                                id: nanoid(),
                                replyingTo: repliedUser,
                                user: {
                                  image:
                                    "https://i2.wp.com/vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png?ssl=1",
                                  name: "You",
                                  username: "unnamed",
                                },
                            }
                            const clonedComment = JSON.parse(JSON.stringify(commentedProduct.comments[repliedIndex]))
                            clonedComment["replies"] ? 
                            clonedComment["replies"].push(createdComment) : (clonedComment['replies'] = [createdComment])

                            const withNewComment = [
                                ...commentedProduct.comments.slice(0, repliedIndex),
                                clonedComment,
                                ...commentedProduct.comments.slice(repliedIndex + 1)
                            ]

                            dispatch(replyNewComment({withNewComment,id}))
                            replyComment(id, withNewComment)
                        }
                        
                    }
                    )
            export const deleteFeedback = createAsyncThunk(
                'feedbacks/deleteFeedback',
                async function(id, {rejectWithValue} ) {
                    try {
                        const res = await fetch(`${URL}/${id}`,{
                            method: 'DELETE',
                              headers: {
                                    'Content-type' : 'application/json'
                                  },
                        })
                        if(!res.ok) {
                            throw new Error('Server error: ', res.status)
                        }
                    } catch (error) {
                        return rejectWithValue(error)
                    }
                }
                )
    export const upVote = createAsyncThunk(
        'feedbacks/upVote',
        async function({id, upvote, voted},{rejectWithValue}) {
            try {
                const res = await fetch(`${URL}/${id}`,{
                    method: 'PATCH',
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            upvotes: upvote,
                            isUpvoted: voted,
                        }
                    )
                })
                if(!res.ok) {
                    throw new Error('Server error: ', res.status)
                }
            } catch (error) {
                return rejectWithValue(error)
            }
        }
    )

    
    const feedbacksSlice = createSlice({
        name,
        initialState,
        reducers: {
            getPosts(state) {
                return state.feedbacks
            },
            editPost(state, action) {
                const {id, editedFeedback} = action.payload
                const {title, category, description, status} = editedFeedback
                let current = state.feedbacks.find(item => `${item.id}` === `${id}`)
                current.title = title
                current.category = category
                current.description = description
                current.status = status
            },
            upVotePost(state, action) {
                const {id , upvote} = action.payload
                let current = state.feedbacks.find(item => `${item.id}` === `${id}`)
                current.upvotes = upvote
                current.isUpvoted = !current.isUpvoted
            },
            addComent(state, action){
                const{id, comment} = action.payload
                let currentFeedback = state.feedbacks.find(item => `${item.id}` === `${id}`)
                if(currentFeedback.comments) {
                    currentFeedback.comments.push(comment)
                }else{
                    currentFeedback.comments = [comment]
                }
            },
            createFeedback(state, action) {
                state.feedbacks.push(action.payload)
            },
            deletePost(state, action) {
               state.feedbacks = state.feedbacks.filter(item => `${item.id}` !== `${action.payload}`)
            },
            replyNewComment(state, action) {
                const {id, withNewComment} = action.payload
                const currentFeedback = state.feedbacks.find(item => `${item.id}` === `${id}`)
                currentFeedback.comments = withNewComment
            },
            sortFeedback(state, action) {
                state.feedbacks.sort((a, b) => {
                    switch (action.payload) {
                        case "1":
                            return +b.upvotes - +a.upvotes
                        case "2":
                            return  +a.upvotes - +b.upvotes
                        case "3":
                            return  b.comments.length - a.comments.length
                        case "4":
                            return  a.comments.length - b.comments.length
                        default:
                            return +a.upvotes - +b.upvotes
                    }
                })
            },
            
        },
        extraReducers:{
            [getFeedbacks.rejected]: (state, action) => {
                state.loading = false
                state.error = action.payload
                state.status = 'error'
                
            },
            [getFeedbacks.pending]: (state, action) => {
                state.status = "loading"
            },
            [getFeedbacks.fulfilled]: (state, action) => {
                state.error = false
                state.status = "success"
                state.feedbacks = action.payload
            },
        }
    })
    
    
    export const { upVotePost, addComent, createFeedback, sortFeedback, editPost, deletePost, replyNewComment } = feedbacksSlice.actions
    export default feedbacksSlice.reducer