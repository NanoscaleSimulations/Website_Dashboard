
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
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
        id: 9,
        text: 'Client section'
    },
    {
        id: 3,
        text: 'all jobs',
        path: 'all-jobs',
        icon: <MdQueryStats />,
    },
    {
        id: 4,
        text: 'add job',
        path: 'add-job',
        icon: <FaWpforms />,
    },
    {
        id: 5, 
        text: 'all blogs',
        path: 'all-blogs',
        icon: <FaBlogger />,
    },
    {
        id: 6, 
        text: 'add blog',
        path: 'add-blog',
        icon: <FaBlogger />,
    },
    {
        text: 'User section',
        id: 8,
    },
    {
        id: 7,
        text: 'profile',
        path: 'profile',
        icon: <ImProfile />,
    },
    {
        id: 10,
        text: 'users',
        path: 'users',
        icon: <FaUsers />
    }
];

export default links;