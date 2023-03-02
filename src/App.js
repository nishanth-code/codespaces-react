import './App.css';
import Corsel from './components/corousel'
import Content from './components/content'

function App() {
  return (
   <div className='body'> 
   <Corsel className='carosel'/> 
   <Content/>
   </div>
  );
}

export default App;
