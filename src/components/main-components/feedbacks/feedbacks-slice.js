import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../../context/context";
const initialState = {
    feedbacks:[],
    loading: null,
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
            sortFeedback(state, action) {
                state.feedbacks.sort((a, b) => {
                    switch (action.payload) {
                        case "1":
                            return +b.upvotes - +a.upvotes
                            break   
                        case "2":
                            return  +a.upvotes - +b.upvotes
                            break
                        case "3":
                            return  b.comments.length - a.comments.length
                            break
                        case "4":
                            return  a.comments.length - b.comments.length
                            break
                        default:
                            return +a.upvotes - +b.upvotes
                            break
                    }
                })
            },
            filterFeedback(state, action) {
                if(action.payload === "All") {
                    state.feedbacks = state.feedbacks
                }
                else {
                    state.feedbacks.filter(item => `${item.category}` === `${action.payload}`)
                }
            },
        },
        extraReducers:{
            [getFeedbacks.fulfilled]: (state, action) => {
                state.error = false
                state.loading = false
                state.feedbacks = action.payload
            },
            [getFeedbacks.rejected]: (state, action) => {
                state.loading = false
                state.error = action.payload
    
            },
            [getFeedbacks.pending]: (state, action) => {
                state.loading = true
            },
        }
    })
    
    
    export const { upVotePost, addComent, createFeedback, sortFeedback, filterFeedback } = feedbacksSlice.actions
    export default feedbacksSlice.reducer