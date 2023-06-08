
import React, { useReducer, useContext, useEffect } from 'react';
import reducer from './reducer';
import {
    DISPLAY_ALERT, CLEAR_ALERT, SETUP_USER_BEGIN, SETUP_USER_SUCCESS, SETUP_USER_ERROR, TOGGLE_SIDEBAR, LOGOUT_USER, UPDATE_USER_BEGIN, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, HANDLE_CHANGE, CLEAR_VALUES,
    CREATE_BLOG_BEGIN, CREATE_BLOG_SUCCESS, CREATE_BLOG_ERROR, GET_BLOGS_BEGIN, GET_BLOGS_SUCCESS, SET_EDIT_BLOG, DELETE_BLOG_BEGIN, DELETE_BLOG_ERROR, EDIT_BLOG_BEGIN, EDIT_BLOG_SUCCESS, EDIT_BLOG_ERROR,
    SHOW_STATS_BEGIN, SHOW_STATS_SUCCESS,
    CLEAR_FILTERS, CHANGE_PAGE,
    GET_CURRENT_USER_BEGIN, GET_CURRENT_USER_SUCCESS, CLEAR_BLOG_VALUES, HANDLE_FILE_CHANGE
} from "./actions";
import axios from 'axios';

const initialState = {
    userLoading: true,
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    userLocation: '',
    showSidebar: false,
    isEditing: false,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],

    // blog properties
    blogs: [],
    totalBlogs: 0,
    title: '',
    subtitle: '',
    author: '',
    description: '',
    readmore: '',
    fulltext: '',
    editBlogId: '',
    blogImage: [],
};


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // Axios
    // axios.defaults.headers['Authorization'] = `Bearer ${state.token}`;
    const authFetch = axios.create({
        baseURL: 'api/v1',
    });

    // Request interceptor

    // Response interceptor
    authFetch.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log(error.response);
            if (error.response.status === 401) {
                logoutUser()
            }
            return Promise.reject(error);
        }
    );

    //
    const displayAlert = () => {
        dispatch({
            type: DISPLAY_ALERT,
        });
        clearAlert();
    };

    //
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({
                type: CLEAR_ALERT,
            });
        }, 3000);
    };


    //
    const setupUser = async ({ currentUser, endPoint, alertText }) => {

        // console.log(currentUser);
        dispatch({ type: SETUP_USER_BEGIN });
        try {
            const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser);
            const { user, location } = data;
            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: { user, location, alertText },
            })
        } catch (error) {
            dispatch({
                type: SETUP_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
        clearAlert();
    };


    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
    };

    const logoutUser = async () => {
        await authFetch.get('/auth/logout');
        dispatch({ type: LOGOUT_USER });
    };

    // Update a selected user
    const updateUser = async (currentUser) => {

        dispatch({ type: UPDATE_USER_BEGIN });
        try {
            const { data } = await authFetch.patch('/auth/updateUser', currentUser);

            // no token
            const { user, location } = data;

            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: { user, location },
            });
        } catch (error) {
            if (error.response.status !== 401) {
                dispatch({
                    type: UPDATE_USER_ERROR,
                    payload: { msg: error.response.data.msg },
                });
            }
        }
        clearAlert();
    };


    const handleChange = ({ name, value }) => {
        dispatch({
            type: HANDLE_CHANGE,
            payload: { name, value },
        })
    }

    const handleInputFileChange = ({ name, value }) => {
        dispatch({ type: HANDLE_FILE_CHANGE, payload: { name, value } });
    };

    const clearBlogValues = () => {
        dispatch({ type: CLEAR_BLOG_VALUES });
    };


    const clearValues = () => {
        dispatch({ type: CLEAR_VALUES })
    }

    
    // Show all stats from the 3 different status
    const showStats = async () => {
        dispatch({ type: SHOW_STATS_BEGIN })
        try {
            const { data } = await authFetch('/jobs/stats')
            dispatch({
                type: SHOW_STATS_SUCCESS,
                payload: {
                    stats: data.defaultStats,
                    monthlyApplications: data.monthlyApplications,
                },
            })
        } catch (error) {
        console.log(error.response)
            logoutUser()
        }

        clearAlert()
    }


    // BLOG CRUD BEGINS
    const createBlog = async () => {
        dispatch({ type: CREATE_BLOG_BEGIN });
        try {
            const { title, subtitle, author, description, readmore, fulltext, blogImage } = state;
            // using form data beacuse image file is uploaded
            const formData = new FormData();
            formData.append('title', title);
            formData.append('subtitle', subtitle);
            formData.append('author', author);
            formData.append('description', description);
            formData.append('readmore', readmore);
            formData.append('fulltext', fulltext);
            formData.append('blogImage', blogImage);

            await authFetch.post('/blog', formData, {});

            dispatch({ type: CREATE_BLOG_SUCCESS });
            dispatch({ type: CLEAR_BLOG_VALUES });
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: CREATE_BLOG_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

    const getBlogs = async (isBlogPage) => {
        const { page, search, searchStatus, searchType, sort } = state;
        let url = '';
        if (isBlogPage) {
            url = `/landing-blog?page=${page}&status=${searchStatus}&blogType=${searchType}&sort=${sort}&isLanding=${isBlogPage}`;
        }
        else {
            url = `/blog?page=${page}&status=${searchStatus}&blogType=${searchType}&sort=${sort}&isLanding=${isBlogPage}`;
        }
        if (search) {
            url = url + `&search=${search}`;
        }
        dispatch({ type: GET_BLOGS_BEGIN });
        try {
            const { data } = await authFetch.get(url);
            const { blogs, totalBlogs, numOfPages } = data;
            dispatch({
                type: GET_BLOGS_SUCCESS,
                payload: {
                    blogs,
                    totalBlogs,
                    numOfPages,
                },
            });
        } catch (error) {
            logoutUser();
        }
        clearAlert();
    };

    const setEditBlog = (id) => {
        dispatch({ type: SET_EDIT_BLOG, payload: { id } });
    };

    const editBlog = async () => {
        dispatch({ type: EDIT_BLOG_BEGIN });

        try {
            const { title,
                subtitle,
                author,
                description,
                readmore,
                fulltext } = state;
            console.log("i am in edit blog");
            await authFetch.patch(`/blog/${state.editBlogId}`, {
                title,
                subtitle,
                author,
                description,
                readmore,
                fulltext
            });
            dispatch({ type: EDIT_BLOG_SUCCESS });
            dispatch({ type: CLEAR_BLOG_VALUES });
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: EDIT_BLOG_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

    const deleteBlog = async (BlogId) => {
        dispatch({ type: DELETE_BLOG_BEGIN });
        try {
            await authFetch.delete(`/blog/${BlogId}`);
            getBlogs();
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: DELETE_BLOG_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

    // Clear Filters
    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS });
    };

    // PAGIBATION
    const changePage = (page) => {
        dispatch({ type: CHANGE_PAGE, payload: { page } })
    }

    // GET CURRENT USER COOKIES
    const getCurrentUser = async () => {
        dispatch({ type: GET_CURRENT_USER_BEGIN });
        try {
            const { data } = await authFetch('/auth/getCurrentUser');
            const { user, location } = data;

            dispatch({
                type: GET_CURRENT_USER_SUCCESS,
                payload: { user, location },
            });
        } catch (error) {
            if (error.response.status === 401) return;
            logoutUser();
        }
    };
    useEffect(() => {
        getCurrentUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // BLOG CRUD ENDS

    return (
        <AppContext.Provider
            value={{
                ...state,
                displayAlert,
                setupUser,
                toggleSidebar,
                logoutUser,
                updateUser,
                handleChange,
                handleInputFileChange,
                clearValues,
                clearBlogValues,
                createBlog,
                getBlogs,
                setEditBlog,
                deleteBlog,
                editBlog,
                showStats,
                clearFilters,
                changePage,
                getCurrentUser,
            }} >
            {children}
        </AppContext.Provider>
    );
};


// make sure use
const useAppContext = () => {
    return useContext(AppContext);
};


export { AppProvider, initialState, useAppContext };