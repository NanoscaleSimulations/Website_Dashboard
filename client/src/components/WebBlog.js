
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import moment from 'moment';


const WebBlog = ({
    _id,
    position,
    company,
    jobLocation,
    jobType,
    createdAt,
    status,
}) => {

    let date = moment(createdAt);
    date = date.format('MMM Do, YYYY');

    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{company.charAt(0)}</div>
                <div className='info'>
                <h5>{position}</h5>
                <p>{company}</p>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                <JobInfo icon={<FaCalendarAlt />} text={date} />
                <JobInfo icon={<FaBriefcase />} text={jobType} />
                <div className={`status ${status}`}>{status}</div>
                </div>
            </div>
        </Wrapper>
    );
};


export default WebBlog;
