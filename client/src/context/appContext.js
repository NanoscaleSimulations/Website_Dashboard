
import React, { useReducer, useContext, useEffect } from 'react';
import reducer from './reducer';
import { DISPLAY_ALERT, CLEAR_ALERT, SETUP_USER_BEGIN, SETUP_USER_SUCCESS, SETUP_USER_ERROR, TOGGLE_SIDEBAR, LOGOUT_USER, UPDATE_USER_BEGIN, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, HANDLE_CHANGE, CLEAR_VALUES, 
CREATE_JOB_BEGIN, CREATE_JOB_SUCCESS, CREATE_JOB_ERROR, GET_JOBS_BEGIN, GET_JOBS_SUCCESS, SET_EDIT_JOB, DELETE_JOB_BEGIN, DELETE_JOB_ERROR, EDIT_JOB_BEGIN, EDIT_JOB_SUCCESS, EDIT_JOB_ERROR, 
CREATE_BLOG_BEGIN, CREATE_BLOG_SUCCESS, CREATE_BLOG_ERROR, GET_BLOGS_BEGIN, GET_BLOGS_SUCCESS, SET_EDIT_BLOG, DELETE_BLOG_BEGIN, DELETE_BLOG_ERROR, EDIT_BLOG_BEGIN, EDIT_BLOG_SUCCESS, EDIT_BLOG_ERROR,
SHOW_STATS_BEGIN, SHOW_STATS_SUCCESS,
CLEAR_FILTERS, CHANGE_PAGE,
GET_CURRENT_USER_BEGIN, GET_CURRENT_USER_SUCCESS
} from "./actions";
import axios from 'axios';



export const initialState = {
    userLoading: true,
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    userLocation: '',
    showSidebar: false, 
    isEditing: false,
    editJobId: '',
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',  
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    editBlogId: '',
    blogs: [],
    totalBlogs: 0,
    stats: {},
    monthlyApplications: [],
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // Axios
    // axios.defaults.headers['Authorization'] = `Bearer ${state.token}`;
    const authFetch = axios.create({
        baseURL: '/api/v1',
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
                payload: { user,  location, alertText },
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
            const { user, location} = data;
            
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: { user, location },
            });
        } catch (error) {
            if(error.response.status !== 401) {
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


    const clearValues = () => {
        dispatch({ type: CLEAR_VALUES })
    }


    // JOB CRUD START
    const createJob = async () => {

        dispatch({ type: CREATE_JOB_BEGIN });
        try {
            const { position, company, jobLocation, jobType, status } = state;
            
            await authFetch.post('/jobs', {
                company,
                position,
                jobLocation,
                jobType,
                status,
            });
            dispatch({
                type: CREATE_JOB_SUCCESS,
            });
            // call function instead clearValues()
            dispatch({ type: CLEAR_VALUES });
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: CREATE_JOB_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };


    // Read all jobs
    const getJobs = async () => {

        const { page, search, searchStatus, searchType, sort } = state;

        let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
        if (search) {
            url = url + `&search=${search}`;
        }
        dispatch({ type: GET_JOBS_BEGIN });
        try {
            const { data } = await authFetch(url);
            const { jobs, totalJobs, numOfPages } = data;
            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: {
                    jobs,
                    totalJobs,
                    numOfPages,
                },
            });
        } catch (error) {
            logoutUser();
        }
        clearAlert();
    }

    // Enable to edit a job
    const setEditJob = (id) => {
        dispatch({ type: SET_EDIT_JOB, payload: { id } })
    }

    // Edit a selected job
    const editJob = async () => {

        dispatch({ type: EDIT_JOB_BEGIN });
        try {
            const { position, company, jobLocation, jobType, status } = state;

            await authFetch.patch(`/jobs/${state.editJobId}`, {
                company,
                position,
                jobLocation,
                jobType,
                status,
            });
            dispatch({
                type: EDIT_JOB_SUCCESS,
            });
            dispatch({ type: CLEAR_VALUES });
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: EDIT_JOB_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };
        

    // Delete a job
    const deleteJob = async (jobId) => {

        dispatch({ type: DELETE_JOB_BEGIN });
        try {
            await authFetch.delete(`/jobs/${jobId}`);
            getJobs();
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: DELETE_JOB_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

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
    // JOB CRUD ENDS


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



    // BLOG CRUD STARTS
    const createBlog = async () => {

        dispatch({ type: CREATE_BLOG_BEGIN });
        try {
            const { title, subtitle, text, author, fulltext, readmore } = state;
            
            await authFetch.post('/blogs', {
                title, 
                subtitle, 
                text,
                author, 
                fulltext, 
                readmore
            });
            dispatch({
                type: CREATE_BLOG_SUCCESS,
            });
            // call function instead clearValues()
            dispatch({ type: CLEAR_VALUES });
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: CREATE_BLOG_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

        const getBlogs = async () => {
        
            let url = `/blogs`
        
            dispatch({ type: GET_BLOGS_BEGIN })
            try {
                const { data } = await authFetch(url)
                const { blogs, totalBlogs, numOfPages } = data
                dispatch({
                    type: GET_BLOGS_SUCCESS,
                    payload: {
                        blogs,
                        totalBlogs,
                        numOfPages,
                    },
                })
            } catch (error) {
                console.log(error.response)
                logoutUser()
            }
            clearAlert()
            
        }

        // Enable to edit a blog
    const setEditBlog = (id) => {
        dispatch({ type: SET_EDIT_BLOG, payload: { id } })
    }


    // Edit a selected blog
    const editBlog = async () => {

        dispatch({ type: EDIT_BLOG_BEGIN });
        try {
            const { title, subtitle, text, author, fulltext, readmore } = state;

            await authFetch.patch(`/blogs/${state.editBlogId}`, {
                title, subtitle, text, author, fulltext, readmore
            });
            dispatch({
                type: EDIT_BLOG_SUCCESS,
            });
            dispatch({ type: CLEAR_VALUES });
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: EDIT_BLOG_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };
        

    // Delete a blog
    const deleteBlog = async (blogId) => {

        dispatch({ type: DELETE_BLOG_BEGIN });
        try {
            await authFetch.delete(`/blogs/${blogId}`);
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
    //
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
            clearValues, 
            createJob,
            getJobs,
            setEditJob,
            deleteJob,
            editJob,
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
export const useAppContext = () => {
    return useContext(AppContext);
};


export { AppProvider };