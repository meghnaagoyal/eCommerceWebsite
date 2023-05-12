import { Box, makeStyles, Grid } from '@material-ui/core';
import clsx from 'clsx';

const ImageURL = [
'https://d.img.vision/webtech/pic2-(960x960)-960x960-COVER.jpg',
   'https://d.img.vision/webtech/pic1-(960x960)-960x960-COVER.jpg',
    'https://d.img.vision/webtech/pic3-(960x960)-960x960-COVER.jpeg'
];

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}));

const MidSection = () => {
    const classes = useStyle();
    const url = 'https://d.img.vision/webtech/mid-(3006x433)-3006x433-FILL.jpeg';
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} className={classes.image} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src={url} className={clsx(classes.wrapper, classes.help)} style={{width: '100%'}} />
        </>
    )
}

export default MidSection;