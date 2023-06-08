import * as React from 'react';
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
import ModalOne from './modal';
import Lndmode from '../Darkmode/darkmode';


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

export default function BlogMain() {


    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
    setExpanded(!expanded);
    };


    return (
        <div className=''>
            <Card >
                <main>
                <CardHeader
                    title={
                        <Typography sx={{ color:'#3C9FE1' }}>
                            <div className='blog-card-titel'>
                                <h5>VR Med Kemi Og MoleKyler</h5>
                            </div>
                        </Typography>
                    }
                />
                
                <CardContent>
                    <Typography sx={{ fontSize: 16}} variant="body2" color="text.secondary">
                    <div className='blog-p'>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
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
                            <p>September 14, 2016</p>
                        </div>
                    
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    </IconButton>
                    <Lndmode/>
                    <ModalOne/>
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
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </div>
                    </Typography>
                    <Typography>
                        <div className='blog-p'>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </div>
                    </Typography>
                    </CardContent>
                </Collapse>
            </main>
        </Card>
    </div>
    );
}