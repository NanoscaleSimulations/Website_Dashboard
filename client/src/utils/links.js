
import { IoBarChartSharp } from 'react-icons/io5';
import { MdPlace, MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaBlogger, FaUsers } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';

// path needs to be the same as in the app.js
const links = [
    {
        id: 0,
        text: 'Overview'
    },
    {
        id: 1,
        text: 'stats',
        path: '/',
        icon: <IoBarChartSharp />,
    },
    {
        id: 2, 
        text: 'geography', 
        path: 'geography', 
        icon: <GiWorld />,
    },
    {
        id: 3,
        text: 'Client section'
    },

    // {
    //     id: 3,
    //     text: 'all blogs',
    //     path: 'all-blogs',
    //     icon: <FaBlogger />,
    // },
    {
        id: 4,
        text: 'blogs',
        path: 'blogs',
        icon: <FaBlogger />,
    },
    {
        text: 'User section',
        id: 5,
    },
    {
        id: 6,
        text: 'profile',
        path: 'profile',
        icon: <ImProfile />,
    },
    {
        id: 7,
        text: 'users',
        path: 'users',
        icon: <FaUsers />
    }
];

export default links;