
import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import { DISPLAY_ALERT, CLEAR_ALERT, SETUP_USER_BEGIN, SETUP_USER_SUCCESS, SETUP_USER_ERROR, TOGGLE_SIDEBAR, LOGOUT_USER, UPDATE_USER_BEGIN, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, HANDLE_CHANGE, CLEAR_VALUES, CREATE_JOB_BEGIN, CREATE_JOB_SUCCESS, CREATE_JOB_ERROR, CREATE_BLOG_BEGIN, CREATE_BLOG_SUCCESS, CREATE_BLOG_ERROR, GET_JOBS_BEGIN, GET_JOBS_SUCCESS, SET_EDIT_JOB, DELETE_JOB_BEGIN, DELETE_JOB_ERROR, EDIT_JOB_BEGIN, EDIT_JOB_SUCCESS, EDIT_JOB_ERROR } from "./actions";
import axios from 'axios';


// set as default
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    userLocation: userLocation || '',
    showSidebar: false, 
    isEditing: false,
    editJobId: '',
    position: '',
    company: '',
    jobLocation: userLocation || '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',  
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
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
authFetch.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${state.token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

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


const displayAlert = () => {
    dispatch({
        type: DISPLAY_ALERT,
    });
    clearAlert();
};

const clearAlert = () => {
    setTimeout(() => {
        dispatch({
            type: CLEAR_ALERT,
        });
    }, 3000);
};

//
const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
};

//
const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('location');
};


    //
    const setupUser = async ({ currentUser, endPoint, alertText }) => {

        // console.log(currentUser);
        dispatch({ type: SETUP_USER_BEGIN });
        try {
            const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser);
            const { user, token, location } = data;
            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: { user, token, location, alertText },
            })
            addUserToLocalStorage({
                user,
                token,
                location,
            });
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

    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER })
        removeUserFromLocalStorage();
    }

    const updateUser = async (currentUser) => {

        dispatch({ type: UPDATE_USER_BEGIN });
        try {
            const { data } = await authFetch.patch('/auth/updateUser', currentUser);
        
            // no token
            const { user, location, token } = data;
        
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: { user, location, token },
            });

            addUserToLocalStorage({ user, location, token });
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

    const getJobs = async () => {
        let url = `/jobs`
    
        dispatch({ type: GET_JOBS_BEGIN })
        try {
            const { data } = await authFetch(url)
            const { jobs, totalJobs, numOfPages } = data
            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: {
                    jobs,
                    totalJobs,
                    numOfPages,
                },
            })
        } catch (error) {
            console.log(error.response)
            logoutUser()
        }
        clearAlert()
    }

    const setEditJob = (id) => {
        dispatch({ type: SET_EDIT_JOB, payload: { id } })
    }

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


    // BLOG
    const createBlog = async () => {

        dispatch({ type: CREATE_BLOG_BEGIN });
        try {
            const { title, subtitle, author, text, fulltext, readmore } = state;
        
            await authFetch.post('/blog', {
                title, 
                subtitle, 
                author, 
                text, 
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
            createBlog,
            getJobs,
            setEditJob,
            deleteJob,
            editJob,
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