import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'
import { bannerData } from '../../constant/data';


const useStyle = makeStyles ({
   
    image: {
        width: '100%'
    }   
})

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel 
            autoPlay={true} 
            animation="fade" 
            indicators={false}
            cycleNavigation={true}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} />
                ))
            }
        </Carousel>
    )
}

export default Banner;