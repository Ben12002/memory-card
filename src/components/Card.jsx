

function Card({species, imageURL, onClick}) {

    return(
        <div className="card" onClick={onClick}>
            <img src={imageURL}></img>
            <div>{species}</div>
        </div>
    )
}

export default Card