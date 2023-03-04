import '../offer.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

  const app =() =>{
    return(
      <>
      <p className='header'> discount & Offers</p>
    <Carousel responsive={responsive}  itemClass="offer-item"  prtialVisible={true} >
      <div className="offer-banner" >
            
           <p className='text' align="center">more offers</p>
        </div>
        <div className="offer-banner" >
            
           <p className='text' align="center">more offers</p>
        </div>
        <div className="offer-banner" >
            
           <p className='text' align="center">more offers</p>
        </div>
    </Carousel>
    </>
    );

  }

  
 export default app;