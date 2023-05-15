
import { 
    DISPLAY_ALERT, 
    CLEAR_ALERT, 
    SETUP_USER_BEGIN, 
    SETUP_USER_SUCCESS, 
    SETUP_USER_ERROR, 
    TOGGLE_SIDEBAR, 
    LOGOUT_USER,
    UPDATE_USER_BEGIN, 
    UPDATE_USER_SUCCESS, 
    UPDATE_USER_ERROR, 
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_JOB_BEGIN, 
    CREATE_JOB_SUCCESS, 
    CREATE_JOB_ERROR,
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS, 
    SET_EDIT_JOB,
    DELETE_JOB_BEGIN,
    DELETE_JOB_ERROR,
    EDIT_JOB_BEGIN, 
    EDIT_JOB_SUCCESS, 
    EDIT_JOB_ERROR, 
    CREATE_BLOG_BEGIN, CREATE_BLOG_SUCCESS, CREATE_BLOG_ERROR, GET_BLOGS_BEGIN, GET_BLOGS_SUCCESS, SET_EDIT_BLOG, DELETE_BLOG_BEGIN, DELETE_BLOG_ERROR, EDIT_BLOG_BEGIN, EDIT_BLOG_SUCCESS, EDIT_BLOG_ERROR, 
    SHOW_STATS_BEGIN, SHOW_STATS_SUCCESS
} from "./actions";
import { initialState } from "./appContext";



const reducer = (state, action) => {

    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!',
        };
    }

    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: '',
        };
    }

     // Setup user with register and login
    if(action.type === SETUP_USER_BEGIN) {
        return { 
            ...state, 
            isLoading: true 
        };
    }

    if(action.type === SETUP_USER_SUCCESS) {
        return { 
            ...state, 
            isLoading: false, 
            token:action.payload.token, 
            user:action.payload.user, 
            userLocation:action.payload.location, 
            jobLocation:action.payload.location, 
            showAlert:true, 
            alertType:'success', 
            alertText:action.payload.alertText, 
        };
    }

    if(action.type === SETUP_USER_ERROR) {
        return { 
            ...state, 
            isLoading: false, 
            showAlert:true, 
            alertType:'danger', 
            alertText: action.payload.msg, 
        };
    }

    if(action.type === TOGGLE_SIDEBAR) {
        return { 
            ...state, 
            showSidebar: !state.showSidebar, 
        };
    }

    if(action.type === LOGOUT_USER) {
        return {
            ...initialState,
            user: null,
            token: null,
            jobLocation: '',
            userLocation: '',

        };
    }

    if (action.type === UPDATE_USER_BEGIN) {
        return { ...state, isLoading: true }
    }
    
    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token:action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText: 'User Profile Updated!',
        }
    }

    if (action.type === UPDATE_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }

    if (action.type === HANDLE_CHANGE) {
        return { 
            ...state, 
            [action.payload.name]: action.payload.value 
        };
    }

    // GLOBAL CLEAR VALUES
    if (action.type === CLEAR_VALUES) {
            const initialState = {
            isEditing: false,
            editJobId: '',
            position: '',
            company: '',
            jobLocation: state.userLocation,
            jobType: 'full-time',
            status: 'pending',
            title: '',
            subtitle: '',
            author: '',
            text: '',
            fulltext: '',
            readmore: '',
        };
        return { ...state, ...initialState };
    }


    // JOB
    if (action.type === CREATE_JOB_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === CREATE_JOB_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'New Job Created!',
        };
    }

    if (action.type === CREATE_JOB_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }

    
    if (action.type === GET_JOBS_BEGIN) {
        return { ...state, isLoading: true, showAlert: false };
    }
    
    if (action.type === GET_JOBS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            jobs: action.payload.jobs,
            totalJobs: action.payload.totalJobs,
            numOfPages: action.payload.numOfPages,
        };
    }
    
    if (action.type === SET_EDIT_JOB) {
        const job = state.jobs.find((job) => job._id === action.payload.id);
        const { _id, position, company, jobLocation, jobType, status } = job;
        return {
            ...state,
            isEditing: true,
            editJobId: _id,
            position,
            company,
            jobLocation,
            jobType,
            status,
        };
    }

    if (action.type === DELETE_JOB_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === DELETE_JOB_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }

    if (action.type === EDIT_JOB_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === EDIT_JOB_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'Job Updated!',
        };
    }

    if (action.type === EDIT_JOB_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }

    if (action.type === SHOW_STATS_BEGIN) {
        return { ...state, isLoading: true, showAlert: false };
    }

    if (action.type === SHOW_STATS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            stats: action.payload.stats,
            monthlyApplications: action.payload.monthlyApplications,
        };
    }


    
    // BLOG
    if (action.type === CREATE_BLOG_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === CREATE_BLOG_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'New Blog Created!',
        };
    }

    if (action.type === CREATE_BLOG_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }

    if (action.type === GET_BLOGS_BEGIN) {
        return { ...state, isLoading: true, showAlert: false };
    }
    
    if (action.type === GET_BLOGS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            blogs: action.payload.blogs,
            totalBlogs: action.payload.totalBlogs,
            numOfPages: action.payload.numOfPages,
        };
    }
    
    if (action.type === SET_EDIT_BLOG) {
        const blog = state.blogs.find((blog) => blog._id === action.payload.id);
        const { _id, title, subtitle, author, text, fulltext, readmore } = blog;
        return {
            ...state,
            isEditing: true,
            editBlogId: _id,
            title, subtitle, author, text, fulltext, readmore
        };
    }

    if (action.type === DELETE_BLOG_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === DELETE_BLOG_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }

    if (action.type === EDIT_BLOG_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === EDIT_BLOG_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'blog Updated!',
        };
    }

    if (action.type === EDIT_BLOG_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }

    throw new Error(`no such action :${action.type}`);
};

export default reducer;