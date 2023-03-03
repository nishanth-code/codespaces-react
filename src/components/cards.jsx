
import '../cards.css'

const cards = (props) =>{
     return(
        <div className="card">
            <img src={props.src} alt="" srcset="" className="image" />
           
        </div>
     );
}
export default cards;