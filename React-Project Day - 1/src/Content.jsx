function Content(){
    return(
        <div style={{display:"flex",width:"78%",margin:"auto",textAlign:"left",justifyContent:"space-between"}}>
            <div>
                <h1 style={{fontSize:"50px"}}>Mercedes <br />Classic Model</h1>
                <p style={{lineHeight:"25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Eos voluptatem non maxime ducimus ut! Quod, <br />aliquam, veritatis autem sit mollitia qui atque, praesentium <br />necessitatibus dolorum odio vel.</p><br />
                <div className="circles" style={{display:"flex"}}>
                    <div style={{backgroundColor:"orange",height:"50px",width:"50px",borderRadius:"50%",margin:"35px 0"}}></div>
                    <div style={{backgroundColor:"red",height:"65px",width:"65px",borderRadius:"50%"}}></div>
                    <div style={{backgroundColor:"#3572EF",height:"60px",width:"60px",borderRadius:"50%",margin:"30px 0"}}></div>
                </div>
            </div>
            <div className="img"><br />
                <img src="https://wallpapers.com/images/featured/mercedes-benz-car-ny0t9dy51koviur4.jpg" alt="" style={{borderRadius:"10px"}} height={400} />
            </div>
        </div>
    )
}

export default Content;