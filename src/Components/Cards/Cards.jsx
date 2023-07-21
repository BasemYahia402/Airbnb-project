import "./Cards.css"
export default function Card(props){
    let badge;
    if (props.item.openSpots === 0) {
        badge = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badge= "ONLINE"
    }
    return(
        <div className="card">
            {badge && <div className="badge">{badge}</div>}
        <img src={`../../../public/Images/${props.item.coverImg}`} alt="" />
        <div className="card--stats">
            <img src={`../../../public/Images/Star1.png`} alt="" />
            <span>{props.item.stats.rating}</span>
            <span className="gray"> ({props.item.stats.reviewCount}) </span>
            <span className="gray">{props.item.location}</span>
        </div>
        <p className="card--title">{props.item.title}</p>
        <p className="card--price">{props.item.price}$</p>
        </div>
    )
}