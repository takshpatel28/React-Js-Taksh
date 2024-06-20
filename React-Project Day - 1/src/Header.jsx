import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
function Header(){
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"#55AD9B"}}>
            <div>
                <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/07/21183204/symbol.png" alt="" height={80} width={140} />
            </div>

            <div style={{display:"flex",alignItems:"center",fontWeight:"700",fontFamily:"sans-serif",color:"#F8F6F4"}}>
                <li style={{padding:"25px"}}>Home</li>
                <li style={{padding:"25px"}}>About</li>
                <li style={{padding:"25px"}}>Contact</li>
            </div>

            <div style={{fontSize:"22px",color:"#F8F6F4"}}>
                <FaFacebookF style={{padding:"0 15px"}} />
                <BsTwitterX  style={{padding:"0 15px"}} />
                <SiInstagram style={{padding:"0 15px"}} /> 
            </div>
        </div>
    )
}

export default Header;