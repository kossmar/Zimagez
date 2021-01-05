import React from "react"
// import "./styles.css"

function Card(props) {
    return (
        <div className="">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" alt="Thumbnailz [100%x225]" src={props.source} data-holder-rendered="true" />
                <div className="card-body">
                    <p className="box card-text">{props.title}.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card