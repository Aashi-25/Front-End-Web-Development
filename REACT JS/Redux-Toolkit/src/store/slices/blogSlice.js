import { createSlice, nanoid } from "@reduxjs/toolkit";
import BlogList from "../../blog-app/blog-list";

const initialState = {
    FormData: {
        title: '',
        description: ''
    },
    BlogList: [],
    currentEditedBlogId: null
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        handleInputChange: (state, action) => {
            let cpyFormData = { ...state.FormData };
            cpyFormData = {
                ...cpyFormData,
                ...action.payload
            }

            state.FormData = cpyFormData
        },

        handleAddToDo: (state, action) => {
            console.log('handleAddToDo is called');

            console.log(action);
            state.BlogList.push({
                id: nanoid(),
                ...state.FormData,
            });

            state.FormData = {
                title: "",
                description: "",
            }
            console.log("Reset:", state.FormData);

            localStorage.setItem("blogList", JSON.stringify(state.BlogList));
        },

        setBlogListOnInitialLoad: (state, action) => {
            state.BlogList = action.payload.BlogList;
        },

        handleDeleteBlog: (state, action) => {
            console.log(action.payload);
            const { payload } = action;
            const { currentBlogId } = payload

            let cpyBlogList = [...state.BlogList];

            cpyBlogList = cpyBlogList.filter(singleBlogItem => singleBlogItem.id !== currentBlogId);

            state.BlogList = cpyBlogList;
            localStorage.setItem("BlogList", JSON.stringify(cpyBlogList))
        },

        setCurrentEditedBlogId: (state, action) => {
            console.log(action.payload);
            const { payload } = action;
            const { currentBlogId } = payload;

            state.currentEditedBlogId = currentBlogId;
        },

        handleEditBlog: (state , action) => {
            console.log('handleEditBlog is called');

            let cpyBlogList = [...state.BlogList];
            const findIndexOfCurrentBlogItem = cpyBlogList.findIndex((singleBlogItem) => singleBlogItem.id === state.currentEditedBlogId);

            console.log(findIndexOfCurrentBlogItem);

            cpyBlogList[findIndexOfCurrentBlogItem] = {
                ...cpyBlogList[findIndexOfCurrentBlogItem],
                ...state.FormData
            }

            state.BlogList = cpyBlogList;
            localStorage.setItem('blogList' , JSON.stringify(cpyBlogList));
        }
    }
})

export const { handleInputChange, handleAddToDo, setBlogListOnInitialLoad, handleDeleteBlog, setCurrentEditedBlogId , handleEditBlog} = blogSlice.actions
export default blogSlice.reducer; 