import * as React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Chip, Stack } from '@mui/material';
import Lndmode from '../components/Darkmode/darkmode';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Container } from 'react-bootstrap';
import '../styles/Blog.css';
import Modal from '@mui/material/Modal';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const ExpandMore = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
}),
}));



const Blog = ({
    _id,
    title,
    subtitle,
    author,
    description,
    readmore,
    createdAt,
    fulltext,
    blogImage,
    isBlogPage
}) => {

    const style = {
        marginTop:'5%',
    };
    
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = (breakpoint) => {
        setOpen(!open)
        setFullscreen(breakpoint);
    }
    const handleClose = () => setOpen(false);
    const [fullscreen, setFullscreen] = useState(true);

    const { setEditBlog, deleteBlog } = useAppContext()

    let date = moment(createdAt)
    date = date.format('MMM Do, YYYY');
    const blogImageName = blogImage?.substring(33);

    return (

        <div className=''>
            <Container>
                <Card>
                    <CardMedia
                    component="img"
                    style={{height:'220px'}}
                    src={"../../blogImages/" + blogImageName}
                    alt="Paella dish"
                    />
                    <main>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {author.charAt(0)}
                            </Avatar>
                            }
                            title={
                                <Typography sx={{ color:'#3C9FE1' }}>
                                    <div className='blog-card-titel'>
                                        <h5>{title}</h5>
                                        <h6>{subtitle}</h6>
                                    </div>
                                </Typography>
                            }
                        />
                        
                        <CardContent>
                            <Typography sx={{ fontSize: 16}} variant="body2" color="text.secondary">
                            <div className='blog-p'>
                                {description}
                            </div>
                            </Typography>
                            <Box sx={{ m: 2 , pt:1}}>
                                <Stack direction="row" spacing={1}>
                                <Chip  label="VR" />
                                <Chip color="primary" label="Kemi" />
                                <Chip label="AR" />
                                <Chip color="primary" label="Tech" />
                                </Stack>
                            </Box>
                            <hr></hr>
                            <Typography sx={{ fontSize: 14, color:'#3C9FE1' }}>
                                <div className='blog-dato'>
                                    <p>{date}</p>
                                    <p>{author}</p>
                                </div>
                            
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            </IconButton>
                            <Lndmode/>
                            <FullscreenIcon  onClick={handleOpen} color="primary" sx={{fontSize:40}} />
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                fullscreen={fullscreen}
                            >
                                <Box sx={style}>
                                    <Paper
                                    sx={{
                                        p: 2,
                                        margin: 'auto',
                                        flexGrow: 1,
                                        backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                    }}
                                    >
                                    <Grid container spacing={2}>
                                        <Grid item>
                                        <ButtonBase sx={{ width: 400, height: 400, maxWidth: 400, maxheight: 400 }}>
                                            <Img  src={"../../blogImages/" + blogImageName} alt="Paella dish" />
                                        </ButtonBase>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                {author.charAt(0)}
                                            </Avatar>
                                            <hr></hr>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                <h2>{title}</h2>
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                <h4>{subtitle}</h4>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {fulltext}
                                            </Typography>
                                            </Grid>
                                            <Grid item>
                                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                                <p>{author}</p>
                                                <p>{date}</p>
                                            </Typography>
                                            </Grid>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    </Paper>
                                </Box>
                            </Modal>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            className='blog-expand'
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>
                                <div className='blog-mellemtitel'>
                                    <p>Metode:</p>
                                </div>
                            </Typography>
                            <Typography paragraph>
                                <div className='blog-p'>
                                    {readmore}
                                </div>
                            </Typography>
                            </CardContent>
                        </Collapse>
                    </main>
                </Card>
                {isBlogPage ? (<>
                </>) : <>
                    <footer>
                        <div className='actions'>
                            <Link
                                to='/blogs'
                                className='btn edit-btn btn-success'
                                onClick={() => setEditBlog(_id)}
                            >
                                Edit
                            </Link>
                            <button
                                type='button'
                                className='btn delete-btn btn-danger mx-2'
                                onClick={() => deleteBlog(_id)}
                            >
                                Delete
                            </button>
                        </div>
                    </footer>
                </>}
            </Container>
            <div className='content'>
                <div className='content-center'>
                    {/*<BlogInfo icon={<FaBriefcase />} text={fulltext} /> */ }
                </div>
            </div>
        </div>

    )
}

export default Blog
