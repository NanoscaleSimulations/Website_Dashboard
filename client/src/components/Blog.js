
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';
import BlogInfo from './BlogInfo';
import moment from 'moment';


const Blog = ({
    _id,
    title,
    subtitle,
    author,
    text,
    fulltext,
    readmore,
    createdAt,
    
}) => {
    const { setEditBlog, deleteBlog } = useAppContext();

    let date = moment(createdAt);
    date = date.format('MMM Do, YYYY');

    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{author.charAt(0)}</div>
                <div className='info'>
                <h5>{title}</h5>
                <p>{subtitle}</p>
                <p>{readmore}</p>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                <BlogInfo icon={<FaLocationArrow />} text={text} />
                <BlogInfo icon={<FaCalendarAlt />} text={date} />
                <BlogInfo icon={<FaBriefcase />} text={fulltext} />
                
                </div>
                <footer>
                    <div className='actions'>
                        <Link
                        to='/add-blog'
                        onClick={() => setEditBlog(_id)}
                        className='btn edit-btn'
                        >
                        Edit
                        </Link>
                        <button
                        type='button'
                        className='btn delete-btn'
                        onClick={() => deleteBlog(_id)}
                        >
                        Delete
                        </button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    );
};


export default Blog;
