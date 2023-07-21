import "./Fsection.css"
import img from "../../../public/Images/1.png"
export default function Fsection(){
    return(
        <section className="F--section">
           <img src={img} alt="erorr" className="section--img" />
           <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}