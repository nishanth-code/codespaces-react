
import '../cards.css'

const cards = ({src,props}) =>{
     return(
        <div className="card">
            <img src={src} alt="" srcset="" className="image" />
           
        </div>
     );
}
export default cards;