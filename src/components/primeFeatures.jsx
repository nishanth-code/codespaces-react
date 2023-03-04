import '../prime.css'
const src={
    one:"../images/one.png",
    two:"../images/2.png",
    three:"../images/4.png",
    four:"../images/5.png",
    five:"../images/6.png"
}
const app =()=>
{
    return(
        <>
        <hr className='horizantal-rule'/>
      <div className="f-bar">
        <img
            draggable={false}
            alt='footer'
            src={require("../images/one.png")}
            className='fimg'
          />
          <img
            draggable={false}
            alt='footer'
            src={require("../images/2.png")}
            className='fimg'
          />
          <img
            draggable={false}
            alt='footer'
            src={require("../images/4.png")}
            className='fimg'
          />
          <img
            draggable={false}
            alt='footer'
            src={require("../images/5.png")}
            className='fimg'
          />
          <img
            draggable={false}
            alt='footer'
            src={require("../images/6.png")}
            className='fimg'
          />
    </div> 
    </> 
    );
}
export default app;