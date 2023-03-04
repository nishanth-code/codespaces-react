import '../decor.css'
const images={
src1:"https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
 src2: "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
}
const app =()=>{
<div className="main">
    <div className="text">
    Celebrate the Occassion
    </div>
    <div className="card">
        <div className="item">
            <img src={images.src1} alt="" srcset="" />
            

        </div>
        <div className="item">
            <img src={images.src2} alt="" srcset="" />

        </div>
    </div>
</div>
}
export default app;