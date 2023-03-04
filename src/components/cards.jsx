import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const cards = (props) =>{
     return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} alt="jiji" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         {props.text}
        </Card.Text>
        
      </Card.Body>
    </Card>
     );
}
export default cards;