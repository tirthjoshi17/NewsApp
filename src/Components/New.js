import React, { Component } from 'react'
export default class New extends Component {
    render() {
        let { author, img, title, description, url, timing, source } = this.props;
        return (
            <>

                <div className="card my-1">
                    <img src={img} className="card-img-top" alt="..." style={{ width: "100%" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%"}}>
                            {source}
                            {/* <span class="visually-hidden">unread messages</span> */}
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <div className="d-flex justify-content-between">
                            <a href={url} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">Read More</a>
                            <footer className="text-dark">By <cite title="Source Title">{author ? author : "Mr. Unknown"}</cite></footer>
                        </div>
                        <p className="card-text text-end"><small className="text-muted">Last updated {new Date(timing).toGMTString()}</small></p>
                    </div>
                </div>
            </>
        )
    }
}
