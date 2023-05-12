import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {products} from '../../constant/data';
import { makeStyles , Box, Typography} from '@material-ui/core';
// import { fabClasses } from '@mui/material';
import Countdown from 'react-countdown';
import React from 'react';

const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    }
  };
   const useStyle = makeStyles({
       text:{
        fontSize:14,
        
       },

    dealtext :{
        fontSize: 22,
        lineHeight:'32px',
        fontWeight: 300,
        fontStyle: 'italic',
        fontFamily: '',
        color: '#8860D0'

    },
    
    deal: {
        padding : '15px 20px',
        display: 'flex'

    },
    
    image: {

       }
       
   })

const Slide = ( {timer, title}) => {
    const classes= useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    return(
        <Box className = {classes.component}>
        <Box className = {classes.deal}>
            <Typography className = {classes.dealtext} >{title} </Typography>
        {   timer &&
            <React.Fragment>
            <img src = {timerURL} style={ {width:24}}/>
            <Countdown date={Date.now() + 8.28e+7} />
            </React.Fragment>
        }
            </Box>
        <Carousel responsive={responsive}
                  infinite ={true}
                  centerMode={true}
                  autoPlay={true}
                  autoPlaySpeed	= {5000}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  containerClass="carousel-container"

        >
        {products.map(products => (
            <Box textAlign="center">
            <img src = {products.url} className={classes.image}/>
            <Typography className = {classes.text} style ={{color:"#8860d0"}}>{products.title.shortTitle}</Typography>
            <Typography className = {classes.text}>{products.discount}</Typography>
            <Typography className = {classes.text} style = {{color:"#5ab9ea"}}>{products.tagline}</Typography>
            </Box>
        ))
          
        }
            
        </Carousel>
        </Box>

    )
}

export default Slide;