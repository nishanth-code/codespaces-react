import 'bootstrap/dist/css/bootstrap.min.css';
import '../decorcategories.css'
import Card from 'react-bootstrap/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Nav from 'react-bootstrap/Nav';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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



const app =()=>{
    return(
    <>
    <h3>Decors by categories</h3>
     <>
      <Nav className="justify-content-start" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Birthday</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Anniversary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Baby Shower</Nav.Link>
        </Nav.Item>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Link eventKey="disabled" disabled>
            Disabled
        </Nav.Link>
        </Nav>
        
      </Nav>
     
      
    </>
    <div>
         <Carousel responsive={responsive}  itemClass="categories"  prtialVisible={true} >
        <div> 
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" alt="jiji" style={{width:'180px',height:'100px',}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         lorem epsum
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" alt="jiji" style={{width:'180px',height:'100px',}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         lorem epsum
        </Card.Text>
        
      </Card.Body>
     
    </Card>
     </div>
       <div>
      
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="jiji" style={{width:'280px',height:'100px',}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         lorem epsum
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </Carousel>
  
    </div>
    </>
    );
    
}
export default app;