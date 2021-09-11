import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

    func = (e) => {
        let a = document.getElementsByClassName('nav-link');
        for (let i = 0; i < a.length; i++) {
            a[i].className = "nav-link";
        }
        if (e.target.className !== "navbar-brand") {
            e.target.className = "nav-link active";
        }
    }



    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                <Link className="navbar-brand" onClick={this.func} to="/">News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={this.func} to="/general" >general</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={this.func} to="/business">business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={this.func} to="/entertainment">entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={this.func} to="/health">health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={this.func} to="/science">science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={this.func} to="/sports">sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={this.func} to="/technology">technology</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" />
                            <button className="btn btn-outline-light" onClick={this.props.search}>Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
