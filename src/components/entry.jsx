import "../App.css"

const Entry = (props) =>{
    // console.log(props)
    return(
        <article className="journal-entry">
            <div className="main-img-container">
                <img src={props.img.src}  className="mainimg"/>
            </div>
            <div className="content">
                <img className ="marker" src="src/assets/marker.png" alt="marker"/>
                <span>{props.country}</span>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>
        </article>
    )
};

export {Entry};
