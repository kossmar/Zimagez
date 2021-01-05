import React from "react"
// import "./styles.css"

function Card(props) {
    return (
        <div className="col-md-3">
            <div className="butt card mb-4 box-shadow">
                <img className="butt card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnailz [100%x225]" style={{height: 225 + 'px', width: 100 + '%', display: "block"}} src={props.source} data-holder-rendered="true" />
                {/* <div className="card-body">
                    <p className="box card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">9 mins</small>
                    </div>
                </div> */}
            </div>
        </div>
    )

}

export default Card